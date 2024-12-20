export type Category = {
  id: string;
  name: string;
  units: Unit[];
};

export type Unit = {
  id: string;
  name: string;
  symbol: string;
  rate: number; // Base conversion rate relative to the first unit in category
};

export type ConversionResult = {
  from: Unit;
  to: Unit;
  inputValue: number;
  result: number;
};