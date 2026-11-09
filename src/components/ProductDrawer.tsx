import React, { useState } from 'react';
import { X, Check, ShoppingBag, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { BrandEmblem } from './BrandLogo';

interface ProductDrawerProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDrawer: React.FC<ProductDrawerProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(
    product ? product.sizes[0] : 'M'
  );
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'care' | 'shipping'>('details');

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, selectedSize, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden selection:bg-[#E1E724] selection:text-[#1A1A1A]">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-12">
        <div className="w-screen max-w-xl bg-[#F2EFE9] text-[#1A1A1A] flex flex-col justify-between shadow-2xl overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b border-[#1A1A1A]/10 flex items-center justify-between bg-white/50 backdrop-blur-md sticky top-0 z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
              <span>ARCHIVE: {product.collection}</span>
              <span>/</span>
              <span className="text-[#1A1A1A] font-bold">{product.sku}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-500 hover:text-black transition-colors cursor-pointer"
              aria-label="Close product drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Product Body */}
          <div className="p-6 sm:p-8 space-y-6 flex-1">
            <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden border border-[#1A1A1A]/15 group flex items-center justify-center p-3">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#1A1A1A] text-white text-[10px] font-bebas tracking-widest px-2.5 py-1">
                {product.category.toUpperCase()}
              </div>
              {product.isHeroDropPiece && (
                <div className="absolute top-3 right-3 bg-[#E1E724] text-[#1A1A1A] text-[10px] font-bebas tracking-widest px-2.5 py-1 font-bold">
                  DROP 01 HERO PIECE
                </div>
              )}
            </div>

            {/* Title & Price */}
            <div className="space-y-2 border-b border-[#1A1A1A]/10 pb-5">
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-anton text-3xl sm:text-4xl uppercase tracking-wide text-[#1A1A1A] leading-tight">
                  {product.name}
                </h2>
                <span className="font-bebas text-2xl sm:text-3xl text-[#1A1A1A] tabular-nums tracking-wide whitespace-nowrap">
                  R{product.price.toLocaleString()}
                </span>
              </div>
              <p className="font-body text-neutral-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color & Size selection */}
            <div className="space-y-4 border-b border-[#1A1A1A]/10 pb-6">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500">COLOURWAY:</span>
                <span className="font-bold text-[#1A1A1A]">{product.color}</span>
              </div>

              {/* Sizes */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-neutral-500">SELECT SIZE:</span>
                  <span className="text-neutral-500 underline cursor-pointer">
                    BOX FIT GUIDE
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map(size => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2.5 font-bebas text-lg tracking-wider transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm'
                            : 'bg-white/60 text-neutral-700 border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-mono text-neutral-500">QUANTITY:</span>
                <div className="flex items-center border border-[#1A1A1A]/30 bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm font-mono hover:bg-neutral-100 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-mono tabular-nums font-bold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm font-mono hover:bg-neutral-100 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Accordion Tabs */}
            <div className="space-y-3">
              <div className="flex border-b border-[#1A1A1A]/10 font-bebas text-base tracking-widest">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-2 px-3 border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'details'
                      ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold'
                      : 'border-transparent text-neutral-400 hover:text-black'
                  }`}
                >
                  SPECIFICATIONS
                </button>
                <button
                  onClick={() => setActiveTab('care')}
                  className={`pb-2 px-3 border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'care'
                      ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold'
                      : 'border-transparent text-neutral-400 hover:text-black'
                  }`}
                >
                  FABRIC & CARE
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-2 px-3 border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'shipping'
                      ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold'
                      : 'border-transparent text-neutral-400 hover:text-black'
                  }`}
                >
                  DELIVERY / RETURNS
                </button>
              </div>

              <div className="text-xs font-mono text-neutral-600 leading-relaxed min-h-[100px] pt-2">
                {activeTab === 'details' && (
                  <ul className="space-y-1.5 list-disc pl-4">
                    {product.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                    <li>Engineered and manufactured in Cape Town, South Africa</li>
                  </ul>
                )}
                {activeTab === 'care' && (
                  <ul className="space-y-1.5 list-disc pl-4">
                    {product.fabricCare.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                {activeTab === 'shipping' && (
                  <div className="space-y-2">
                    <p>
                      <strong>Domestic Express:</strong> 1–3 business days via carbon-neutral courier across South Africa. Complimentary on orders over R2,000.
                    </p>
                    <p>
                      <strong>International Courier:</strong> 4–7 business days to UK, Europe, North America, and selected African territories.
                    </p>
                    <p>
                      <strong>Archival Return Policy:</strong> Unworn items with intact security ribbons may be returned within 14 days of delivery.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="p-6 border-t border-[#1A1A1A]/10 bg-white/70 backdrop-blur-md sticky bottom-0 z-10 flex gap-3">
            <button
              onClick={handleAdd}
              className={`flex-1 py-4 font-anton text-lg tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                addedAnimation
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#1A1A1A] hover:bg-[#E1E724] hover:text-[#1A1A1A] text-white'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>ADDED TO BAG // RESERVED</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>
                    ADD TO BAG • R{(product.price * quantity).toLocaleString()}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
