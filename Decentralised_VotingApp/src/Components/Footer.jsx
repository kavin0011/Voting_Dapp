import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section with Columns */}
        <div className="footer-top">
          {/* Logo/Brand Name and Description */}
          <div className="footer-brand">
            <h2>Blockchain Voting</h2>
            <p>Secure, transparent, and tamper-proof voting system powered by blockchain.</p>
          </div>
          
          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#voting">How Voting Works</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul className="footer-social">
              <li><a href="#">gam3On@gmail.com</a></li>
              {/* <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fab fa-github"></i></a></li> */}
            </ul>
          </div>

          {/* Motivational Quote */}
          <div className="footer-quote">
            <h4>Inspiration</h4>
            <p>"Empowering voters through the immutability and security of blockchain."</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Blockchain Voting System. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
