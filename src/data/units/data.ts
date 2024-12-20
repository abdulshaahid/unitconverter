import { Category } from '../../types/units';

export const dataCategory: Category = {
  id: 'data',
  name: 'Data Storage',
  units: [
    { id: 'byte', name: 'Byte', symbol: 'B', rate: 1 },
    { id: 'kilobyte', name: 'Kilobyte', symbol: 'KB', rate: 0.001 },
    { id: 'megabyte', name: 'Megabyte', symbol: 'MB', rate: 0.000001 },
    { id: 'gigabyte', name: 'Gigabyte', symbol: 'GB', rate: 1e-9 },
    { id: 'terabyte', name: 'Terabyte', symbol: 'TB', rate: 1e-12 },
    { id: 'petabyte', name: 'Petabyte', symbol: 'PB', rate: 1e-15 },
    { id: 'bit', name: 'Bit', symbol: 'bit', rate: 8 }
  ]
};