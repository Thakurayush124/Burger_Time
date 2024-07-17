// RandomQuotes.js
import React, { useEffect, useState } from 'react';
import './speed-slider.css';


const RandomQuotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        setQuote(data.content);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
    const interval = setInterval(fetchQuote, 5000);
    return () => clearInterval(interval);
  }, []);

  return <div className="random-quote">"{quote}"</div>;
};

export default RandomQuotes;
