import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 px-4">
        <h1 className="text-7xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-6">Oops! Page not found.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Go to Home
        </Link>
      </div>
    );
};

export default ErrorPage;