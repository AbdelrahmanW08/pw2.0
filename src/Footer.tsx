import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-text">
        <a className='stm'>© {new Date().getFullYear()}</a> <a className='footer-link' href="https://amoustafa.me">amoustafa.me</a>
      </div>
      <div className="buttons-container">
        <button className="icon-button">
          <a href="https://www.linkedin.com/in/abdelrahman-wm/" target="_blank">
            <Linkedin size={20} />
          </a>
        </button>
        <button className="icon-button">
          <a href="https://github.com/AbdelrahmanW08" target="_blank">
            <Github size={20} />
          </a>
        </button>
        <button className="icon-button">
          <a href="amoustafa@torontomu.ca" target="_blank">
            <Mail size={20} />
          </a>
        </button>
      </div>
    </footer>
  );
}

export default Footer;