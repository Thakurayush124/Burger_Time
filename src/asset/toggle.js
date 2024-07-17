import React, { useState } from 'react';
import Social from './socailMediacard.js'; // Import your Social component

const SocialButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSocial = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="social-button" onClick={toggleSocial}>
        <i className="fas fa-share-alt"></i> {/* Assuming you're using Font Awesome */}
      </button>
      <div className={`social-circle ${isOpen ? 'active' : ''}`}>
        {isOpen && <Social />}
      </div>
    </>
  );
};

export default SocialButton;