
import React from 'react';
import { Category } from '../types';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onSelect: (id: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories, activeCategory, onSelect }) => {
  return (
    <nav className="sticky top-0 z-40 bg-[#181818]/95 backdrop-blur-sm border-b border-[#242424] py-3 px-4 shadow-xl">
      <div className="flex overflow-x-auto gap-6 no-scrollbar custom-scrollbar pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`whitespace-nowrap font-bold text-sm tracking-widest uppercase transition-all duration-300 relative pb-1
              ${activeCategory === cat.id ? 'text-[#D4AF37]' : 'text-[#A0A0A0] hover:text-[#EAEAEA]'}`}
          >
            {cat.name}
            {activeCategory === cat.id && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full"></span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;
