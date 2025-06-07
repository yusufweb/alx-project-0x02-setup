import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header'; 
import UserCard from '../components/common/UserCard'; 
import { UserProps } from '../interfaces'; 

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: UserProps[] = await response.json(); 
        setUsers(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); 

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">Our Users</h1>

        {loading && (
          <p className="text-center text-xl text-gray-600 mt-10">Loading users...</p>
        )}

        {error && (
          <p className="text-center text-xl text-red-600 mt-10">Error: {error}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default UsersPage;