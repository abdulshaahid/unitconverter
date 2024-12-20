interface Environment {
  exchangeRateApiKey: string;
  exchangeRateApiUrl: string;
}

export const env: Environment = {
  exchangeRateApiKey: import.meta.env.VITE_EXCHANGE_RATE_API_KEY || 'demo',
  exchangeRateApiUrl: import.meta.env.VITE_EXCHANGE_RATE_API_URL || 'https://api.exchangerate-api.com/v4/latest/USD'
};