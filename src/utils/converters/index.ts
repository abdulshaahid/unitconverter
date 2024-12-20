import { convertStandard } from './standardConverter';
import { convertTemperature } from './temperatureConverter';
import { convertData } from './dataConverter';
import { convertCurrency } from './currencyConverter';
import { Unit } from '../../types/units';

export type ConverterFunction = (value: number, from: Unit, to: Unit) => Promise<number>;

export const getConverter = (category: string): ConverterFunction => {
  switch (category) {
    case 'temperature':
      return async (value, from, to) => convertTemperature(value, from.id, to.id);
    case 'data':
      return async (value, from, to) => convertData(value, from, to);
    case 'currency':
      return convertCurrency;
    default:
      return async (value, from, to) => convertStandard(value, from, to);
  }
};