import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-blue-600 text-sm mb-4">{email}</p>
      <div className="text-gray-700 text-sm">
        <p className="font-semibold mb-1">Address:</p>
        <p>{address.street}, {address.suite}</p>
        <p>{address.city}, {address.zipcode}</p>
      </div>
    
    </div>
  );
};

export default UserCard;