import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header, PageId } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { ShoppingBagDrawer } from './components/ShoppingBagDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductDrawer } from './components/ProductDrawer';
import { Product } from './data/products';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeProductForDrawer, setActiveProductForDrawer] = useState<Product | null>(null);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProduct = (product: Product) => {
    setActiveProductForDrawer(product);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EFE9] text-[#1A1A1A]">
      {/* Persistent Editorial Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        variant={currentPage === 'home' || currentPage === 'gallery' ? 'auto' : 'light'}
      />

      {/* Main View with Magazine-style Smooth Settle Transition */}
      <main key={currentPage} className="flex-1 animate-in fade-in slide-in-from-bottom-2 duration-300">
        {currentPage === 'home' && (
          <Home onNavigate={handleNavigate} onOpenProduct={handleOpenProduct} />
        )}
        {currentPage === 'store' && (
          <Store onOpenProduct={handleOpenProduct} />
        )}
        {currentPage === 'about' && (
          <About onNavigate={handleNavigate} />
        )}
        {currentPage === 'gallery' && (
          <Gallery onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <Contact />
        )}
      </main>

      {/* Global Slide-Out Shopping Bag Drawer */}
      <ShoppingBagDrawer />

      {/* Global Product Specification Drawer */}
      <ProductDrawer
        product={activeProductForDrawer}
        onClose={() => setActiveProductForDrawer(null)}
      />

      {/* Global Demonstration Checkout Modal */}
      <CheckoutModal />

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
