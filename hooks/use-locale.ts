import { useState, useEffect } from 'react';

export const useUserLocale = () => {
  const [locale, setLocale] = useState<string>('en-US');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userLocale = navigator.language || 'en-US';
      setLocale(userLocale);
    }
  }, []);

  return locale;
};

export const formatDateByLocale = (userLocale: string) => {
  return new Date().toLocaleDateString(userLocale, {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
  });
};
