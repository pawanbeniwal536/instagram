import React from "react";
import "./Offer.css";
import { Link } from 'react-router-dom';

const Offer = () => {
  return (
    <div className="offer-container">
      <div className="offer-box">
        <h2>🎉 Congrats! 🎉</h2>
        <p>You can earn <span className="highlight">500Rs</span> for shopping online.</p>
        <p>Login to your Instagram account</p>
        <p>In the code space, fill the code: <span className="code">INSTAFREE500</span></p>
        <Link to="/login" className="login-btn"> Login with Instagram </Link>
        
        <p className="referral-text">If you refer others, you will get extra benefits! 🎁</p>
      </div>
    </div>
  );
};

export default Offer;
