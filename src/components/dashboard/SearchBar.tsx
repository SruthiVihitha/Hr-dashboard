import React from 'react';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({ 
  value, 
  onChange,
  className = '' 
}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder="Search employees..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
      />
      <div className="absolute right-3 top-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};