import { Category } from '../../types/units';

export const dataCategory: Category = {
  id: 'data',
  name: 'Data Storage',
  units: [
    { id: 'bit', name: 'Bit', symbol: 'bit', rate: 8 },
    { id: 'byte', name: 'Byte', symbol: 'B', rate: 1 },
    { id: 'kilobyte', name: 'Kilobyte', symbol: 'KB', rate: 0.001 },
    { id: 'megabyte', name: 'Megabyte', symbol: 'MB', rate: 1e-6 },
    { id: 'gigabyte', name: 'Gigabyte', symbol: 'GB', rate: 1e-9 },
    { id: 'terabyte', name: 'Terabyte', symbol: 'TB', rate: 1e-12 },
    { id: 'petabyte', name: 'Petabyte', symbol: 'PB', rate: 1e-15 },
    { id: 'exabyte', name: 'Exabyte', symbol: 'EB', rate: 1e-18 },
    { id: 'zettabyte', name: 'Zettabyte', symbol: 'ZB', rate: 1e-21 },
    { id: 'yottabyte', name: 'Yottabyte', symbol: 'YB', rate: 1e-24 },
    { id: 'kibibyte', name: 'Kibibyte', symbol: 'KiB', rate: 0.000976563 },
    { id: 'mebibyte', name: 'Mebibyte', symbol: 'MiB', rate: 9.5367e-7 },
    { id: 'gibibyte', name: 'Gibibyte', symbol: 'GiB', rate: 9.3132e-10 },
    { id: 'tebibyte', name: 'Tebibyte', symbol: 'TiB', rate: 9.0949e-13 }
  ]
};