/**
 * REBIRTH ATELIERS® — Ambient Soundscape Engine
 * Pure Web Audio API atmospheric drone synthesizer.
 * Creates an organic, subtle fashion-atelier drone soundscape with soft harmonics.
 */

class SoundscapeEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private isPlaying: boolean = false;

  private init() {
    if (this.ctx) return;
    const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioCtxClass();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);

    // Warm multi-stage lowpass filter for gentle editorial warmth
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, this.ctx.currentTime);
    filter.Q.setValueAtTime(2.5, this.ctx.currentTime);

    // Connect filter to master gain to output
    filter.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);

    // Subtle atmospheric harmonic notes (E minor root / fifth chord)
    // 82.4Hz (E2), 123.47Hz (B2), 164.81Hz (E3), 196.0Hz (G3 subtle warmth)
    const frequencies = [82.4, 123.47, 164.81, 196.0];

    frequencies.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = idx === 0 ? 'sine' : idx === 1 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle detune for organic flutter / moth wing movement feel
      osc.detune.setValueAtTime((idx - 1.5) * 4.2, this.ctx.currentTime);

      // Individual gain levels
      const level = idx === 0 ? 0.35 : idx === 1 ? 0.2 : 0.12;
      oscGain.gain.setValueAtTime(level, this.ctx.currentTime);

      osc.connect(oscGain);
      oscGain.connect(filter);

      osc.start();
      this.oscillators.push(osc);
    });

    // Slow LFO to mimic breathing / wing flapping modulation
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(0.18, this.ctx.currentTime); // ~5.5s cycle
    lfoGain.gain.setValueAtTime(45, this.ctx.currentTime);
    lfo.connect(filter.frequency);
    lfo.start();
    this.oscillators.push(lfo);
  }

  public async toggle(): Promise<boolean> {
    if (!this.isPlaying) {
      await this.start();
      return true;
    } else {
      this.stop();
      return false;
    }
  }

  public async start(): Promise<void> {
    try {
      this.init();
      if (!this.ctx || !this.masterGain) return;
      if (this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      // Smooth fade in over 2 seconds
      this.masterGain.gain.linearRampToValueAtTime(0.28, now + 2.0);
      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop(): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    // Smooth fade out over 1.2 seconds
    this.masterGain.gain.linearRampToValueAtTime(0, now + 1.2);
    this.isPlaying = false;
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const soundscape = new SoundscapeEngine();
