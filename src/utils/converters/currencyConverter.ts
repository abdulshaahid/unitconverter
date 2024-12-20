import { Unit } from '../../types/units';
import { getExchangeRates } from '../../services/currencyApi';

export const convertCurrency = async (value: number, from: Unit, to: Unit): Promise<number> => {
  const rates = await getExchangeRates();
  if (!rates) {
    throw new Error('Failed to fetch exchange rates. Please try again later.');
  }

  // Convert to USD first (base currency)
  const usdAmount = from.id === 'usd' ? value : value / rates[from.id.toUpperCase()];
  
  // Convert from USD to target currency
  const result = to.id === 'usd' ? usdAmount : usdAmount * rates[to.id.toUpperCase()];
  
  // Round to 6 decimal places to avoid floating point issues
  return Number(result.toFixed(6));
};