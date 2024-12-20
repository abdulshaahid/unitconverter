import React from 'react';
import { ArrowRightLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { ConversionFormProps } from '../types/props';
import SelectField from './SelectField';

export default function ConversionForm({
  selectedCategory,
  fromUnit,
  toUnit,
  inputValue,
  onCategoryChange,
  onFromUnitChange,
  onToUnitChange,
  onSwapUnits,
  onInputChange,
  categories,
}: ConversionFormProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <SelectField
        label="Category"
        value={selectedCategory.id}
        onChange={(e) => onCategoryChange(e.target.value)}
        options={categories.map((category) => ({
          value: category.id,
          label: category.name
        }))}
      />

      <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center">
        <SelectField
          label="From"
          value={fromUnit.id}
          onChange={(e) => {
            const unit = selectedCategory.units.find(u => u.id === e.target.value);
            if (unit) onFromUnitChange(unit);
          }}
          options={selectedCategory.units.map((unit) => ({
            value: unit.id,
            label: `${unit.name} (${unit.symbol})`
          }))}
        />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, rotate: 180 }}
          transition={{ duration: 0.2 }}
          onClick={() => onSwapUnits()}
          className="p-3 mt-6 rounded-full bg-white/5 hover:bg-white/10
                   transition-colors duration-200 border border-white/10
                   group"
        >
          <ArrowRightLeft className="w-6 h-6 text-primary-400 group-hover:text-primary-300" />
        </motion.button>

        <SelectField
          label="To"
          value={toUnit.id}
          onChange={(e) => {
            const unit = selectedCategory.units.find(u => u.id === e.target.value);
            if (unit) onToUnitChange(unit);
          }}
          options={selectedCategory.units.map((unit) => ({
            value: unit.id,
            label: `${unit.name} (${unit.symbol})`
          }))}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200 mb-2">
          Value
        </label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          className="w-full p-3 border border-white/10 rounded-lg 
                   bg-white/5 text-white
                   focus:ring-2 focus:ring-primary-400/50 focus:border-primary-400/50
                   transition-all duration-200 ease-in-out
                   hover:border-primary-400/30"
          placeholder="Enter value"
        />
      </div>
    </motion.div>
  );
}