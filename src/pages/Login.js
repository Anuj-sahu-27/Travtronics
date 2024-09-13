// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy authentication
    if (username === 'admin' && password === 'admin') {
      setUser({ role: 'admin' });
      navigate('/admin');
    } else if (username === 'user' && password === 'user') {
      setUser({ role: 'user' });
      navigate('/dashboard');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
