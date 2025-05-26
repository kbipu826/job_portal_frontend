import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ 
  size = 'md', 
  color = 'primary',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    white: 'text-white'
  };

  return (
    <div 
      className={`inline-block ${className}`}
      style={{
        width: size === 'sm' ? '16px' : size === 'md' ? '32px' : '48px',
        height: size === 'sm' ? '16px' : size === 'md' ? '32px' : '48px',
        border: '3px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '50%',
        borderTopColor: color === 'white' ? '#fff' : color === 'primary' ? '#3b82f6' : '#4b5563',
        animation: 'spin 1s linear infinite'
      }}
    >
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Spinner; 