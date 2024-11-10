// components/Footer.tsx

import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title"></p>
      <div className="footer__social">
        <Link
          href="https://www.facebook.com/"
          className="footer__icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-facebook"></i>
        </Link>
        <Link
          href="https://www.instagram.com/accounts/login/?hl=en"
          className="footer__icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-instagram"></i>
        </Link>
        <Link
          href="https://www.linkedin.com/in/yumna-nasir-4382132b5/"
          className="footer__icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </Link>
      </div>
      <p className="footer__copy">&#169; YumnaNasir. All rights reserved</p>
    </footer>
  );
};

export default Footer;
