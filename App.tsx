
import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, CATEGORIES } from './constants';
import MenuCard from './components/MenuCard';
import CategoryNav from './components/CategoryNav';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    let items = MENU_ITEMS;
    
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return items.filter(item => 
        item.name.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q)
      );
    }
    
    return items.filter(item => item.category === activeCategory);
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen pb-12 bg-[#181818]">
      {/* Header with Logo */}
      <header className="relative pt-8 pb-4 px-6 text-center">
        <div className="max-w-[200px] md:max-w-xs mx-auto mb-4">
          <img 
            src="https://i.postimg.cc/Y04K8TXG/Diseno-sin-titulo.png" 
            alt="La Cantina de Madero" 
            className="w-full h-auto brightness-0 invert" 
            style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 10px rgba(93,122,104,0.3))' }}
          />
        </div>
        <p className="text-[#A0A0A0] text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold mb-6">Café • Bar • Minutas</p>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative mb-6 px-2">
          <input 
            type="text"
            placeholder="¿Qué tenés ganas de comer?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#242424] border border-[#333] rounded-full py-3 px-6 pl-12 text-[#EAEAEA] placeholder-[#666] focus:outline-none focus:border-[#D4AF37] transition-all shadow-lg text-sm"
          />
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-lg opacity-50">🔍</span>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-[#A0A0A0] hover:text-[#EAEAEA]"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex justify-center gap-4 text-[10px] font-bold opacity-70 px-4">
           <span className="flex items-center gap-1">📍 Madero</span>
           <span className="flex items-center gap-1 border-x border-[#333] px-3">📞 Int. 2341</span>
           <span className="flex items-center gap-1 text-[#5D7A68]">● ABIERTO</span>
        </div>
      </header>

      {/* Category Nav - Only visible if not searching */}
      {!searchQuery && (
        <CategoryNav 
          categories={CATEGORIES} 
          activeCategory={activeCategory} 
          onSelect={setActiveCategory} 
        />
      )}

      {/* Menu Grid */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {searchQuery && (
          <div className="mb-6 px-2">
            <h2 className="text-[#D4AF37] font-bold uppercase text-sm tracking-widest">
              Resultados para "{searchQuery}"
            </h2>
            <p className="text-[#666] text-xs mt-1">{filteredItems.length} platos encontrados</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
          {filteredItems.length === 0 && (
            <div className="col-span-full text-center py-20">
              <span className="text-4xl block mb-4">🍽️</span>
              <p className="text-[#A0A0A0] font-light italic">No encontramos nada con ese nombre...</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 text-[#D4AF37] text-xs font-bold uppercase underline tracking-tighter"
              >
                Volver al menú completo
              </button>
            </div>
          )}
        </div>

        {!searchQuery && activeCategory === 'PASTAS' && (
          <div className="mt-10 p-4 bg-[#242424] rounded-lg border border-[#5D7A68]/20 text-center mx-2">
            <h4 className="text-[#D4AF37] font-bold uppercase text-xs mb-2">Salsas Incluidas</h4>
            <p className="text-[#A0A0A0] text-[10px] md:text-xs">
              Fileto • Manteca • Crema • Rosé
            </p>
          </div>
        )}

        {!searchQuery && activeCategory === 'SANDWICHES' && (
          <div className="mt-8 text-center text-[#666] text-[10px] uppercase tracking-wider px-4">
            Adicionales: Jamón, queso, lechuga, tomate, cebolla o zanahoria +$2000
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 py-12 px-6 border-t border-[#242424] bg-[#1a1a1a] text-center">
        <div className="max-w-[120px] mx-auto mb-8 opacity-40">
           <img 
            src="https://i.postimg.cc/Y04K8TXG/Diseno-sin-titulo.png" 
            alt="Logo Footer" 
            className="w-full brightness-0 invert" 
          />
        </div>
        <p className="text-[#666] text-[10px] uppercase tracking-widest mb-6">
          La Cantina de Madero &copy; 2024
        </p>
        <div className="flex justify-center gap-8 text-[#A0A0A0] text-[10px] md:text-xs">
           <div className="flex flex-col items-center">
             <span className="font-bold text-[#EAEAEA] uppercase mb-1">Delivery</span>
             <span className="font-light">07:00 a 17:00</span>
           </div>
           <div className="flex flex-col items-center">
             <span className="font-bold text-[#EAEAEA] uppercase mb-1">Alameda</span>
             <span className="font-light">07:00 a 01:00</span>
           </div>
        </div>
        <div className="mt-8 text-[9px] text-[#444] uppercase tracking-widest">
          Experiencia • Calidad • Precio
        </div>
      </footer>
    </div>
  );
};

export default App;
