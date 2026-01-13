
import React from 'react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="bg-[#242424] rounded-lg p-4 flex gap-4 border-l-4 border-transparent hover:border-[#5D7A68] transition-all duration-300 group shadow-lg active:scale-[0.98]">
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-bold text-[#EAEAEA] leading-tight group-hover:text-[#D4AF37] transition-colors">
            {item.name}
          </h3>
          {item.isGlutenFree && (
            <span className="bg-[#5D7A68]/20 text-[#5D7A68] text-[9px] px-1.5 py-0.5 rounded border border-[#5D7A68]/40 uppercase font-bold whitespace-nowrap ml-2">
              Sin TACC
            </span>
          )}
        </div>
        <div className="text-xl font-bold text-[#D4AF37] price-font mb-2">
          ${item.price.toLocaleString('es-AR')}
        </div>
        <p className="text-[#A0A0A0] text-sm line-clamp-2 italic font-light leading-snug">
          {item.description}
        </p>
      </div>
      
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#181818] rounded-xl flex-shrink-0 text-3xl md:text-4xl shadow-inner border border-[#333]">
        <span className="float-animation">
          {item.icon}
        </span>
      </div>
    </div>
  );
};

export default MenuCard;
