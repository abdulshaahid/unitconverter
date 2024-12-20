import { useState, useEffect } from 'react';
import axios from 'axios';
import { env } from '../config/environment';
import { Unit } from '../types/units';

type HistoricalData = {
  time: string;
  value: number;
}[];

export function useCurrencyHistory(fromUnit: Unit, toUnit: Unit) {
  const [data, setData] = useState<HistoricalData>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      if (fromUnit.id === toUnit.id) {
        setData(generateConstantData());
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // For demo purposes, we'll generate mock data
        // In production, you would fetch real data from an API
        setData(generateMockData());
      } catch (err) {
        setError('Failed to fetch historical data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [fromUnit.id, toUnit.id]);

  return { data, loading, error };
}

function generateMockData() {
  const data: HistoricalData = [];
  const now = new Date();
  let value = Math.random() * 2;

  for (let i = 30; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Add some random variation
    value = value + (Math.random() - 0.5) * 0.1;
    
    data.push({
      time: date.toISOString().split('T')[0],
      value: Number(value.toFixed(4))
    });
  }

  return data;
}

function generateConstantData() {
  const data: HistoricalData = [];
  const now = new Date();

  for (let i = 30; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    data.push({
      time: date.toISOString().split('T')[0],
      value: 1
    });
  }

  return data;
}