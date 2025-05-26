import React from 'react';
import ClientProviders from './ClientProviders';

// Export the provider component
const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ClientProviders>{children}</ClientProviders>;
};

export default Providers;