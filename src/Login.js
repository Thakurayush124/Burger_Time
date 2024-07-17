// LoginPage2.js
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { auth, googleProvider, signInWithEmailAndPassword, signInWithPopup } from './Firebase.js'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailPasswordSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Sign in with email/password successful");
    } catch (error) {
      console.error("Error signing in with email/password", error);
      if (error.code === 'auth/wrong-password') {
        alert('Incorrect password. Please try again.');
      } else if (error.code === 'auth/user-not-found') {
        alert('No user found with this email. Please sign up first.');
      } else {
        alert(`Error signing in: ${error.message}`);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      googleProvider.setCustomParameters({
        prompt: 'select_account'
      });
      await signInWithPopup(auth, googleProvider);
      console.log("Sign in with Google successful");
    } catch (error) {
      console.error("Error signing in with Google", error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (user){
    navigate('/success');
  }

  return (
    <div className="login2-container">
      <>
        <h1 className="login2-title">Login to your account.</h1>
        <p className="login2-para">Please sign in to your account</p>
        <form onSubmit={handleEmailPasswordSignIn}>
          <div className="login2-input-container">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login2-input-container">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="login2-toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEye/> : <FaEyeSlash/>} 
            </button>
          </div>
          <button type="submit" className="login2-sign-in-button">Sign In</button>
        </form>
        <div className="login2-separator">Or sign in with</div>
        <button onClick={handleGoogleSignIn} className="login2-google-signin">
          <FcGoogle className="login2-google-icon" />
        </button>
        {error && <p className="login2-error">{error.message}</p>}
        <p className="login2-signup-link">
          Have an account? <Link to="/signup" className="login2-link">Register</Link>
        </p>
      </>
    </div>
  );
};

export default LoginPage2;
