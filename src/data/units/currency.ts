import { Category } from '../../types/units';

export const currencyCategory: Category = {
  id: 'currency',
  name: 'Currency',
  units: [
    { id: 'usd', name: 'US Dollar', symbol: '$', rate: 1 },
    { id: 'eur', name: 'Euro', symbol: '€', rate: 0.92 },
    { id: 'gbp', name: 'British Pound', symbol: '£', rate: 0.79 },
    { id: 'jpy', name: 'Japanese Yen', symbol: '¥', rate: 150.14 },
    { id: 'aud', name: 'Australian Dollar', symbol: 'A$', rate: 1.52 },
    { id: 'cad', name: 'Canadian Dollar', symbol: 'C$', rate: 1.35 },
    { id: 'chf', name: 'Swiss Franc', symbol: 'CHF', rate: 0.88 },
    { id: 'cny', name: 'Chinese Yuan', symbol: '¥', rate: 7.19 }
  ]
};