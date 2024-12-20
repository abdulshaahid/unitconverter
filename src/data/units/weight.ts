import { Category } from '../../types/units';

export const weightCategory: Category = {
  id: 'weight',
  name: 'Weight',
  units: [
    { id: 'kilogram', name: 'Kilogram', symbol: 'kg', rate: 1 },
    { id: 'gram', name: 'Gram', symbol: 'g', rate: 1000 },
    { id: 'milligram', name: 'Milligram', symbol: 'mg', rate: 1000000 },
    { id: 'pound', name: 'Pound', symbol: 'lb', rate: 2.20462 },
    { id: 'ounce', name: 'Ounce', symbol: 'oz', rate: 35.274 },
    { id: 'ton', name: 'Ton', symbol: 't', rate: 0.001 }
  ]
};