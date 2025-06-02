import { Linkedin, Github, Mail, CornerRightUp } from 'lucide-react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="footer-container">
      <div className="footer-text">
        <a className='stm'>© {new Date().getFullYear()}</a> <a className='footer-link' href="https://amoustafa.me">amoustafa.me</a> <a className='stm'>|</a><button className='back-to-top' onClick={scrollToTop}>back to top <CornerRightUp size={15 }/> </button>
      </div>
      <div className="buttons-container no-margin">
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
          <a href="mailto:amoustafa@torontomu.ca" target="_blank">
            <Mail size={20} />
          </a>
        </button>
      </div>
    </footer>
  );
}

export default Footer;