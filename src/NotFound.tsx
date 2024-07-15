import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAFAFA]">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
      <p className="text-xl text-gray-600">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
