import { Category } from '../../types/units';

export const speedCategory: Category = {
  id: 'speed',
  name: 'Speed',
  units: [
    { id: 'mps', name: 'Meters per Second', symbol: 'm/s', rate: 1 },
    { id: 'kph', name: 'Kilometers per Hour', symbol: 'km/h', rate: 3.6 },
    { id: 'mph', name: 'Miles per Hour', symbol: 'mph', rate: 2.23694 },
    { id: 'knot', name: 'Knot', symbol: 'kn', rate: 1.94384 },
    { id: 'fps', name: 'Feet per Second', symbol: 'ft/s', rate: 3.28084 }
  ]
};