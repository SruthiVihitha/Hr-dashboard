'use client';

import { useStore } from '@/lib/store';
import { EmployeeCard } from '@/components/dashboard';
import Link from 'next/link';

export default function BookmarksPage() {
  const { employees, bookmarks, removeBookmark } = useStore();
  
  const bookmarkedEmployees = employees.filter(employee => 
    bookmarks.includes(employee.id)
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Bookmarked Employees</h1>
        <Link href="/">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Back to Dashboard
          </button>
        </Link>
      </div>
      
      {bookmarkedEmployees.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No bookmarked employees yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookmarkedEmployees.map(employee => (
            <div key={employee.id} className="relative">
              <EmployeeCard employee={employee} />
              <button
                onClick={() => removeBookmark(employee.id)}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}