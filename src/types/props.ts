import { Category, Unit } from './units';

export type ConversionFormProps = {
  selectedCategory: Category;
  fromUnit: Unit;
  toUnit: Unit;
  inputValue: string;
  onCategoryChange: (categoryId: string) => void;
  onFromUnitChange: (unit: Unit) => void;
  onToUnitChange: (unit: Unit) => void;
  onSwapUnits: () => void;
  onInputChange: (value: string) => void;
  categories: Category[];
};