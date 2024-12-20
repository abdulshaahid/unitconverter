import { Category } from '../../types/units';

export const energyCategory: Category = {
  id: 'energy',
  name: 'Energy',
  units: [
    { id: 'joule', name: 'Joule', symbol: 'J', rate: 1 },
    { id: 'calorie', name: 'Calorie', symbol: 'cal', rate: 0.239006 },
    { id: 'kilocalorie', name: 'Kilocalorie', symbol: 'kcal', rate: 0.000239006 },
    { id: 'watt_hour', name: 'Watt Hour', symbol: 'Wh', rate: 0.000277778 },
    { id: 'kilowatt_hour', name: 'Kilowatt Hour', symbol: 'kWh', rate: 2.777778e-7 },
    { id: 'electron_volt', name: 'Electron Volt', symbol: 'eV', rate: 6.242e+18 }
  ]
};