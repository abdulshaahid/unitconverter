import React from 'react';
import { motion } from 'framer-motion';
import ConversionForm from './ConversionForm';
import ConversionResult from './ConversionResult';
import { useConverter } from '../../hooks/useConverter';
import { useCategoryState } from '../../hooks/useCategoryState';
import { categories } from '../../data/units';

export default function Converter() {
  const {
    selectedCategory,
    fromUnit,
    toUnit,
    handleCategoryChange,
    setFromUnit,
    setToUnit,
    handleSwapUnits
  } = useCategoryState(categories[0]);

  const { result, error, loading, convert } = useConverter(selectedCategory);
  const [inputValue, setInputValue] = React.useState<string>('1');

  React.useEffect(() => {
    const value = parseFloat(inputValue);
    if (!isNaN(value)) {
      convert(value, fromUnit, toUnit, selectedCategory.id);
    }
  }, [inputValue, fromUnit, toUnit, selectedCategory, convert]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto p-8 bg-white/10 backdrop-blur-lg rounded-xl 
                 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20"
    >
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 
                   bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
      >
        Unit Converter
      </motion.h2>
      
      <ConversionForm
        selectedCategory={selectedCategory}
        fromUnit={fromUnit}
        toUnit={toUnit}
        inputValue={inputValue}
        onCategoryChange={handleCategoryChange}
        onFromUnitChange={setFromUnit}
        onToUnitChange={setToUnit}
        onSwapUnits={handleSwapUnits}
        onInputChange={setInputValue}
        categories={categories}
      />

      {error ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
        >
          {error}
        </motion.div>
      ) : loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 flex justify-center"
        >
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-400" />
        </motion.div>
      ) : result !== null && (
        <div className="mt-8">
          <ConversionResult
            result={result}
            fromUnit={fromUnit}
            toUnit={toUnit}
            inputValue={inputValue}
          />
        </div>
      )}
    </motion.div>
  );
}