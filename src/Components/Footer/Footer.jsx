import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p className="company-name">WANDERWISH</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        {/* icon start hua */}
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>

        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
        {/* icon khatm hua */}
      </div>

      <div className="footer-copyright">
        <hr />
        <p>© 2024 Rajan Pandey. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
