"use client";
import { EmployeeCard, SearchBar, Filters } from '@/components/dashboard';
import { useEmployees, useSearch } from '@/hooks';

export default function Dashboard() {
  const { employees, loading } = useEmployees();
  const {
    searchTerm,
    setSearchTerm,
    departmentFilter,
    setDepartmentFilter,
    ratingFilter,
    setRatingFilter,
    filteredEmployees,
  } = useSearch(employees);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Employee Dashboard</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar 
          value={searchTerm} 
          onChange={setSearchTerm} 
          className="flex-1"
        />
        <Filters
          departments={departmentFilter}
          setDepartments={setDepartmentFilter}
          ratings={ratingFilter}
          setRatings={setRatingFilter}
        />
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p>Loading employees...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEmployees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      )}
    </div>
  );
}