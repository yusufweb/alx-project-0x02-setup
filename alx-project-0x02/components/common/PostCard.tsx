import React from 'react';
import { PostProps } from '../../interfaces'; // Adjust path if needed

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{content}</p>
        <div className="text-right text-xs text-gray-500">
          User ID: <span className="font-semibold">{userId}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;