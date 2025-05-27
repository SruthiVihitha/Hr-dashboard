'use client';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useStore } from '@/lib/store';
import { DEPARTMENTS } from '@/lib/constants';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AnalyticsPage() {
  const { employees, bookmarks } = useStore();
  
  // Calculate department averages
  const departmentData = DEPARTMENTS.map(dept => {
    const deptEmployees = employees.filter(e => e.department === dept);
    const avg = deptEmployees.length > 0 
      ? deptEmployees.reduce((sum, e) => sum + e.rating, 0) / deptEmployees.length
      : 0;
    return { department: dept, average: avg, count: deptEmployees.length };
  });

  // Calculate bookmark trends (last 7 days - mock data)
  const bookmarkTrends = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return {
      date: date.toLocaleDateString(),
      count: Math.floor(Math.random() * 5) + bookmarks.length / 7,
    };
  }).reverse();

  const departmentChartData = {
    labels: departmentData.map(d => d.department),
    datasets: [{
      label: 'Average Rating',
      data: departmentData.map(d => d.average),
      backgroundColor: 'rgba(59, 130, 246, 0.7)',
    }]
  };

  const bookmarksChartData = {
    labels: bookmarkTrends.map(t => t.date),
    datasets: [{
      label: 'Bookmarks Added',
      data: bookmarkTrends.map(t => t.count),
      backgroundColor: 'rgba(16, 185, 129, 0.7)',
    }]
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Department Performance</h2>
          <Bar 
            data={departmentChartData} 
            options={{ 
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  max: 5,
                }
              }
            }} 
          />
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Bookmark Trends</h2>
          <Bar 
            data={bookmarksChartData} 
            options={{ responsive: true }} 
          />
        </div>
      </div>
    </div>
  );
}