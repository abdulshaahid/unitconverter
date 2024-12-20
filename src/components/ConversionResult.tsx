import React from 'react';
import { motion } from 'framer-motion';
import { Unit } from '../types/units';
import CurrencyChart from './CurrencyChart';
import { useCurrencyHistory } from '../hooks/useCurrencyHistory';

type ConversionResultProps = {
  result: number;
  fromUnit: Unit;
  toUnit: Unit;
  inputValue: string;
};

export default function ConversionResult({
  result,
  fromUnit,
  toUnit,
  inputValue,
}: ConversionResultProps) {
  const showChart = fromUnit.id.length === 3 && toUnit.id.length === 3; // Currency codes are 3 letters
  const { data, loading } = useCurrencyHistory(fromUnit, toUnit);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-lg
                border border-white/10 shadow-lg backdrop-blur-sm"
    >
      <div className="text-sm text-gray-300">Result</div>
      <motion.div
        key={result}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-3xl font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 
                  bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient mt-2"
      >
        {result.toLocaleString(undefined, { maximumFractionDigits: 6 })} {toUnit.symbol}
      </motion.div>
      <div className="text-sm text-gray-400 mt-2">
        {inputValue} {fromUnit.symbol} = {result.toLocaleString(undefined, { maximumFractionDigits: 6 })} {toUnit.symbol}
      </div>

      {showChart && !loading && data.length > 0 && (
        <CurrencyChart
          fromUnit={fromUnit}
          toUnit={toUnit}
          data={data}
        />
      )}
    </motion.div>
  );
}