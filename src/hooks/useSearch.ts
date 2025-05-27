'use client';
import { useState, useMemo } from 'react';
import { Employee } from '@/lib/types';

export const useSearch = (employees: Employee[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState<string[]>([]);
  const [ratingFilter, setRatingFilter] = useState<number[]>([]);

  const filteredEmployees = useMemo(() => {
    return employees.filter(employee => {
      // Search term filter
      const matchesSearch = 
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Department filter
      const matchesDepartment = 
        departmentFilter.length === 0 || 
        departmentFilter.includes(employee.department);
      
      // Rating filter
      const matchesRating = 
        ratingFilter.length === 0 || 
        ratingFilter.includes(Math.floor(employee.rating));
      
      return matchesSearch && matchesDepartment && matchesRating;
    });
  }, [employees, searchTerm, departmentFilter, ratingFilter]);

  return {
    searchTerm,
    setSearchTerm,
    departmentFilter,
    setDepartmentFilter,
    ratingFilter,
    setRatingFilter,
    filteredEmployees,
  };
};