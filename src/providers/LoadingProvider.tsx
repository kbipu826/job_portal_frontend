import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import Spinner from '@/components/ui/Spinner';

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

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setInitialLoading] = useState(true);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Auto-hide initial loading after 2 seconds if it's still showing
  useEffect(() => {
    if (isInitialLoading) {
      const timer = setTimeout(() => {
        setInitialLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoading]);

  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      startLoading, 
      stopLoading,
      isInitialLoading,
      setInitialLoading
    }}>
      {children}
      {(isLoading || isInitialLoading) && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999999
          }}
        >
          <Spinner size="lg" color="white" />
        </div>
      )}
    </LoadingContext.Provider>
  );
}; 