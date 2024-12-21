import { Category } from '../../types/units';

export const weightCategory: Category = {
  id: 'weight',
  name: 'Weight',
  units: [
    { id: 'kilogram', name: 'Kilogram', symbol: 'kg', rate: 1 },
    { id: 'gram', name: 'Gram', symbol: 'g', rate: 1000 },
    { id: 'milligram', name: 'Milligram', symbol: 'mg', rate: 1000000 },
    { id: 'microgram', name: 'Microgram', symbol: 'μg', rate: 1000000000 },
    { id: 'metric_ton', name: 'Metric Ton', symbol: 't', rate: 0.001 },
    { id: 'pound', name: 'Pound', symbol: 'lb', rate: 2.20462 },
    { id: 'ounce', name: 'Ounce', symbol: 'oz', rate: 35.274 },
    { id: 'stone', name: 'Stone', symbol: 'st', rate: 0.157473 },
    { id: 'us_ton', name: 'US Ton', symbol: 'ton', rate: 0.00110231 },
    { id: 'imperial_ton', name: 'Imperial Ton', symbol: 'long ton', rate: 0.000984207 },
    { id: 'carat', name: 'Carat', symbol: 'ct', rate: 5000 },
    { id: 'atomic_mass_unit', name: 'Atomic Mass Unit', symbol: 'u', rate: 6.022e+26 }
  ]
};