import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FileUser, MapPin, Linkedin, Github, Mail } from 'lucide-react';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content-section">
          <div className="greeting">
            <h1>hey, this is Abdelrahman. 👋</h1>
            <p className="subtitle"><MapPin size={20} /> Ontario, Canada</p>
            <p className="subtitle">19yo software developer and ml engineer.</p>
            <p className="subtitle second-subtitle">Exploring the tech world since 2010. </p>
            <div className="buttons-container">
              <button className="resume-button">
                Resume <FileUser size={20} />
              </button>
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
          </div>
        </div>
        <div className="image-placeholder">
          {/* Placeholder for image */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
