import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header'; // Assuming you have a Header component
import PostCard from '../components/common/PostCard'; // Import the new PostCard component
import { PostProps } from '../interfaces'; // Import the PostProps interface

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: any[] = await response.json();
        // Map API response to our PostProps interface (renaming 'body' to 'content')
        const formattedPosts: PostProps[] = data.map(item => ({
          id: item.id,
          userId: item.userId,
          title: item.title,
          content: item.body, // Mapping 'body' from API to 'content'
        }));
        setPosts(formattedPosts);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">All Posts</h1>

        {loading && (
          <p className="text-center text-xl text-gray-600 mt-10">Loading posts...</p>
        )}

        {error && (
          <p className="text-center text-xl text-red-600 mt-10">Error: {error}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} /> 
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default PostsPage;