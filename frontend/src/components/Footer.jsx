import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; 

export default function Footer() {
  const startYear = 2024; 
  const currentYear = new Date().getFullYear();
  const displayYear =
    startYear === currentYear ? currentYear : `${startYear} - ${currentYear}`;

  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        
        <div className="mb-3">
          <a
            href="https://facebook.com"
            className="text-white mx-2 fs-4 footer-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-white mx-2 fs-4 footer-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            className="text-white mx-2 fs-4 footer-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-white mx-2 fs-4 footer-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://youtube.com"
            className="text-white mx-2 fs-4 footer-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>

       
        <p className="mb-0">
          &copy; {displayYear} <strong>Skillwave</strong>. All rights reserved.
        </p>
        <p className="small text-muted mb-0 text-white">
          Follow us for updates and new courses!
        </p>
      </div>

      <style>
        {`
          .footer-icon:hover {
            color: #0d6efd; /* Bootstrap primary color */
          }
        `}
      </style>
    </footer>
  );
}
