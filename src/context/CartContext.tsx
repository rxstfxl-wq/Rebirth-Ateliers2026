import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';

export interface CartItem {
  id: string; // unique item id (product.id + size)
  product: Product;
  size: string;
  quantity: number;
}

export interface CheckoutDetails {
  orderNumber: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  shippingMethod: string;
  subtotal: number;
  shippingFee: number;
  total: number;
  date: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, size: string, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  shippingFee: number;
  total: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  lastOrder: CheckoutDetails | null;
  completeCheckout: (details: Omit<CheckoutDetails, 'orderNumber' | 'subtotal' | 'shippingFee' | 'total' | 'date'>) => CheckoutDetails;
  selectedProductForQuickView: Product | null;
  setSelectedProductForQuickView: (product: Product | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'rebirth_ateliers_bag_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [lastOrder, setLastOrder] = useState<CheckoutDetails | null>(null);
  const [selectedProductForQuickView, setSelectedProductForQuickView] = useState<Product | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addToCart = (product: Product, size: string, quantity: number = 1) => {
    setItems(prev => {
      const itemId = `${product.id}-${size}`;
      const existing = prev.find(i => i.id === itemId);
      if (existing) {
        return prev.map(i =>
          i.id === itemId ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { id: itemId, product, size, quantity }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setItems(prev => prev.filter(i => i.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setItems(prev =>
      prev
        .map(i => {
          if (i.id === itemId) {
            const nextQty = i.quantity + delta;
            return nextQty > 0 ? { ...i, quantity: nextQty } : null;
          }
          return i;
        })
        .filter((i): i is CartItem => i !== null)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((acc, i) => acc + i.quantity, 0);
  const subtotal = items.reduce((acc, i) => acc + i.product.price * i.quantity, 0);
  const shippingFee = subtotal === 0 ? 0 : subtotal >= 2000 ? 0 : 150;
  const total = subtotal + shippingFee;

  const completeCheckout = (
    details: Omit<CheckoutDetails, 'orderNumber' | 'subtotal' | 'shippingFee' | 'total' | 'date'>
  ): CheckoutDetails => {
    const orderNumber = `RA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const fullOrder: CheckoutDetails = {
      ...details,
      orderNumber,
      subtotal,
      shippingFee,
      total,
      date: new Date().toLocaleDateString('en-ZA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    setLastOrder(fullOrder);
    clearCart();
    return fullOrder;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        shippingFee,
        total,
        isDrawerOpen,
        setIsDrawerOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        lastOrder,
        completeCheckout,
        selectedProductForQuickView,
        setSelectedProductForQuickView
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
