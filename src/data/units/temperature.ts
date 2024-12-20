import { Category } from '../../types/units';

export const temperatureCategory: Category = {
  id: 'temperature',
  name: 'Temperature',
  units: [
    { id: 'celsius', name: 'Celsius', symbol: '°C', rate: 1 },
    { id: 'fahrenheit', name: 'Fahrenheit', symbol: '°F', rate: 1 },
    { id: 'kelvin', name: 'Kelvin', symbol: 'K', rate: 1 }
  ]
};