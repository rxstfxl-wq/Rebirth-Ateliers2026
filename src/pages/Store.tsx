import React, { useState, useMemo } from 'react';
import {
  Table,
  Grid,
  Search,
  Plus,
  Check,
  ShoppingBag,
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import { PRODUCTS, DROP_01_COLLECTION, Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface StoreProps {
  onOpenProduct: (product: Product) => void;
}

export const Store: React.FC<StoreProps> = ({ onOpenProduct }) => {
  const { addToCart } = useCart();

  // Default to 'grid' to match Panel 02 of the wireframe snippet
  const [viewMode, setViewMode] = useState<'grid' | 'spreadsheet'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc' | 'name'>('newest');
  const [addedItemSku, setAddedItemSku] = useState<string | null>(null);

  const categories = ['ALL', 'HOODIES', 'SWEATS', 'PANTS', 'SHIRTS', 'ACCESSORIES'];

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategory !== 'ALL') {
      const catMap: Record<string, string> = {
        HOODIES: 'Hoodie',
        SWEATS: 'Pants',
        PANTS: 'Pants',
        SHIRTS: 'Tee',
        ACCESSORIES: 'Accessories'
      };
      const mapped = catMap[selectedCategory] || selectedCategory;
      list = list.filter(p => p.category === mapped);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.color.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleQuickAdd = (product: Product) => {
    addToCart(product, product.sizes[0], 1);
    setAddedItemSku(product.sku);
    setTimeout(() => {
      setAddedItemSku(null);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#F2EFE9] text-[#1A1A1A] pt-28 pb-24 selection:bg-[#E1E724] selection:text-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
        {/* Header (Panel 02 wireframe: STORE / CURRENT DROP — REBIRTH // 01) */}
        <div className="space-y-1 border-b border-[#1A1A1A]/10 pb-6">
          <h1 className="font-anton text-6xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#1A1A1A] leading-none">
            STORE
          </h1>
          <span className="font-bebas text-lg sm:text-xl tracking-[0.22em] text-neutral-600 uppercase block">
            CURRENT DROP — REBIRTH // 01
          </span>
        </div>

        {/* Minimal Single-Line Filter Ribbon (Panel 02 layout) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1A1A1A]/10 pb-4 text-xs font-mono">
          {/* Categories: ALL  HOODIES  SWEATS  PANTS  ACCESSORIES */}
          <div className="flex items-center gap-6 overflow-x-auto pb-1 md:pb-0 scrollbar-none font-bebas text-base sm:text-lg tracking-[0.18em]">
            {categories.map(cat => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`transition-colors uppercase whitespace-nowrap cursor-pointer pb-0.5 border-b-2 ${
                    active
                      ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold'
                      : 'border-transparent text-neutral-400 hover:text-[#1A1A1A]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right Controls: Sort & Layout Mode */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="SEARCH DROP..."
                className="bg-transparent border-b border-[#1A1A1A]/30 py-1 text-xs font-mono w-32 sm:w-44 focus:outline-none focus:border-[#1A1A1A]"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center text-xs font-mono text-neutral-700">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="bg-transparent font-mono text-xs cursor-pointer focus:outline-none uppercase"
              >
                <option value="newest">SORT: NEWEST ▾</option>
                <option value="price-asc">PRICE: LOW TO HIGH ▾</option>
                <option value="price-desc">PRICE: HIGH TO LOW ▾</option>
                <option value="name">ALPHABETICAL ▾</option>
              </select>
            </div>

            {/* Layout Toggle (Grid vs Spreadsheet) */}
            <div className="flex items-center border border-[#1A1A1A]/20 p-0.5 bg-white">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-[#1A1A1A] text-white' : 'text-neutral-500 hover:text-black'
                }`}
                title="Editorial Grid View"
              >
                <Grid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('spreadsheet')}
                className={`p-1.5 transition-colors cursor-pointer ${
                  viewMode === 'spreadsheet' ? 'bg-[#1A1A1A] text-white' : 'text-neutral-500 hover:text-black'
                }`}
                title="Spreadsheet Index View"
              >
                <Table className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            MODE 1: 2-COLUMN MINIMAL EDITORIAL GRID (PANEL 02 WIREFRAME)
            Product Image on clean neutral background, Title, Price, and '+'
            ───────────────────────────────────────────────────────────── */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {filteredProducts.map(product => {
              const isAdded = addedItemSku === product.sku;
              return (
                <div
                  key={product.id}
                  onClick={() => onOpenProduct(product)}
                  className="group flex flex-col justify-between cursor-pointer space-y-4"
                >
                  {/* Clean Product Visual Container */}
                  <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden border border-[#1A1A1A]/5 group-hover:border-[#1A1A1A]/20 transition-all flex items-center justify-center p-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 text-[10px] font-mono text-neutral-500 uppercase bg-white/70 px-1.5 py-0.5">
                      {product.sku}
                    </div>
                  </div>

                  {/* Clean Typography & Minimal '+' Action */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <h3 className="font-anton text-xl sm:text-2xl uppercase tracking-wide text-[#1A1A1A] group-hover:text-[#6D6E37] transition-colors leading-none">
                        {product.name}
                      </h3>
                      <span className="font-mono text-xs sm:text-sm text-neutral-600 tabular-nums mt-1 block">
                        R{product.price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={e => {
                        e.stopPropagation();
                        handleQuickAdd(product);
                      }}
                      className={`w-9 h-9 border border-[#1A1A1A] flex items-center justify-center transition-colors cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'bg-transparent hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A]'
                      }`}
                      title="Quick Add to Bag"
                    >
                      {isAdded ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ─────────────────────────────────────────────────────────────
              MODE 2: ARCHIVAL SPREADSHEET TABLE
              ───────────────────────────────────────────────────────────── */
          <div className="bg-white border border-[#1A1A1A]/15 overflow-x-auto shadow-sm">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b border-[#1A1A1A] bg-[#1A1A1A] text-white font-bebas text-base tracking-wider uppercase">
                  <th className="py-3 px-4">IMAGE</th>
                  <th className="py-3 px-4">PRODUCT / SKU</th>
                  <th className="py-3 px-4">CATEGORY</th>
                  <th className="py-3 px-4">COLOUR</th>
                  <th className="py-3 px-4">SIZES</th>
                  <th className="py-3 px-4 text-right">PRICE</th>
                  <th className="py-3 px-4 text-right">ADD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]/10">
                {filteredProducts.map(product => (
                  <tr
                    key={product.id}
                    onClick={() => onOpenProduct(product)}
                    className="hover:bg-[#E1E724]/10 transition-colors cursor-pointer"
                  >
                    <td className="py-2.5 px-4 w-16">
                      <div className="w-12 h-14 bg-neutral-100 overflow-hidden border border-black/10">
                        <img
                          src={product.image}
                          alt={product.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale"
                        />
                      </div>
                    </td>
                    <td className="py-2.5 px-4 font-anton text-base uppercase text-[#1A1A1A]">
                      {product.name}
                      <span className="block text-[10px] font-mono text-neutral-400 font-normal">
                        {product.sku}
                      </span>
                    </td>
                    <td className="py-2.5 px-4 font-bebas text-sm uppercase text-neutral-700">
                      {product.category}
                    </td>
                    <td className="py-2.5 px-4 text-neutral-600">{product.color}</td>
                    <td className="py-2.5 px-4 font-bebas tracking-wider">{product.sizes.join(' · ')}</td>
                    <td className="py-2.5 px-4 text-right font-bold tabular-nums">
                      R{product.price.toLocaleString()}
                    </td>
                    <td
                      className="py-2.5 px-4 text-right"
                      onClick={e => {
                        e.stopPropagation();
                        handleQuickAdd(product);
                      }}
                    >
                      <button className="px-3 py-1 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer font-bebas text-xs tracking-wider">
                        + BAG
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
