import React from 'react';
import './Footer.css'; // هنضيف فايل الـ CSS هنا

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="footer-copy">
              © 2024 Ammar . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
