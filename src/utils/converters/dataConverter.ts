import { Unit } from '../../types/units';

const BYTE_MULTIPLIER = 8;

export const convertData = (value: number, from: Unit, to: Unit): number => {
  // Convert to bytes first
  let bytes = value;
  if (from.id === 'bit') {
    bytes = value / BYTE_MULTIPLIER;
  } else {
    bytes = value / from.rate;
  }

  // Convert from bytes to target unit
  if (to.id === 'bit') {
    return bytes * BYTE_MULTIPLIER;
  }
  return bytes * to.rate;
};