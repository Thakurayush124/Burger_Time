import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { auth, googleProvider, createUserWithEmailAndPassword, signInWithPopup } from './Firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const SignupUnique = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [ error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Successfully registered!");
      navigate('/login');
    } catch (error) {
      console.error("Error registering user", error.message);
      if (error.code === 'auth/weak-password') {
        alert('Password should be at least 6 characters long.');
      } else {
        alert(`Error registering user: ${error.message}`);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      googleProvider.setCustomParameters({
        prompt: 'select_account'
      });
      await signInWithPopup(auth, googleProvider);
      alert("Successfully registered with Google!");
      navigate('/login');
    } catch (error) {
      console.error("Error signing in with Google", error.message);
      alert(`Error signing in with Google: ${error.message}`);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Create your new account</h1>
      <p className="signup-subtitle">Create an account to start looking for the food you like</p>
      
      <form onSubmit={handleSubmit}>

        <div className="signup-input-container">
          <label htmlFor="email" className="signup-label">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="signup-input"
          />
    
          <label htmlFor="username" className="signup-label">User Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="signup-input"
          />
        </div>
        
        <div className="signup-password-container">
          <label htmlFor="password" className="signup-label">Password</label>
          <div className="signup-password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="signup-input"
            />
            <div className="signup-eye">
              <button
                type="button"
                className="signup-toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </div>
        
        <div className="signup-checkbox-container">
          <label>
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              required
            />
            <span>
              I Agree with <a href="./policy.txt" className="signup-link">Terms of Service</a> and{' '}
              <a href="./policy.txt" className="signup-link">Privacy Policy</a>
            </span>
          </label>
        </div>
        
        <button type="submit" className="signup-submit-button">
          Register
        </button>
      </form>
      
      <div className="signup-alternative-signin">
        <p className='signup-or'>Or sign in with</p>
        <button onClick={handleGoogleSignIn} className="signup-google-signin">
          <FcGoogle className="signup-google-icon" />
        </button>
        {error && <p className="signup-error">{error.message}</p>}
      </div>
      
      <p className="signup-signin-link">
        Have an account? <a href="Login" className="signup-link">Sign In</a>
      </p>
    </div>
  );
};

export default SignupUnique;
