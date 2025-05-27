import { create } from 'zustand';
import { Employee } from './types';

type Store = {
  employees: Employee[];
  bookmarks: number[];
  setEmployees: (employees: Employee[]) => void;
  addBookmark: (id: number) => void;
  removeBookmark: (id: number) => void;
  toggleBookmark: (id: number) => void;
  promoteEmployee: (id: number) => void;
  updateEmployee: (id: number, updates: Partial<Employee>) => void;
};

export const useStore = create<Store>((set) => ({
  employees: [],
  bookmarks: [],
  setEmployees: (employees) => set({ employees }),
  addBookmark: (id) => set((state) => ({ 
    bookmarks: [...state.bookmarks, id] 
  })),
  removeBookmark: (id) => set((state) => ({ 
    bookmarks: state.bookmarks.filter(b => b !== id) 
  })),
  toggleBookmark: (id) => set((state) => {
    if (state.bookmarks.includes(id)) {
      return { bookmarks: state.bookmarks.filter(b => b !== id) };
    } else {
      return { bookmarks: [...state.bookmarks, id] };
    }
  }),
  promoteEmployee: (id) => set((state) => ({
    employees: state.employees.map(emp => 
      emp.id === id ? { ...emp, rating: Math.min(5, emp.rating + 0.5) } : emp
    )
  })),
  updateEmployee: (id, updates) => set((state) => ({
    employees: state.employees.map(emp => 
      emp.id === id ? { ...emp, ...updates } : emp
    )
  })),
}));