import React from 'react';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Your App</h1>
          <p className="mt-4 text-gray-600">This is a blank page ready for your content.</p>
        </div>
      </div>
    </Layout>
  );
}

export default App;