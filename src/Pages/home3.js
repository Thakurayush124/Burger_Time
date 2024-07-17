import React from "react";
import { Link } from "react-router-dom";
import Progress from "../asset/progress";
import "./home3.css";

export default function Home3() {
  return (
    <div className="container3">
      <div className="cover3">
        <h2 className="heading3">We serve incomparable delicacies</h2>
        <p className="text3">All the best restaurants with their top menu waiting for you, they can't wait for your order!!</p>
        {/* <div className="indicator3">
        <span className="circle3"></span>
          <span className="circle3"></span>
          <span className="circle3 activeCircle3"></span>
        </div> */}
        <div className="unique-dots">
          <span className="unique-dot "></span>
          <span className="unique-dot"></span>
          <span className="unique-dot active"></span>
        </div>
        <div className="buttonWrapper3">
        <Link to="/Login">
          <Progress />
        </Link>
        </div>
      </div>
      <div className="footerBar3"></div>
    </div>
  );
}
