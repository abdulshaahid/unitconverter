import axios from 'axios';
import { env } from '../config/environment';

// Cache exchange rates for 1 hour
let cachedRates: Record<string, number> | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

export async function fetchExchangeRates(): Promise<Record<string, number> | null> {
  try {
    const response = await axios.get(env.exchangeRateApiUrl, {
      params: {
        access_key: env.exchangeRateApiKey
      }
    });
    return response.data.rates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    return null;
  }
}

export async function getExchangeRates(): Promise<Record<string, number> | null> {
  const now = Date.now();
  if (!cachedRates || now - lastFetchTime > CACHE_DURATION) {
    cachedRates = await fetchExchangeRates();
    lastFetchTime = now;
  }
  return cachedRates;
}