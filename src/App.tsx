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
            <p className="subtitle">19yo full-stack developer and ml engineer.</p>
            <p className="subtitle">Looking to use my skills to make lives easier with technology.</p>
            <p className="subtitle second-subtitle courier">i like learning new things.</p>
            <div className="buttons-container">
              <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="resume-button">
                  Resume <FileUser size={20} />
                </button>
              </a>
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
                <a href="mailto:amoustafa@torontomu.ca">
                  <Mail size={20} />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="image-placeholder">
          <img src="/cover-photo.jpg" alt="Cover Photo" className="cover-photo" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
