'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import LoadingProvider from './LoadingProvider';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LoadingProvider>
          {children}
          <Toaster position="top-center" />
        </LoadingProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;