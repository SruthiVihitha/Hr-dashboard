'use client';

import { notFound } from 'next/navigation';
import { useStore } from '@/lib/store';
import { Tabs, Rating, Badge, Card } from '@/components/common';

interface Employee {
  id: number;
  name: string;
  email: string;
  phone?: string;
  age: number;
  address?: string;
  bio?: string;
  department: string;
  rating: number;
}

interface TabContentProps {
  employee: Employee;
}

const OverviewTab = ({ employee }: TabContentProps) => (
  <div className="space-y-4">
    <Card>
      <h3 className="font-bold mb-2">Personal Information</h3>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Age: {employee.age}</p>
    </Card>
    <Card>
      <h3 className="font-bold mb-2">Address</h3>
      <p>{employee.address}</p>
    </Card>
    <Card>
      <h3 className="font-bold mb-2">Bio</h3>
      <p>{employee.bio}</p>
    </Card>
  </div>
);

const ProjectsTab = ({ employee }: TabContentProps) => (
  <Card>
    <h3 className="font-bold mb-4">Current Projects</h3>
    <div className="space-y-3">
      {['Project A', 'Project B', 'Project C'].map((project) => (
        <div key={project} className="border-b pb-2">
          <h4 className="font-medium">{project}</h4>
          <p className="text-sm text-gray-600">Status: In Progress</p>
        </div>
      ))}
    </div>
  </Card>
);

const FeedbackTab = ({ employee }: TabContentProps) => (
  <Card>
    <h3 className="font-bold mb-4">Performance Feedback</h3>
    <div className="space-y-4">
      {[
        { date: '2023-01-15', rating: 4, comment: 'Excellent work on the Q4 project' },
        { date: '2022-07-20', rating: 3.5, comment: 'Good progress, needs more initiative' },
        { date: '2022-01-10', rating: 3, comment: 'Meeting expectations' },
      ].map((feedback) => (
        <div key={feedback.date} className="border-b pb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-500">{feedback.date}</span>
            <Rating value={feedback.rating} />
          </div>
          <p>{feedback.comment}</p>
        </div>
      ))}
    </div>
  </Card>
);

export default function EmployeePage({ params }: { params: { id: string } }) {
  const employee = useStore((state) => 
    state.employees.find((e) => e.id === Number(params.id))
  );
  
  if (!employee) return notFound();
  
  const tabs = [
    { label: 'Overview', content: <OverviewTab employee={employee} /> },
    { label: 'Projects', content: <ProjectsTab employee={employee} /> },
    { label: 'Feedback', content: <FeedbackTab employee={employee} /> },
  ];
  
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0"></div>
        <div>
          <h1 className="text-2xl font-bold">{employee.name}</h1>
          <p className="text-gray-600 mb-2">{employee.department} Department</p>
          <div className="flex items-center gap-2">
            <Rating value={employee.rating} />
            <Badge color={
              employee.rating > 4 ? 'green' : 
              employee.rating > 3 ? 'blue' : 
              employee.rating > 2 ? 'yellow' : 'red'
            }>
              {employee.rating > 4 ? 'Top Performer' : 
               employee.rating > 3 ? 'Strong' : 
               employee.rating > 2 ? 'Developing' : 'Needs Improvement'}
            </Badge>
          </div>
        </div>
      </div>
      
      <Tabs tabs={tabs} />
    </div>
  );
}