'use client'; // Add this line at the very top

import { useEffect } from 'react';
import { useStore } from '@/lib/store';
import { DEPARTMENTS } from '@/lib/constants';

export const useEmployees = () => {
  const { employees, setEmployees } = useStore();
  
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch('https://dummyjson.com/users?limit=20');
        const data = await res.json();
        
        const transformed = data.users.map((user: any) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          age: user.age,
          department: DEPARTMENTS[Math.floor(Math.random() * DEPARTMENTS.length)],
          rating: Math.floor(Math.random() * 5) + 1,
          phone: user.phone,
          address: `${user.address.address}, ${user.address.city}`,
          bio: `Employee since ${new Date().getFullYear() - Math.floor(Math.random() * 5)}`,
        }));
        
        setEmployees(transformed);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    
    if (employees.length === 0) fetchEmployees();
  }, []);
  
  return { employees, loading: employees.length === 0 };
};