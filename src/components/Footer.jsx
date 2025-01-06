import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/montygracey" aria-label="GitHub">
        <FaGithub size={24} /> {/* GitHub icon */}
      </a>
      <a href="https://linkedin.com" aria-label="LinkedIn">
        <FaLinkedin size={24} /> {/* LinkedIn icon */}
      </a>
      <a href="https://stackoverflow.com/users/29066725/slappy-slappy" aria-label="Stack Overflow">
        <FaStackOverflow size={24} /> {/* Stack Overflow icon */}
      </a>
    </footer>
  );
};

export default Footer;