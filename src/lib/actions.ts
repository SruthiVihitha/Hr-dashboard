// src/lib/actions.ts
'use server';

import { DEPARTMENTS } from '@/lib/constants';

export async function getEmployees() {
  try {
    const res = await fetch('https://dummyjson.com/users?limit=20');
    const data = await res.json();
    
    return data.users.map((user: any) => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      age: user.age,
      department: DEPARTMENTS[Math.floor(Math.random() * DEPARTMENTS.length)],
      rating: Math.floor(Math.random() * 5) + 1,
      phone: user.phone,
      address: `${user.address?.address}, ${user.address?.city}`,
      bio: `Employee since ${new Date().getFullYear() - Math.floor(Math.random() * 5)}`,
    }));
  } catch (error) {
    console.error('Error fetching employees:', error);
    return [];
  }
}