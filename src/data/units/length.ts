import { Category } from '../../types/units';

export const lengthCategory: Category = {
  id: 'length',
  name: 'Length',
  units: [
    { id: 'meter', name: 'Meter', symbol: 'm', rate: 1 },
    { id: 'kilometer', name: 'Kilometer', symbol: 'km', rate: 0.001 },
    { id: 'centimeter', name: 'Centimeter', symbol: 'cm', rate: 100 },
    { id: 'millimeter', name: 'Millimeter', symbol: 'mm', rate: 1000 },
    { id: 'micrometer', name: 'Micrometer', symbol: 'μm', rate: 1000000 },
    { id: 'nanometer', name: 'Nanometer', symbol: 'nm', rate: 1000000000 },
    { id: 'inch', name: 'Inch', symbol: 'in', rate: 39.3701 },
    { id: 'foot', name: 'Foot', symbol: 'ft', rate: 3.28084 },
    { id: 'yard', name: 'Yard', symbol: 'yd', rate: 1.09361 },
    { id: 'mile', name: 'Mile', symbol: 'mi', rate: 0.000621371 },
    { id: 'nautical_mile', name: 'Nautical Mile', symbol: 'nmi', rate: 0.000539957 },
    { id: 'light_year', name: 'Light Year', symbol: 'ly', rate: 1.057e-16 },
    { id: 'astronomical_unit', name: 'Astronomical Unit', symbol: 'AU', rate: 6.68459e-12 },
    { id: 'parsec', name: 'Parsec', symbol: 'pc', rate: 3.24078e-17 }
  ]
};