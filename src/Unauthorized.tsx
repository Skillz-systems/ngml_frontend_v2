import React from 'react';

const Unauthorized: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">401 - Unauthorized</h1>
      <p className="text-xl text-gray-600">You do not have permission to view this page.</p>
    </div>
  );
};

export default Unauthorized;
