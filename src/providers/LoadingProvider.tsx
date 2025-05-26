import React, { createContext, useContext, useState, useCallback } from 'react';
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
      {(isLoading || isInitialLoading) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <Spinner size="lg" color="white" />
        </div>
      )}
    </LoadingContext.Provider>
  );
}; 