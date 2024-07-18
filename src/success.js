import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase.js';
import './LoginSuccessful.css';

const LoginSuccessful = () => {
  const navigate = useNavigate();
  const handleGoToTracking = () => {
    navigate('/endpage'); // Navigate to the tracking screen
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/Login'); // Redirect to login page after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
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






