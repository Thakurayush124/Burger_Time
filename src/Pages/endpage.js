import React, { useState } from 'react';
import { auth } from '../Firebase.js'; // Adjust the path as needed
import { signOut } from 'firebase/auth';
import { FaShareAlt } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import AnalogClock from '../asset/AnalogClock';
import RandomQuotes from '../asset/RandomQuotes';
import ShareButton from '../asset/ShareButton';
import SpeedSlider from '../asset/SpeedSlider';
import Social from '../asset/socailMediacard.js'; 
import './endpage.css';
export default function Endpage() {
  const [speed, setSpeed] = useState(1);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect to login page or home page after logout
      navigate('/login'); // Adjust the path as needed
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
 
   
  
    const toggleSocial = () => {
      setIsOpen(!isOpen);
    };


  return (
    <div className="endpage">
       <button onClick={handleLogout} className="logout-button11">Logout</button>
      <AnalogClock speed={speed} />
      <SpeedSlider speed={speed} setSpeed={setSpeed} />
      <RandomQuotes />
      <ShareButton speed={speed} />
     
      <button className="social-button" onClick={toggleSocial}>
      <FaShareAlt size={24} color="#FF8C00" /> {/* Add the share icon here */}
      </button>
      <div className={`social-circle ${isOpen ? 'active' : ''}`}>
        {isOpen && <Social />}
      </div>


  

    </div>
  );
}
