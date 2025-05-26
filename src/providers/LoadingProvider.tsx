import React from 'react';
import ClientLoadingProvider from '@/components/ui/ClientLoadingProvider';

export { useLoading } from '@/components/ui/ClientLoadingProvider';

const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ClientLoadingProvider>{children}</ClientLoadingProvider>;
};

export default LoadingProvider; 