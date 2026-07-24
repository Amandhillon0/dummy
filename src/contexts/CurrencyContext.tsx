import React, { createContext, useContext, useState, ReactNode } from 'react';

type Currency = 'INR' | 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (priceInrStr: string | number) => string;
}

const exchangeRates: Record<Currency, number> = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011,
  GBP: 0.0095,
  CAD: 0.016,
  AUD: 0.018,
};

const currencySymbols: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
  EUR: '€',
  GBP: '£',
  CAD: 'C$',
  AUD: 'A$',
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('INR');

  const formatPrice = (priceInrInput: string | number): string => {
    let numericInr = 0;
    
    if (typeof priceInrInput === 'string') {
      numericInr = parseInt(priceInrInput.replace(/[^\d]/g, ''), 10);
    } else {
      numericInr = priceInrInput;
    }
    
    if (isNaN(numericInr)) return String(priceInrInput);

    const rate = exchangeRates[currency];
    const converted = numericInr * rate;

    if (currency === 'INR') {
      return `₹${numericInr.toLocaleString('en-IN')}`;
    }
    
    return `${currencySymbols[currency]}${converted.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
