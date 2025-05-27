// src/components/common/Rating.tsx
import { StarIcon } from '@heroicons/react/24/solid';

type RatingProps = {
  value: number;
  max?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg'; // Add size control
};

export const Rating: React.FC<RatingProps> = ({ 
  value, 
  max = 5, 
  className = '',
  size = 'md' // Default medium size
}) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(max)].map((_, i) => (
        <StarIcon
          key={i}
          className={`${sizes[size]} ${i < value ? 'text-yellow-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};