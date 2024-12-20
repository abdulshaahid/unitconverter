import { useState, useCallback } from 'react';
import { Category, Unit } from '../types/units';
import { categories } from '../data/units';

export function useCategoryState(initialCategory: Category = categories[0]) {
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [fromUnit, setFromUnit] = useState<Unit>(initialCategory.units[0]);
  const [toUnit, setToUnit] = useState<Unit>(initialCategory.units[1]);

  const handleCategoryChange = useCallback((categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    if (category) {
      setSelectedCategory(category);
      setFromUnit(category.units[0]);
      setToUnit(category.units[1]);
    }
  }, []);

  const handleSwapUnits = useCallback(() => {
    setFromUnit(currentTo => {
      setToUnit(currentFrom => fromUnit);
      return toUnit;
    });
  }, [fromUnit, toUnit]);

  return {
    selectedCategory,
    fromUnit,
    toUnit,
    handleCategoryChange,
    setFromUnit,
    setToUnit,
    handleSwapUnits
  };
}