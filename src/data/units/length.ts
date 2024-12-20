import { Category } from '../../types/units';

export const lengthCategory: Category = {
  id: 'length',
  name: 'Length',
  units: [
    { id: 'meter', name: 'Meter', symbol: 'm', rate: 1 },
    { id: 'kilometer', name: 'Kilometer', symbol: 'km', rate: 0.001 },
    { id: 'centimeter', name: 'Centimeter', symbol: 'cm', rate: 100 },
    { id: 'millimeter', name: 'Millimeter', symbol: 'mm', rate: 1000 },
    { id: 'inch', name: 'Inch', symbol: 'in', rate: 39.3701 },
    { id: 'foot', name: 'Foot', symbol: 'ft', rate: 3.28084 },
    { id: 'yard', name: 'Yard', symbol: 'yd', rate: 1.09361 },
    { id: 'mile', name: 'Mile', symbol: 'mi', rate: 0.000621371 }
  ]
};