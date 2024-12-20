import { Unit } from '../../types/units';

export const convertStandard = (value: number, from: Unit, to: Unit): number => {
  // Convert to base unit first, then to target unit
  const baseValue = value / from.rate;
  return baseValue * to.rate;
};