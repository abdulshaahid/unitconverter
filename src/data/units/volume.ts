import { Category } from '../../types/units';

export const volumeCategory: Category = {
  id: 'volume',
  name: 'Volume',
  units: [
    { id: 'liter', name: 'Liter', symbol: 'L', rate: 1 },
    { id: 'milliliter', name: 'Milliliter', symbol: 'mL', rate: 1000 },
    { id: 'cubic_meter', name: 'Cubic Meter', symbol: 'm³', rate: 0.001 },
    { id: 'gallon_us', name: 'Gallon (US)', symbol: 'gal', rate: 0.264172 },
    { id: 'gallon_uk', name: 'Gallon (UK)', symbol: 'gal', rate: 0.219969 },
    { id: 'quart', name: 'Quart', symbol: 'qt', rate: 1.05669 },
    { id: 'pint', name: 'Pint', symbol: 'pt', rate: 2.11338 },
    { id: 'fluid_ounce', name: 'Fluid Ounce', symbol: 'fl oz', rate: 33.814 }
  ]
};