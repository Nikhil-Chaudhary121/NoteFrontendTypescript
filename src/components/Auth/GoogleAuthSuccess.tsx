import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleAuthSuccess: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('token', token);
      navigate('/dashboard');
    } else {
      navigate('/login'); // fallback
    }
  }, [navigate]);

  return <div>Logging in...</div>;
};

export default GoogleAuthSuccess;
