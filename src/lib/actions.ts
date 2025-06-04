'use server';

import { DEPARTMENTS } from '@/lib/constants';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone?: string;
  address?: {
    address: string;
    city: string;
  };
}

interface Employee {
  id: number;
  name: string;
  email: string;
  age: number;
  department: string;
  rating: number;
  phone?: string;
  address?: string;
  bio: string;
}

export async function getEmployees(): Promise<Employee[]> {
  try {
    const res = await fetch('https://dummyjson.com/users?limit=20');
    const data = await res.json();
    
    return data.users.map((user: User) => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      age: user.age,
      department: DEPARTMENTS[Math.floor(Math.random() * DEPARTMENTS.length)],
      rating: Math.floor(Math.random() * 5) + 1,
      phone: user.phone,
      address: user.address ? `${user.address.address}, ${user.address.city}` : undefined,
      bio: `Employee since ${new Date().getFullYear() - Math.floor(Math.random() * 5)}`,
    }));
  } catch (error) {
    console.error('Error fetching employees:', error);
    return [];
  }
}