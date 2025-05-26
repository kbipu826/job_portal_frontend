import React from 'react';
import ClientLoadingProvider from '@/components/ui/ClientLoadingProvider';

// Re-export the useLoading hook
export { useLoading } from '@/components/ui/ClientLoadingProvider';

// Export the provider component
const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  return <ClientLoadingProvider>{children}</ClientLoadingProvider>;
};

export default LoadingProvider; 