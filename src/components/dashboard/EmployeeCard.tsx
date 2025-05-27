import { useStore } from '@/lib/store';
import { Button, Rating, Badge } from '@/components/common'
import Link from 'next/link';

type EmployeeCardProps = {
  employee: {
    id: number;
    name: string;
    email: string;
    department: string;
    rating: number;
  };
};

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const { bookmarks, toggleBookmark, promoteEmployee } = useStore();
  const isBookmarked = bookmarks.includes(employee.id);

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg">{employee.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{employee.email}</p>
      <p className="mt-1">Department: {employee.department}</p>
      <div className="flex items-center gap-2 mt-2">
        <Rating value={employee.rating} />
        <Badge color={
          employee.rating > 4 ? 'green' : 
          employee.rating > 3 ? 'blue' : 
          employee.rating > 2 ? 'yellow' : 'red'
        }>
          {employee.rating.toFixed(1)}
        </Badge>
      </div>
      <div className="flex gap-2 mt-4">
        <Link href={`/employee/${employee.id}`}>
          <Button variant="primary" className="text-sm">
            View
          </Button>
        </Link>
        <Button 
          onClick={() => toggleBookmark(employee.id)}
          variant="secondary" 
          className="text-sm"
        >
          {isBookmarked ? 'Unbookmark' : 'Bookmark'}
        </Button>
        <Button 
          onClick={() => promoteEmployee(employee.id)}
          variant="secondary" 
          className="text-sm"
        >
          Promote
        </Button>
      </div>
    </div>
  );
};