import { Unit } from '../types/units';
import { convertTemperature } from './converters/temperatureConverter';
import { convertStandard } from './converters/standardConverter';

export const convert = (value: number, from: Unit, to: Unit, category: string): number => {
  if (category === 'temperature') {
    return convertTemperature(value, from.id, to.id);
  }
  
  return convertStandard(value, from, to);
};