import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldAlert, Package, Printer, Download } from 'lucide-react';
import { useCart, CheckoutDetails } from '../context/CartContext';
import { BrandEmblem, BrandLogo } from './BrandLogo';

export const CheckoutModal: React.FC = () => {
  const {
    items,
    subtotal,
    shippingFee,
    total,
    isCheckoutOpen,
    setIsCheckoutOpen,
    completeCheckout,
    lastOrder
  } = useCart();

  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');

  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Cape Town',
    postalCode: '8001',
    country: 'South Africa',
    shippingMethod: 'Express Studio Courier (1-3 Business Days)',
    paymentMethod: 'demo-card'
  });

  const [completedOrder, setCompletedOrder] = useState<CheckoutDetails | null>(lastOrder);

  if (!isCheckoutOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const order = completeCheckout({
      customerName: formData.customerName || 'Rebirth Collector',
      email: formData.email || 'collector@example.com',
      phone: formData.phone || '+27 (0)71 234 5678',
      address: formData.address || '44 Kloof Street, Gardens',
      city: formData.city,
      postalCode: formData.postalCode,
      country: formData.country,
      shippingMethod: formData.shippingMethod
    });
    setCompletedOrder(order);
    setStep('confirmation');
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    if (step === 'confirmation') {
      setStep('shipping');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 selection:bg-[#E1E724] selection:text-[#1A1A1A]">
      <div className="bg-[#1A1A1A] text-[#F2EFE9] border border-white/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col justify-between shadow-2xl relative">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandEmblem className="w-6 h-7 text-[#E1E724]" />
            <div>
              <span className="text-[10px] font-bebas tracking-[0.25em] text-[#E1E724] block">
                ATELIER ORDER DESK // DROP 01
              </span>
              <h2 className="font-anton text-2xl tracking-wide uppercase">
                {step === 'confirmation' ? 'ORDER CONFIRMED' : 'REBIRTH CHECKOUT'}
              </h2>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Transparency Banner */}
        <div className="bg-[#E1E724]/10 border-b border-[#E1E724]/20 px-6 py-2.5 flex items-center gap-2 text-xs font-mono text-[#E1E724]">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>
            DEMONSTRATION STOREFRONT • No actual credit cards are charged. Real production releases are announced via RXSTFXL STUDIO.
          </span>
        </div>

        {/* Content based on step */}
        <div className="p-6">
          {step === 'shipping' && (
            <form onSubmit={handleShippingSubmit} className="space-y-6">
              <div>
                <h3 className="font-bebas text-lg tracking-widest text-[#E1E724] uppercase mb-1">
                  STEP 01 // DELIVERY DESTINATION
                </h3>
                <p className="text-xs font-mono text-neutral-400">
                  Provide recipient contact and delivery coordinates.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <label className="block text-neutral-400 mb-1">FULL NAME *</label>
                  <input
                    type="text"
                    name="customerName"
                    required
                    value={formData.customerName}
                    onChange={handleInputChange}
                    placeholder="e.g. Siyabonga Khumalo"
                    className="w-full bg-neutral-900 border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#E1E724]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@domain.com"
                    className="w-full bg-neutral-900 border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#E1E724]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-neutral-400 mb-1">STREET ADDRESS *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="e.g. 120 Bree Street, Studio 4B"
                    className="w-full bg-neutral-900 border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#E1E724]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">CITY / SUBURB *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Cape Town"
                    className="w-full bg-neutral-900 border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#E1E724]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">POSTAL CODE *</label>
                  <input
                    type="text"
                    name="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="8001"
                    className="w-full bg-neutral-900 border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#E1E724]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">COUNTRY *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-900 border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#E1E724]"
                  >
                    <option value="South Africa">South Africa</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Germany">Germany</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Kenya">Kenya</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">CONTACT NUMBER *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+27 71 000 0000"
                    className="w-full bg-neutral-900 border border-white/20 p-2.5 text-white focus:outline-none focus:border-[#E1E724]"
                  />
                </div>
              </div>

              {/* Order quick summary */}
              <div className="p-4 bg-neutral-900 border border-white/10 text-xs font-mono space-y-1.5">
                <div className="flex justify-between text-neutral-400">
                  <span>ITEMS IN BAG:</span>
                  <span className="text-white">{items.length} garments</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>ORDER SUBTOTAL:</span>
                  <span className="text-white">R{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>SHIPPING:</span>
                  <span className="text-[#E1E724]">
                    {shippingFee === 0 ? 'COMPLIMENTARY' : `R${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-white pt-2 border-t border-white/10 text-sm">
                  <span>TOTAL ESTIMATE:</span>
                  <span className="text-[#E1E724]">R{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2.5 border border-white/20 text-neutral-400 hover:text-white font-bebas text-sm tracking-wider cursor-pointer"
                >
                  RETURN TO BAG
                </button>
                <button
                  type="submit"
                  className="px-7 py-2.5 bg-[#E1E724] text-[#1A1A1A] font-anton text-base tracking-wider uppercase hover:bg-white transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>CONTINUE TO PAYMENT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 'payment' && (
            <form onSubmit={handlePaymentSubmit} className="space-y-6">
              <div>
                <h3 className="font-bebas text-lg tracking-widest text-[#E1E724] uppercase mb-1">
                  STEP 02 // PAYMENT & SIMULATED SETTLEMENT
                </h3>
                <p className="text-xs font-mono text-neutral-400">
                  Select payment route for this Drop 01 demonstration order.
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <label className="flex items-center gap-3 p-3.5 border border-[#E1E724] bg-neutral-900 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="demo-card"
                    checked={formData.paymentMethod === 'demo-card'}
                    onChange={handleInputChange}
                    className="accent-[#E1E724]"
                  />
                  <div className="flex-1">
                    <div className="text-white font-bold">SIMULATED ATELIER CARD CHECKOUT</div>
                    <div className="text-neutral-400 text-[11px]">
                      Simulates instantaneous South African 3D-Secure settlement with test credentials.
                    </div>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3.5 border border-white/10 bg-neutral-900 hover:border-white/30 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="demo-reservation"
                    checked={formData.paymentMethod === 'demo-reservation'}
                    onChange={handleInputChange}
                    className="accent-[#E1E724]"
                  />
                  <div className="flex-1">
                    <div className="text-white font-bold">STUDIO ARCHIVAL HOLD & INVOICE</div>
                    <div className="text-neutral-400 text-[11px]">
                      Places garment on a 48-hour reserve for private viewing at RXSTFXL Cape Town.
                    </div>
                  </div>
                </label>
              </div>

              <div className="p-4 bg-neutral-900 border border-white/10 text-xs font-mono space-y-2">
                <div className="text-neutral-300 font-semibold mb-1">DELIVERING TO:</div>
                <div className="text-neutral-400">
                  {formData.customerName} • {formData.address}, {formData.city}, {formData.postalCode}, {formData.country}
                </div>
                <div className="text-neutral-400">
                  Contact: {formData.email} • {formData.phone}
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={() => setStep('shipping')}
                  className="px-5 py-2.5 border border-white/20 text-neutral-400 hover:text-white font-bebas text-sm tracking-wider cursor-pointer"
                >
                  ← BACK TO ADDRESS
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#E1E724] text-[#1A1A1A] font-anton text-lg tracking-wider uppercase hover:bg-white transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>COMPLETE SIMULATED ORDER</span>
                  <Check className="w-5 h-5" />
                </button>
              </div>
            </form>
          )}

          {step === 'confirmation' && completedOrder && (
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-white/10">
                <div className="w-14 h-14 bg-[#E1E724]/20 border border-[#E1E724] mx-auto flex items-center justify-center mb-3">
                  <Check className="w-8 h-8 text-[#E1E724]" />
                </div>
                <span className="text-xs font-mono text-[#E1E724] uppercase tracking-widest block mb-1">
                  RESERVATION MANIFEST GENERATED
                </span>
                <h3 className="font-anton text-3xl tracking-wide uppercase text-white">
                  ORDER #{completedOrder.orderNumber}
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-2">
                  Recorded on {completedOrder.date} • Cape Town Central Standard Time
                </p>
              </div>

              {/* Receipt Body */}
              <div className="p-4 bg-neutral-900 border border-white/10 font-mono text-xs space-y-3">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-400">COLLECTOR:</span>
                  <span className="text-white font-semibold">{completedOrder.customerName}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-400">DESTINATION:</span>
                  <span className="text-white text-right">
                    {completedOrder.address}, {completedOrder.city}, {completedOrder.country}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-400">SHIPPING:</span>
                  <span className="text-white">{completedOrder.shippingMethod}</span>
                </div>
                <div className="flex justify-between pt-1 font-bold text-sm">
                  <span className="text-neutral-300">TOTAL SETTLEMENT:</span>
                  <span className="text-[#E1E724]">R{completedOrder.total.toLocaleString()}</span>
                </div>
              </div>

              <div className="text-xs font-mono text-neutral-400 border-l-2 border-[#E1E724] pl-3 py-1">
                A verification copy has been logged into the demonstration session state. In production, this trigger connects directly to Shopify / Commerce Layer fulfillment webhooks.
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-5 py-2.5 border border-white/20 text-neutral-300 hover:text-white font-bebas text-sm tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>PRINT ARCHIVAL RECEIPT</span>
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-7 py-2.5 bg-[#E1E724] text-[#1A1A1A] font-anton text-base tracking-wider uppercase hover:bg-white transition-colors cursor-pointer"
                >
                  CONTINUE EXPLORING
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
