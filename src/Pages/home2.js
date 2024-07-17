import React from "react";
import { Link } from 'react-router-dom';
import "./h2.css";

export default function Home2() {
  return (
    <div className="box3">
      <div className="overlay3">
        <h2 className="heading3">We serve incomparable delicacies</h2>
        <p className="paragraph3">All the best restaurants with their top menu waiting for you, they can't wait for your order!!</p>
        {/* <div className="dots3">
          <span className="dot3"></span>
          <span className="dot3 active3"></span>
          <span className="dot3"></span>
        </div> */}
        <div className="unique-dots">
          <span className="unique-dot "></span>
          <span className="unique-dot active"></span>
          <span className="unique-dot"></span>
        </div>
        <div className="buttons3">
          <Link to="/Login">
            <button className="btn3">Skip</button>
          </Link>
          <Link to="/next2">
            <button className="btn3 btn-next3">Next</button>
          </Link>
        </div>
      </div>
      <div className="bottom-bar3"></div>
    </div>
  );
}
