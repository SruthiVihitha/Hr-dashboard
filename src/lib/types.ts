export type Employee = {
  id: number;
  name: string;
  email: string;
  age: number;
  department: string;
  rating: number;
  phone?: string;
  address?: string;
  bio?: string;
};

export type TabType = {
  label: string;
  content: React.ReactNode;
};