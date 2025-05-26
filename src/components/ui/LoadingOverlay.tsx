'use client';

import React from 'react';
import Spinner from './Spinner';

interface LoadingOverlayProps {
  isLoading: boolean;
  isInitialLoading: boolean;
  loadingText: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ 
  isLoading, 
  isInitialLoading, 
  loadingText 
}) => {
  if (!isLoading && !isInitialLoading) return null;

  return (
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
        zIndex: 9999,
        width: '100vw',
        height: '100vh'
      }}
    >
      <Spinner 
        size="lg" 
        color="primary"
        text={isInitialLoading ? 'Initializing...' : loadingText}
      />
    </div>
  );
};

export default LoadingOverlay; 