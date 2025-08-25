'use client';

import React from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Crypto Analytics</h1>
      <p className="text-lg mb-8">Get insights and analytics on your favorite cryptocurrencies.</p>
      <img 
        src="https://placehold.co/1920x1080?text=Clean+modern+crypto+analytics+landing+page" 
        alt="Highly detailed modern crypto analytics landing page showing crisp typography and responsive layout" 
        className="mb-8"
        onError={(e) => { e.currentTarget.src = 'https://placehold.co/1920x1080?text=Fallback+Image'; }}
      />
      <div className="flex space-x-4">
        <Link href="/signup" className="px-4 py-2 bg-blue-500 text-white rounded">
          Sign Up
        </Link>
        <Link href="/login" className="px-4 py-2 bg-green-500 text-white rounded">
          Login
        </Link>
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
