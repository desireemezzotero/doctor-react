import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (

    <section className="bg-gray-800 text-white p-6 w-full">
      <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-3 items-center mx-auto p-4 gap-4">

        <div className="flex space-x-10 justify-center">
          <Link className="hover:underline" onClick={scrollToTop}>Home</Link>
          <Link to="/advance" className="hover:underline">I Dottori</Link>
        </div>

        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-blue-400" size="2x" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-blue-600" size="2x" />
          </a>
          <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGoogle} className="text-white hover:text-red-600" size="2x" />
          </a>
        </div>

        <div className="flex justify-center">
          <p>&copy; {new Date().getFullYear()} Bdoctors. Tutti i diritti riservati.</p>
        </div>

      </div>
    </section>

  );
};

export default Footer;
