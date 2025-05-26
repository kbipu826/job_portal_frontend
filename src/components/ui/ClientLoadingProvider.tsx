'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname, useSearchParams } from 'next/navigation';
import LoadingOverlay from './LoadingOverlay';

interface LoadingContextType {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  isInitialLoading: boolean;
  setInitialLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

const ClientLoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setInitialLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Loading...');
  const { status } = useSession();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Handle initial loading state
  useEffect(() => {
    if (status !== 'loading') {
      setInitialLoading(false);
    }
  }, [status]);

  // Handle route change loading
  useEffect(() => {
    if (pathname) {
      setIsLoading(true);
      setLoadingText(`Loading ${pathname.split('/').pop() || 'page'}...`);
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [pathname, searchParams]);

  const startLoading = useCallback(() => setIsLoading(true), []);
  const stopLoading = useCallback(() => setIsLoading(false), []);

  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      startLoading, 
      stopLoading,
      isInitialLoading,
      setInitialLoading
    }}>
      {children}
      <LoadingOverlay 
        isLoading={isLoading}
        isInitialLoading={isInitialLoading}
        loadingText={loadingText}
      />
    </LoadingContext.Provider>
  );
};

export default ClientLoadingProvider; 