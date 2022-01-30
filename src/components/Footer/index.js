import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo-and-info">
        <div className="footer-logo">
          <h3>hubhopper</h3>
        </div>
        <div className="footer-info">
          <h5>COMPANY</h5>
          <a href="/">Blog</a>
          <a href="/">Contact Us</a>
          <a href="/">Hubhopper Press</a>
        </div>
        <div className="footer-info">
          <h5>PROPERTIES</h5>
          <a href="/">Hubhopper Studio</a>
          <a href="/">Hubhopper Editor</a>
        </div>
        <div className="footer-info">
          <h5>FOR PODCASTERS</h5>
          <a href="/">Creator Podcasters</a>
          <a href="/">FAQ</a>
          <a href="/">How to Create</a>
        </div>
      </div>
      <div className="footer-social-handle">
        <p>Follow us on: </p>
        <p>Site Map|Terms of Use |Privacy Policy| © Parijat Innovations Pvt Ltd 2019</p>
      </div>
      <div className="footer-click-to-start">
             <p>Create your podcast for free! <a href="/"> Click here to start </a></p>
      </div>
    </footer>
  );
}
