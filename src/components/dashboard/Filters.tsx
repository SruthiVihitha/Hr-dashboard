import React from 'react';
import { DEPARTMENTS, PERFORMANCE_LEVELS } from '@/lib/constants';

type FiltersProps = {
  departments: string[];
  setDepartments: (departments: string[]) => void;
  ratings: number[];
  setRatings: (ratings: number[]) => void;
};

export const Filters: React.FC<FiltersProps> = ({
  departments,
  setDepartments,
  ratings,
  setRatings,
}) => {
  const toggleDepartment = (dept: string) => {
    if (departments.includes(dept)) {
      setDepartments(departments.filter(d => d !== dept));
    } else {
      setDepartments([...departments, dept]);
    }
  };

  const toggleRating = (rating: number) => {
    if (ratings.includes(rating)) {
      setRatings(ratings.filter(r => r !== rating));
    } else {
      setRatings([...ratings, rating]);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="dropdown">
        <label className="block text-sm font-medium mb-1">Departments</label>
        <select
          multiple
          value={departments}
          onChange={(e) => {
            const selected = Array.from(e.target.selectedOptions, option => option.value);
            setDepartments(selected);
          }}
          className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
        >
          {DEPARTMENTS.map(dept => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>
      
      <div className="dropdown">
        <label className="block text-sm font-medium mb-1">Performance</label>
        <select
          multiple
          value={ratings.map(String)}
          onChange={(e) => {
            const selected = Array.from(e.target.selectedOptions, option => parseInt(option.value));
            setRatings(selected);
          }}
          className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
        >
          {PERFORMANCE_LEVELS.map(level => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};