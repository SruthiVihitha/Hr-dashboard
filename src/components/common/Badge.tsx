import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'gray';
  className?: string;
};

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  color = 'gray', 
  className = '' 
}) => {
  const colorClasses = {
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
    gray: 'bg-gray-100 text-gray-800',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color]} ${className}`}>
      {children}
    </span>
  );
};