import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BrandEmblem } from './BrandLogo';

export const ShoppingBagDrawer: React.FC = () => {
  const {
    items,
    totalCount,
    subtotal,
    shippingFee,
    total,
    isDrawerOpen,
    setIsDrawerOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    setIsCheckoutOpen
  } = useCart();

  if (!isDrawerOpen) return null;

  const freeShippingThreshold = 2000;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleCheckoutClick = () => {
    setIsDrawerOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsDrawerOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Slide-out Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#1A1A1A] text-[#F2EFE9] border-l border-white/10 flex flex-col justify-between shadow-2xl">
          {/* Top Bar */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BrandEmblem className="w-5 h-6 text-[#E1E724]" />
              <div>
                <h3 className="font-anton text-xl tracking-wide uppercase">
                  SHOPPING BAG
                </h3>
                <span className="text-[11px] font-mono text-neutral-400">
                  {totalCount} {totalCount === 1 ? 'ITEM' : 'ITEMS'} RESERVED
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping Progress bar */}
          <div className="bg-neutral-900/80 px-6 py-3 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center justify-between text-[11px] text-neutral-300 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#E1E724]" />
                {subtotal >= freeShippingThreshold ? (
                  <span className="text-[#E1E724] font-semibold">
                    COMPLIMENTARY DOMESTIC EXPRESS QUALIFIED
                  </span>
                ) : (
                  <span>
                    ADD <strong className="text-[#E1E724]">R{remainingForFreeShipping.toLocaleString()}</strong> FOR FREE ZA EXPRESS
                  </span>
                )}
              </span>
              <span>{Math.round(progressToFreeShipping)}%</span>
            </div>
            <div className="w-full bg-white/10 h-1 rounded-none overflow-hidden">
              <div
                className="bg-[#E1E724] h-full transition-all duration-300"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                <BrandEmblem className="w-12 h-14 text-neutral-600 opacity-60" />
                <div className="space-y-1">
                  <h4 className="font-anton text-lg tracking-wide uppercase text-neutral-300">
                    YOUR BAG IS EMPTY
                  </h4>
                  <p className="text-xs font-mono text-neutral-500 max-w-xs">
                    No garments currently selected from Drop 01. Browse the archival spreadsheet or editorial lookbook to add items.
                  </p>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="mt-4 px-6 py-2.5 bg-[#E1E724] text-[#1A1A1A] font-bebas tracking-wider text-sm hover:bg-white transition-colors cursor-pointer"
                >
                  EXPLORE DROP 01
                </button>
              </div>
            ) : (
              items.map(item => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-neutral-900/50 border border-white/5 group hover:border-white/20 transition-all"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-neutral-800 shrink-0 overflow-hidden relative border border-white/10">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300 p-1"
                    />
                    <span className="absolute bottom-1 right-1 text-[9px] font-mono bg-black/80 px-1 text-[#E1E724]">
                      {item.size}
                    </span>
                  </div>

                  {/* Info & Quantity */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-mono text-neutral-500 block">
                            {item.product.sku}
                          </span>
                          <h4 className="font-anton text-base tracking-wide uppercase text-white leading-tight">
                            {item.product.name}
                          </h4>
                          <span className="text-xs text-neutral-400 font-mono">
                            COLOUR: {item.product.color}
                          </span>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-neutral-500 hover:text-red-400 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-white/20">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3 text-neutral-300" />
                        </button>
                        <span className="px-2.5 text-xs font-mono tabular-nums text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3 text-neutral-300" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <span className="font-mono text-sm font-semibold tabular-nums text-[#E1E724]">
                          R{(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Calculations */}
          {items.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-neutral-900/90 space-y-4">
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between text-neutral-400">
                  <span>SUBTOTAL</span>
                  <span className="text-white tabular-nums">
                    R{subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>ESTIMATED SHIPPING</span>
                  <span className="text-white tabular-nums">
                    {shippingFee === 0 ? (
                      <span className="text-[#E1E724]">FREE (EXPRESS)</span>
                    ) : (
                      `R${shippingFee.toLocaleString()}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-neutral-400 text-[11px]">
                  <span>15% SA VAT</span>
                  <span>INCLUDED IN LIST PRICES</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between items-baseline font-bold">
                  <span className="font-anton text-lg tracking-wide uppercase text-white">
                    TOTAL ESTIMATE
                  </span>
                  <span className="font-anton text-2xl tracking-wide text-[#E1E724] tabular-nums">
                    R{total.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E1E724]" />
                <span>ATELIER AUTHENTICITY & 14-DAY ARCHIVAL RETURNS</span>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  onClick={handleCheckoutClick}
                  className="w-full py-3.5 bg-[#E1E724] hover:bg-white text-[#1A1A1A] font-anton text-lg tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex justify-between items-center pt-1 text-[11px] font-mono text-neutral-500">
                  <button
                    onClick={clearCart}
                    className="hover:text-red-400 transition-colors underline cursor-pointer"
                  >
                    EMPTY BAG
                  </button>
                  <span>CURRENCY: SOUTH AFRICAN RAND (ZAR)</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
