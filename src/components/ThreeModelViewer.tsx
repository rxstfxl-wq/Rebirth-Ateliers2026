import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { RotateCw, RefreshCw, Upload, Sun, Sparkles } from 'lucide-react';

interface ThreeModelViewerProps {
  modelUrl?: string;
  modelName?: string;
}

export const ThreeModelViewer: React.FC<ThreeModelViewerProps> = ({
  modelUrl = '/Shop%20content/beanie.fbx',
  modelName = 'beanie.fbx — 3D Product View'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [activeTitle, setActiveTitle] = useState(modelName);
  const [autoRotate, setAutoRotate] = useState(true);
  const [exposure, setExposure] = useState<number>(1.15);
  const [envPreset, setEnvPreset] = useState<string>('studio');
  const [loading, setLoading] = useState(false);

  // References to keep Three.js instances across re-renders
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const currentModelRef = useRef<THREE.Object3D | null>(null);
  const shadowPlaneRef = useRef<THREE.Mesh | null>(null);
  const defaultEnvRef = useRef<THREE.Texture | null>(null);
  const displayFBXRef = useRef<((object: THREE.Group, label: string) => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      36,
      container.clientWidth / (container.clientHeight || 450),
      0.05,
      100
    );
    camera.position.set(0, 0.12, 4.1);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight || 450);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Append canvas
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.6;
    controlsRef.current = controls;

    // PMREM Environment
    const pmrem = new THREE.PMREMGenerator(renderer);
    const defaultStudioEnv = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = defaultStudioEnv;
    defaultEnvRef.current = defaultStudioEnv;

    // Studio Lights
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(-2.8, 3.4, 3.2);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLeft = new THREE.DirectionalLight(0xdbeafe, 1.65);
    rimLeft.position.set(-3.5, 1.6, -2.2);
    scene.add(rimLeft);

    const rimRight = new THREE.DirectionalLight(0xf3f4f6, 1.55);
    rimRight.position.set(3.5, 1.8, 2.0);
    scene.add(rimRight);

    // Contact Shadow Plane
    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.ShadowMaterial({ opacity: 0.18 })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.02;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);
    shadowPlaneRef.current = shadowPlane;

    // Function to display loaded model
    const displayFBX = (object: THREE.Group, label: string) => {
      if (currentModelRef.current) {
        scene.remove(currentModelRef.current);
      }

      object.traverse((child) => {
        const mesh = child as THREE.Mesh;
        if (!mesh.isMesh) return;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        const mat = mesh.material;
        const matName = Array.isArray(mat)
          ? mat.map((m) => m.name).join(' ')
          : mat
          ? (mat as THREE.Material).name
          : '';
        const name = (matName || mesh.name || '').toLowerCase();
        if (name.includes('logo') || name.includes('embroidery')) {
          mesh.material = new THREE.MeshStandardMaterial({
            color: 0xf1f3f7,
            roughness: 0.32,
            metalness: 0.12,
          });
        } else if (name.includes('inner')) {
          mesh.material = new THREE.MeshStandardMaterial({
            color: 0x050507,
            roughness: 0.96,
            side: THREE.DoubleSide,
          });
        } else {
          mesh.material = new THREE.MeshPhysicalMaterial({
            color: 0x141519,
            roughness: 0.78,
            sheen: 0.65,
            sheenRoughness: 0.75,
            sheenColor: new THREE.Color(0x3a3d46),
            side: THREE.DoubleSide,
          });
        }
      });

      const box = new THREE.Box3().setFromObject(object);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const scale = 2.05 / (Math.max(size.x, size.y, size.z) || 1);
      object.scale.multiplyScalar(scale);
      box.setFromObject(object);
      box.getCenter(center);
      object.position.sub(center);
      box.setFromObject(object);

      if (shadowPlaneRef.current) {
        shadowPlaneRef.current.position.y = box.min.y - 0.02;
      }

      currentModelRef.current = object;
      scene.add(object);
      setActiveTitle(label);
      setLoading(false);
    };
    displayFBXRef.current = displayFBX;

    // Procedural Beanie 3D Fallback Mesh (if .fbx is empty or still loading)
    const createProceduralBeanie = () => {
      const beanieGroup = new THREE.Group();

      // Crown dome
      const crownGeo = new THREE.SphereGeometry(0.88, 36, 24, 0, Math.PI * 2, 0, Math.PI * 0.55);
      crownGeo.scale(1, 1.25, 0.95);
      const knitMat = new THREE.MeshPhysicalMaterial({
        color: 0x141519,
        roughness: 0.85,
        sheen: 0.7,
        sheenRoughness: 0.6,
        sheenColor: new THREE.Color(0x3a3d46),
        side: THREE.DoubleSide
      });
      const crownMesh = new THREE.Mesh(crownGeo, knitMat);
      crownMesh.position.y = 0.2;
      crownMesh.castShadow = true;
      beanieGroup.add(crownMesh);

      // Folded cuff (torus/cylinder ribbed cuff)
      const cuffGeo = new THREE.CylinderGeometry(0.92, 0.94, 0.55, 36, 12, true);
      const cuffMat = new THREE.MeshPhysicalMaterial({
        color: 0x101114,
        roughness: 0.8,
        sheen: 0.8,
        sheenColor: new THREE.Color(0x424652),
        side: THREE.DoubleSide
      });
      const cuffMesh = new THREE.Mesh(cuffGeo, cuffMat);
      cuffMesh.position.y = 0.05;
      cuffMesh.castShadow = true;
      beanieGroup.add(cuffMesh);

      // Embroidered butterfly emblem badge
      const badgeGeo = new THREE.PlaneGeometry(0.24, 0.3);
      const badgeMat = new THREE.MeshStandardMaterial({
        color: 0xf1f3f7,
        roughness: 0.3,
        metalness: 0.15
      });
      const badgeMesh = new THREE.Mesh(badgeGeo, badgeMat);
      badgeMesh.position.set(0, 0.06, 0.94);
      beanieGroup.add(badgeMesh);

      displayFBX(beanieGroup, 'beanie.fbx — 3D Product View');
    };

    // Load FBX Loader
    setLoading(true);
    const fbxLoader = new FBXLoader();
    fbxLoader.load(
      modelUrl,
      (obj) => {
        if (obj && obj.children && obj.children.length > 0) {
          displayFBX(obj, modelName);
        } else {
          // If the .fbx file in public has no mesh nodes yet, display our high-fidelity procedural beanie
          createProceduralBeanie();
        }
      },
      undefined,
      (err) => {
        // Fallback gracefully to procedural 3D model
        createProceduralBeanie();
      }
    );

    // Animation loop
    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      camera.aspect = container.clientWidth / (container.clientHeight || 450);
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight || 450);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      pmrem.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [modelUrl, modelName]);

  // Handle Auto-Rotate toggle
  const toggleAutoRotate = () => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !controlsRef.current.autoRotate;
      setAutoRotate(controlsRef.current.autoRotate);
    }
  };

  // Handle Camera Reset
  const resetCamera = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(0, 0.12, 4.1);
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
  };

  // Handle Environment Change
  const handleEnvChange = (val: string) => {
    setEnvPreset(val);
    const scene = sceneRef.current;
    if (!scene) return;

    if (val === 'studio') {
      if (defaultEnvRef.current) scene.environment = defaultEnvRef.current;
    } else {
      const rgbeLoader = new RGBELoader();
      rgbeLoader.load(val, (tex) => {
        tex.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = tex;
      });
    }
  };

  // Handle Exposure Change
  const handleExposureChange = (val: number) => {
    setExposure(val);
    if (rendererRef.current) {
      rendererRef.current.toneMappingExposure = val;
    }
  };

  // File Picker / Drag & Drop loader
  const handleFile = (file?: File) => {
    if (!file) return;
    setLoading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const buffer = e.target?.result as ArrayBuffer;
        const fbxLoader = new FBXLoader();
        const obj = fbxLoader.parse(buffer, './');
        if (displayFBXRef.current) {
          displayFBXRef.current(obj, file.name);
        }
      } catch (err) {
        console.error('Error parsing FBX:', err);
        setLoading(false);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div
      ref={cardRef}
      id="viewportCard"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          handleFile(e.dataTransfer.files[0]);
        }
      }}
      className="relative w-full h-[420px] sm:h-[480px] overflow-hidden border border-[#1A1A1A]/15 bg-gradient-to-b from-white via-neutral-100 to-neutral-200 select-none shadow-inner"
    >
      {/* Top Bar: Model Name + Local .FBX File Tester */}
      <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center z-10 pointer-events-none">
        <div
          id="modelTitle"
          className="pointer-events-auto bg-[#161920]/90 backdrop-blur-md text-[#F3F4F6] px-3.5 py-1.5 rounded-none text-xs font-mono border border-white/10 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 bg-[#E1E724] animate-pulse" />
          <span className="truncate max-w-[220px] sm:max-w-none">{activeTitle}</span>
        </div>

        <label className="pointer-events-auto bg-[#161920]/90 hover:bg-black backdrop-blur-md text-[#F3F4F6] hover:text-[#E1E724] px-3.5 py-1.5 rounded-none text-xs font-mono border border-white/10 cursor-pointer transition-colors flex items-center gap-1.5">
          <Upload className="w-3.5 h-3.5" />
          <span>LOAD .FBX</span>
          <input
            ref={fileInputRef}
            type="file"
            accept=".fbx"
            hidden
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFile(e.target.files[0]);
              }
            }}
          />
        </label>
      </div>

      {/* 3D Viewport Canvas Container */}
      <div
        ref={containerRef}
        id="canvasContainer"
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Loading Indicator */}
      {loading && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-20 font-mono text-xs text-neutral-800">
          <RefreshCw className="w-5 h-5 animate-spin mr-2 text-[#E1E724]" />
          <span>INITIALIZING 3D ATELIER RIG...</span>
        </div>
      )}

      {/* Bottom Floating Camera & Studio HDRI Controls */}
      <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-2 bg-[#161920]/90 backdrop-blur-md border border-white/15 px-3 py-2 rounded-none z-10 max-w-[94%]">
        <button
          type="button"
          onClick={toggleAutoRotate}
          className={`px-2.5 py-1 text-xs font-mono transition-colors flex items-center gap-1 cursor-pointer ${
            autoRotate
              ? 'bg-[#E1E724] text-[#1A1A1A] font-bold'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
          title="Toggle Auto-Rotate"
        >
          <RotateCw className="w-3 h-3" />
          <span className="hidden sm:inline">ROTATE</span>
        </button>

        <button
          type="button"
          onClick={resetCamera}
          className="bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 text-xs font-mono transition-colors flex items-center gap-1 cursor-pointer"
          title="Reset Camera View"
        >
          <RefreshCw className="w-3 h-3" />
          <span className="hidden sm:inline">RESET</span>
        </button>

        <select
          value={envPreset}
          onChange={(e) => handleEnvChange(e.target.value)}
          className="bg-[#161920] text-neutral-200 border border-white/20 px-2 py-1 text-xs font-mono cursor-pointer focus:outline-none"
        >
          <option value="studio">STUDIO SOFTBOX (DEFAULT)</option>
          <option value="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr">
            PRODUCT STUDIO HDRI
          </option>
          <option value="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/photo_studio_01_1k.hdr">
            PHOTO LOFT HDRI
          </option>
          <option value="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/royal_esplanade_1k.hdr">
            DAYLIGHT SHOWROOM
          </option>
        </select>

        <select
          value={exposure}
          onChange={(e) => handleExposureChange(parseFloat(e.target.value))}
          className="bg-[#161920] text-neutral-200 border border-white/20 px-2 py-1 text-xs font-mono cursor-pointer focus:outline-none"
        >
          <option value="0.85">EXP: LOW</option>
          <option value="1.15">EXP: STANDARD</option>
          <option value="1.45">EXP: BRIGHT</option>
        </select>
      </div>
    </div>
  );
};
