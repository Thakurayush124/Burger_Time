import React from 'react';
import './LoginSuccessful.css';
import { useNavigate } from 'react-router-dom';

const LoginSuccessful = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
    navigate('/Login'); 
  };

  const handleGoToTracking = () => {
    navigate('/endpage'); // Navigate to the tracking screen
  };

  return (
    <div className="login-successful">
      <div className="pack">
        <div className="success-icon">
          <div className="checkmark-circle">
            <div className="checkmark"></div>
          </div>
        </div>
        <h2>Login Successful</h2>
        <button className="tracking-button" onClick={handleGoToTracking}>
          Go to Tracking Screen
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default LoginSuccessful;