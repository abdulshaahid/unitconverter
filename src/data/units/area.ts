import { Category } from '../../types/units';

export const areaCategory: Category = {
  id: 'area',
  name: 'Area',
  units: [
    { id: 'square_meter', name: 'Square Meter', symbol: 'm²', rate: 1 },
    { id: 'square_kilometer', name: 'Square Kilometer', symbol: 'km²', rate: 0.000001 },
    { id: 'square_foot', name: 'Square Foot', symbol: 'ft²', rate: 10.7639 },
    { id: 'square_yard', name: 'Square Yard', symbol: 'yd²', rate: 1.19599 },
    { id: 'acre', name: 'Acre', symbol: 'ac', rate: 0.000247105 },
    { id: 'hectare', name: 'Hectare', symbol: 'ha', rate: 0.0001 }
  ]
};