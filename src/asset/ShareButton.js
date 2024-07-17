// ShareButton.js
import React from 'react';
import './speed-slider.css';

const ShareButton = ({ speed }) => {
  const generateShareURL = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('speed', speed);
    return url.toString();
  };

  const handleShare = () => {
    const shareURL = generateShareURL();
    navigator.clipboard.writeText(shareURL).then(() => {
      alert('URL copied to clipboard!');
    });
  };

  return (
    <button className="share-button" onClick={handleShare}>
      Share
    </button>
  );
};

export default ShareButton;
