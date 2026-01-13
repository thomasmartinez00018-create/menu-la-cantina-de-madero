
import { MenuItem, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'CAFETERIA', name: 'Cafetería' },
  { id: 'PROMOS', name: 'Promociones' },
  { id: 'SALADS', name: 'Salad Bar' },
  { id: 'PASTAS', name: 'Pastas' },
  { id: 'SANDWICHES', name: 'Sándwiches' },
  { id: 'PIZZAS', name: 'Empanadas, Tartas & Pizzas' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Categoría: Cafetería
  { id: 'c1', name: 'Café o Té', description: 'Infusión simple caliente.', price: 2100, category: 'CAFETERIA', icon: '☕' },
  { id: 'c2', name: 'Café Americano', description: 'Café diluido en agua.', price: 2200, category: 'CAFETERIA', icon: '🥤' },
  { id: 'c3', name: 'Café, Té o Mate cocido con leche', description: 'Infusión combinada con leche.', price: 2400, category: 'CAFETERIA', icon: '🥛' },
  { id: 'c4', name: 'Capuchino', description: 'Café con leche espumada.', price: 5100, category: 'CAFETERIA', icon: '☕' },
  { id: 'c5', name: 'Submarino', description: 'Leche caliente con una barra de chocolate para disolver.', price: 3400, category: 'CAFETERIA', icon: '🍫' },
  { id: 'c6', name: 'Licuado', description: 'Batido de frutas de estación.', price: 3900, category: 'CAFETERIA', icon: '🥤' },
  { id: 'c7', name: 'Recargo de Leche', description: 'Porción extra de leche.', price: 3300, category: 'CAFETERIA', icon: '🥛' },
  { id: 'c8', name: 'Leche fría o Caliente', description: 'Vaso de leche sola.', price: 3400, category: 'CAFETERIA', icon: '🥛' },
  { id: 'c9', name: 'Leche Chocolatada', description: 'Leche mezclada con cacao.', price: 4400, category: 'CAFETERIA', icon: '🧋' },
  { id: 'c10', name: 'Exprimido de Naranja', description: 'Jugo natural de naranja.', price: 3100, category: 'CAFETERIA', icon: '🍊' },
  { id: 'c11', name: 'Café con leche con 2 medialunas', description: 'Combo clásico de infusión con dos unidades.', price: 3900, category: 'CAFETERIA', icon: '🥐' },
  { id: 'c12', name: 'Tostadas (Porción)', description: 'Porción de pan tostado.', price: 1900, category: 'CAFETERIA', icon: '🍞' },
  { id: 'c13', name: 'Mermelada, Manteca o Dulce de leche', description: 'Acompañamiento extra para tus tostadas.', price: 2200, category: 'CAFETERIA', icon: '🍯' },
  { id: 'c14', name: 'Medialuna c/u', description: 'Factura clásica individual.', price: 950, category: 'CAFETERIA', icon: '🥐' },
  { id: 'c15', name: 'Factura Especial c/u', description: 'Variedad con ingredientes extra.', price: 1100, category: 'CAFETERIA', icon: '🧁' },
  { id: 'c16', name: 'Docena de Medialunas', description: '12 unidades de nuestras clásicas medialunas.', price: 11200, category: 'CAFETERIA', icon: '🧺' },
  { id: 'c17', name: 'Docena de facturas especiales', description: '12 unidades de facturas variadas.', price: 13000, category: 'CAFETERIA', icon: '🧺' },
  { id: 'c18', name: 'Media Docena de Medialunas', description: '6 unidades de nuestras clásicas medialunas.', price: 5600, category: 'CAFETERIA', icon: '🥐' },
  { id: 'c19', name: 'Media Docena de facturas especiales', description: '6 unidades de facturas variadas.', price: 6500, category: 'CAFETERIA', icon: '🧁' },
  { id: 'c20', name: 'Medialuna con jamón y queso', description: 'Medialuna rellena salada.', price: 1800, category: 'CAFETERIA', icon: '🥐' },

  // Categoría: Promociones (Combos)
  { id: 'p1', name: 'Promo 1', description: '1 Café con leche + 1/2 Sándwich tostado de miga.', price: 6000, category: 'PROMOS', icon: '🥪' },
  { id: 'p2', name: 'Promo 2', description: '1 Café con leche + 2 medialunas con jamón y queso.', price: 6100, category: 'PROMOS', icon: '🥐' },
  { id: 'p3', name: 'Promo 3', description: '1 Café con leche + 1 Porción de tostadas + acompañamiento.', price: 7000, category: 'PROMOS', icon: '🍯' },
  { id: 'p4', name: 'Promo 4', description: '1 Café con leche + 1 Porción de pasta frola.', price: 6000, category: 'PROMOS', icon: '🥧' },
  { id: 'p5', name: 'Sándwich de Milanesa', description: 'Milanesa con jamón, queso, lechuga y tomate.', price: 11300, category: 'PROMOS', icon: '🍱' },
  { id: 'p6', name: 'Taco de carne y vegetales', description: 'Tacos acompañados con papas fritas.', price: 10400, category: 'PROMOS', icon: '🌮' },
  { id: 'p7', name: 'Hamburguesa', description: 'Hamburguesa con queso, lechuga, tomate y huevo.', price: 9900, category: 'PROMOS', icon: '🍔' },

  // Categoría: Salad Bar (Libre de Gluten)
  { id: 's1', name: 'Armalo a tu gusto', description: 'Base de 5 ingredientes a elección (Lechuga, tomate, arroz, cebolla, zanahoria, aceitunas, rúcula, choclo).', price: 7500, category: 'SALADS', isGlutenFree: true, icon: '🥗' },
  { id: 's2', name: 'Ensalada Primavera', description: 'Arroz, lechuga, tomate, zanahoria, atún y huevo duro.', price: 8700, category: 'SALADS', isGlutenFree: true, icon: '🥗' },
  { id: 's3', name: 'Ensalada Arcobaleno', description: 'Pollo, lechuga, tomate, huevo duro y aceitunas.', price: 8400, category: 'SALADS', isGlutenFree: true, icon: '🥗' },
  { id: 's4', name: 'Rúcula y Parmesano', description: 'Hojas de rúcula fresca con láminas de queso parmesano.', price: 6200, category: 'SALADS', isGlutenFree: true, icon: '🌿' },
  { id: 's5', name: 'Ensalada Caesar', description: 'Pollo, croutons, hojas verdes, queso parmesano y salsa caesar.', price: 8400, category: 'SALADS', icon: '🥗' },

  // Categoría: Pastas
  { id: 'pa1', name: 'Ravioles', description: 'Rellenos de verdura y pollo. Salsa a elección.', price: 5100, category: 'PASTAS', icon: '🍝' },
  { id: 'pa2', name: 'Spaguettis', description: 'Fideos tipo spaguetti. Salsa a elección.', price: 4000, category: 'PASTAS', icon: '🍝' },
  { id: 'pa3', name: 'Ñoquis de Papa', description: 'Pasta tradicional de papa. Salsa a elección.', price: 4200, category: 'PASTAS', icon: '🍝' },
  { id: 'pa4', name: 'Sorrentinos de Jamón y Queso', description: 'Pasta circular rellena. Salsa a elección.', price: 8400, category: 'PASTAS', icon: '🍝' },

  // Categoría: Sándwiches
  { id: 'sa1', name: 'Miga de jamón cocido y queso', description: 'Pan de miga tradicional frío.', price: 4100, category: 'SANDWICHES', icon: '🥪' },
  { id: 'sa2', name: 'Tostado de miga de jamón y queso', description: 'Pan de miga prensado caliente.', price: 4400, category: 'SANDWICHES', icon: '🥪' },
  { id: 'sa3', name: 'Árabe o figaza de jamón y queso', description: 'En pan árabe o tipo figaza frío.', price: 3400, category: 'SANDWICHES', icon: '🥯' },
  { id: 'sa4', name: 'Tostado Mixto árabe o figaza', description: 'Pan árabe o figaza prensado con jamón y queso.', price: 3900, category: 'SANDWICHES', icon: '🥯' },
  { id: 'sa5', name: 'Jamón crudo y queso', description: 'En pan árabe o figaza frío.', price: 4300, category: 'SANDWICHES', icon: '🥯' },
  { id: 'sa6', name: 'Salame y queso árabe o figaza', description: 'En pan árabe o figaza frío.', price: 3400, category: 'SANDWICHES', icon: '🥯' },
  { id: 'sa7', name: 'Tostado Salame y queso árabe o figaza', description: 'Pan árabe o figaza prensado.', price: 3900, category: 'SANDWICHES', icon: '🥯' },
  { id: 'sa8', name: 'Milanesa de Ternera', description: 'Sándwich simple de milanesa.', price: 6900, category: 'SANDWICHES', icon: '🥪' },
  { id: 'sa9', name: 'Suprema de pollo', description: 'Sándwich simple de milanesa de pollo.', price: 6900, category: 'SANDWICHES', icon: '🥪' },
  { id: 'sa10', name: 'Hamburguesa', description: 'Sándwich de carne de hamburguesa simple.', price: 4200, category: 'SANDWICHES', icon: '🍔' },

  // Categoría: Empanadas, Tartas y Pizzas
  { id: 'pi1', name: 'Empanadas convencionales', description: 'Masa rellena. Sabores: Carne, Pollo, Jamón y Queso, Verdura.', price: 1700, category: 'PIZZAS', icon: '🥟' },
  { id: 'pi2', name: 'Docena Empanadas Convencionales', description: '12 unidades de sabores clásicos.', price: 20400, category: 'PIZZAS', icon: '🧺' },
  { id: 'pi3', name: 'Empanadas especiales', description: 'Sabores: Humita, Queso y Cebolla, Caprese.', price: 2000, category: 'PIZZAS', icon: '🥟' },
  { id: 'pi4', name: 'Docena Empanadas Especiales', description: '12 unidades de sabores especiales surtidos.', price: 24000, category: 'PIZZAS', icon: '🧺' },
  { id: 'pi5', name: 'Tarta Porción de Jamón y Queso', description: 'Porción individual de tarta.', price: 4200, category: 'PIZZAS', icon: '🥧' },
  { id: 'pi6', name: 'Tarta Porción variada', description: 'Sabores: Zapallito, Berenjena, Calabaza y queso, Pollo jamón y verdura.', price: 5800, category: 'PIZZAS', icon: '🥧' },
  { id: 'pi7', name: 'Pizzeta de mozzarella', description: 'Base de masa con queso (individual).', price: 4500, category: 'PIZZAS', icon: '🍕' },
  { id: 'pi8', name: 'Pizzeta de mozzarella con jamón', description: 'Con agregado de jamón.', price: 6500, category: 'PIZZAS', icon: '🍕' },
  { id: 'pi9', name: 'Pizzeta napolitana', description: 'Con rodajas de tomate y ajo.', price: 6100, category: 'PIZZAS', icon: '🍕' },
  { id: 'pi10', name: 'Pizza grande de mozzarella', description: 'Tamaño familiar completo.', price: 8600, category: 'PIZZAS', icon: '🍕' },
  { id: 'pi11', name: 'Pizza grande de mozzarella c/jamón', description: 'Familiar con jamón.', price: 12500, category: 'PIZZAS', icon: '🍕' },
  { id: 'pi12', name: 'Pizza grande napolitana', description: 'Familiar con tomate y ajo.', price: 9200, category: 'PIZZAS', icon: '🍕' },
  { id: 'pi13', name: 'Pizza rúcula y jamón crudo', description: 'Pizza especial con ingredientes premium.', price: 14200, category: 'PIZZAS', icon: '🍕' },
];
