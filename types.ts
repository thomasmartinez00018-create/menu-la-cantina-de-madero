
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  icon: string; // Changed from image?: string
  isGlutenFree?: boolean;
}

export interface Category {
  id: string;
  name: string;
}

export enum MenuCategory {
  CAFETERIA = 'CAFETERIA',
  PROMOS = 'PROMOS',
  SALADS = 'SALADS',
  PASTAS = 'PASTAS',
  SANDWICHES = 'SANDWICHES',
  PIZZAS = 'PIZZAS'
}
