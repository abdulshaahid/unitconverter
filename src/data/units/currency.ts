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
    { id: 'cny', name: 'Chinese Yuan', symbol: '¥', rate: 7.19 },
    { id: 'inr', name: 'Indian Rupee', symbol: '₹', rate: 83.12 },
    { id: 'nzd', name: 'New Zealand Dollar', symbol: 'NZ$', rate: 1.64 },
    { id: 'sgd', name: 'Singapore Dollar', symbol: 'S$', rate: 1.34 },
    { id: 'hkd', name: 'Hong Kong Dollar', symbol: 'HK$', rate: 7.82 },
    { id: 'krw', name: 'South Korean Won', symbol: '₩', rate: 1331.25 },
    { id: 'mxn', name: 'Mexican Peso', symbol: 'MX$', rate: 16.75 },
    { id: 'brl', name: 'Brazilian Real', symbol: 'R$', rate: 4.97 },
    { id: 'zar', name: 'South African Rand', symbol: 'R', rate: 18.89 },
    { id: 'aed', name: 'UAE Dirham', symbol: 'د.إ', rate: 3.67 },
    { id: 'thb', name: 'Thai Baht', symbol: '฿', rate: 35.62 },
    { id: 'sek', name: 'Swedish Krona', symbol: 'kr', rate: 10.37 },
    { id: 'nok', name: 'Norwegian Krone', symbol: 'kr', rate: 10.51 }
  ]
};