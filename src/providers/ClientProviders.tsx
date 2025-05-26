'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import LoadingProvider from './LoadingProvider';
import ScriptProvider from './ScriptProvider';

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LoadingProvider>
          {children}
          <Toaster position="top-center" />
          <ScriptProvider />
        </LoadingProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default ClientProviders; 