import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const Header: React.FC = () => {
  return (
    <header style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '1rem',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        My Next.js App
      </div>
      <nav>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <li style={{ marginRight: '1rem' }}>
            <Link href="/home" style={{ color: '#fff', textDecoration: 'none' }}>
              Home 
            </Link>
          </li>
          <li>
            <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>
              About Page
            </Link>
          </li>
           <li>
            <Link href="/posts" className="text-white hover:text-gray-300 transition duration-150 ease-in-out">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/users" className="text-white hover:text-gray-300 transition duration-150 ease-in-out">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;