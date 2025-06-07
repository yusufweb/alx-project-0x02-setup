import React, { useState } from 'react';
import Link from 'next/link';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';
import Header from '../components/layout/Header'; // Assuming Header component still exists

interface Post {
  id: number;
  title: string;
  content: string;
}

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddPost = (title: string, content: string) => {
    const newPost: Post = {
      id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
      title,
      content,
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> 

      <main className="p-5 max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Welcome to the Home Page!</h1>
        <p className="text-lg text-center text-gray-600 mb-8">This is where you can see newly added content.</p>

        <div className="text-center mb-10">
          <button
            onClick={handleOpenModal}
            className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Create New Post
          </button>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500 text-xl italic mt-10">No posts yet. Add one using the button above!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {posts.map((post) => (
              <Card key={post.id} title={post.title} content={post.content} />
            ))}
          </div>
        )}
      </main>

      <PostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default HomePage;