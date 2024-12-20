import { useState, useCallback } from 'react';
import { Category, Unit } from '../types/units';
import { getConverter } from '../utils/converters';

export function useConverter(initialCategory: Category) {
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const convert = useCallback(async (
    value: number,
    from: Unit,
    to: Unit,
    category: string
  ) => {
    try {
      setLoading(true);
      setError(null);
      const converter = getConverter(category);
      const convertedValue = await converter(value, from, to);
      setResult(convertedValue);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion failed');
      setResult(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    result,
    error,
    loading,
    convert
  };
}