import { Category } from '../../types/units';

export const timeCategory: Category = {
  id: 'time',
  name: 'Time',
  units: [
    { id: 'second', name: 'Second', symbol: 's', rate: 1 },
    { id: 'minute', name: 'Minute', symbol: 'min', rate: 1/60 },
    { id: 'hour', name: 'Hour', symbol: 'h', rate: 1/3600 },
    { id: 'day', name: 'Day', symbol: 'd', rate: 1/86400 },
    { id: 'week', name: 'Week', symbol: 'wk', rate: 1/604800 },
    { id: 'month', name: 'Month', symbol: 'mo', rate: 1/2592000 },
    { id: 'year', name: 'Year', symbol: 'yr', rate: 1/31536000 }
  ]
};