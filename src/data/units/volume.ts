import { Category } from '../../types/units';

export const volumeCategory: Category = {
  id: 'volume',
  name: 'Volume',
  units: [
    { id: 'liter', name: 'Liter', symbol: 'L', rate: 1 },
    { id: 'milliliter', name: 'Milliliter', symbol: 'mL', rate: 1000 },
    { id: 'cubic_meter', name: 'Cubic Meter', symbol: 'm³', rate: 0.001 },
    { id: 'cubic_centimeter', name: 'Cubic Centimeter', symbol: 'cm³', rate: 1000 },
    { id: 'cubic_millimeter', name: 'Cubic Millimeter', symbol: 'mm³', rate: 1000000 },
    { id: 'gallon_us', name: 'Gallon (US)', symbol: 'gal', rate: 0.264172 },
    { id: 'gallon_uk', name: 'Gallon (UK)', symbol: 'gal', rate: 0.219969 },
    { id: 'quart_us', name: 'Quart (US)', symbol: 'qt', rate: 1.05669 },
    { id: 'quart_uk', name: 'Quart (UK)', symbol: 'qt', rate: 0.879877 },
    { id: 'pint_us', name: 'Pint (US)', symbol: 'pt', rate: 2.11338 },
    { id: 'pint_uk', name: 'Pint (UK)', symbol: 'pt', rate: 1.75975 },
    { id: 'cup_us', name: 'Cup (US)', symbol: 'cup', rate: 4.22675 },
    { id: 'cup_uk', name: 'Cup (UK)', symbol: 'cup', rate: 3.51951 },
    { id: 'fluid_ounce_us', name: 'Fluid Ounce (US)', symbol: 'fl oz', rate: 33.814 },
    { id: 'fluid_ounce_uk', name: 'Fluid Ounce (UK)', symbol: 'fl oz', rate: 35.1951 },
    { id: 'tablespoon_us', name: 'Tablespoon (US)', symbol: 'tbsp', rate: 67.628 },
    { id: 'tablespoon_uk', name: 'Tablespoon (UK)', symbol: 'tbsp', rate: 70.3902 },
    { id: 'teaspoon_us', name: 'Teaspoon (US)', symbol: 'tsp', rate: 202.884 },
    { id: 'teaspoon_uk', name: 'Teaspoon (UK)', symbol: 'tsp', rate: 211.171 }
  ]
};