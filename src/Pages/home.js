import React from "react";
import "./home.css";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="unique-box">
      <div className="unique-overlay">
        <h2 className="unique-heading">We serve incomparable delicacies</h2>
        <p className="unique-paragraph">All the best restaurants with their top menu waiting for you, they can't wait for your order!!</p>
        <div className="unique-dots">
          <span className="unique-dot active"></span>
          <span className="unique-dot"></span>
          <span className="unique-dot"></span>
        </div>
        <div className="unique-buttons">
          <Link to="/Login">
            <button className="unique-btn">Skip</button>
          </Link>
          <Link to="/next1">
            <button className="unique-btn unique-btn-next">Next</button>
          </Link>
        </div>
      </div>
      <div className="unique-bottom-bar"></div>
    </div>
  );
}
