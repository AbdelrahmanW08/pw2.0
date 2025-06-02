import { useState } from 'react';
import Footer from './Footer';
import ProjectCard from './ProjectCard';
import { FileUser, MapPin, Linkedin, Github, Mail } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('experience'); // 'experience' or 'education'

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
      <div className='margin'>

        <div className="container">
          <div className="content-section">
            <div className="greeting">
              <h1>hey, this is Abdelrahman. 👋</h1>
              <p className="subtitle"><MapPin size={20} /> Ontario, Canada</p>
              <p className="subtitle">19yo full-stack developer and ml engineer.</p>
              <p className="subtitle">Looking to use my skills to make lives easier with technology.</p>
              <p className="subtitle second-subtitle courier">i like learning new things.</p>
              <div className="buttons-container">
                <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
                  Resume <FileUser size={20} />
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
        <div className="tablist-container">
          <div className="tablist">
            <button
              className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => handleTabClick('experience')}
            >
              Experience
            </button>
            <button
              className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => handleTabClick('education')}
            >
              Education
            </button>
          </div>
        </div>

        <div className="tab-content-container">
          {activeTab === 'experience' && (
            <div className="tab-content">
              <div className='timeline'>

                <div className='timeline-entry'>
                  <img src="./masjidalfarooq.jpg" className='timeline-image' />
                  <div className='timeline-entry-content'>
                    <p className='timeline-info'>Mar 2022 - May 2022</p>
                    <h2 className='timeline-title'>Masjid Al-Farooq</h2>
                    <p className='timeline-info'>General Assistant</p>
                  </div>
                  <ul className='timeline-list'>
                    <li className='timeline-list-item'>
                      Assisted in event organization, prayer services, and charitable initiatives during Ramadan.
                    </li>
                    <li className='timeline-list-item'>
                      Led a team of 10+ volunteers in fundraising, raising $500 for mosque construction projects.
                    </li>
                  </ul>
                </div>

                <div className='timeline-entry'>
                  <img src="./isnacanada.jpg" className='timeline-image' />
                  <div className='timeline-entry-content'>
                    <p className='timeline-info'>Sep 2019 - Apr 2020</p>
                    <h2 className='timeline-title'>ISNA Canada</h2>
                    <p className='timeline-info'>Event Coordinator</p>
                  </div>
                  <ul className='timeline-list'>
                    <li className='timeline-list-item'>
                      Organized events and managed food distribution, attracting 200+ attendees per event.
                    </li>
                    <li className='timeline-list-item'>
                      Engaged with 100+ customers, providing excellent service at a charity event to raise funds against poverty in GTA.
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          )}
          {activeTab === 'education' && (
            <div className="tab-content">
              <div className='timeline'>
                <div className='timeline-entry'>
                  <img src="./tmu.jpg" className='timeline-image' />
                  <div className='timeline-entry-content'>
                    <p className='timeline-info'>Sep 2023 - Present</p>
                    <h2 className='timeline-title'>Toronto Metropolitan University</h2>
                    <p className='timeline-info'>Computer Science - BSc (Hons)</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="projects-header">
          <h1>my projects</h1>
        </div>

        <div className="project-cards-grid">
          <ProjectCard
            imageSrc="/netflix-clone.jpg"
            title="Netflix Clone"
            description="A clone of the Netflix website for full-stack development practice."
            technologies={["JavaScript", "MongoDB", "Express", "React", "Node.js", "TailwindCSS"]}
            // websiteLink="https://google.com"
            sourceLink="https://github.com/AbdelrahmanW08/netflix-clone"
          />

          <ProjectCard
            imageSrc="/termhint.jpeg"
            title="termhint"
            description="Full-stack AI-powered synonym recommender for newcomers."
            technologies={["HTML", "CSS", "Python", "TensorFlow"]}
            // websiteLink="https://google.com"
            sourceLink="https://github.com/AbdelrahmanW08/termhint"
          />

          <ProjectCard
            imageSrc="/tensorflow.jpg"
            title="TensorFlow Models"
            description="Models I have built throughout my learning journey. Include image classification and NLP."
            technologies={["Python", "TensorFlow", "Pandas", "scikit-learn"]}
            // websiteLink="https://google.com"
            sourceLink="https://github.com/AbdelrahmanW08/termhint"
          />
        </div>

        <div className="projects-header">
          <h1>my tech stack</h1>
        </div>

        <div className="tech-stack-grid">
          <div className="tech-stack-item">
            <i className="devicon-html5-plain monotone"></i>
            <span>HTML</span>
          </div>
          <div className="tech-stack-item">
            <i className="devicon-css3-plain monotone"></i>
            <span>CSS</span>
          </div>
          <div className="tech-stack-item">
            <i className="devicon-javascript-plain monotone"></i>
            <span>JavaScript</span>
          </div>
          <div className="tech-stack-item">
            <i className="devicon-c-plain monotone"></i>
            <span>C</span>
          </div>
          <div className="tech-stack-item">
            <i className="devicon-cplusplus-plain monotone"></i>
            <span>C++</span>
          </div>
          <div className="tech-stack-item">
            <i className="devicon-java-plain monotone"></i>
            <span>Java</span>
          </div>
          <div className="tech-stack-item">
            <i className="devicon-python-plain monotone"></i>
            <span>Python</span>
          </div>
          <div className="tech-stack-item">
            <i className="devicon-elixir-plain monotone"></i>
            <span>Elixir</span>
          </div>
          <div className="tech-stack-item">
            <i className="devicon-haskell-plain monotone"></i>
            <span>Haskell</span>
          </div>
          <div className="tech-stack-item">
            <i className="devicon-mongodb-plain monotone"></i>
            <span>MongoDB</span>
          </div>
          <div className="tech-stack-item">
            <i className="devicon-express-original monotone"></i>
            <span>Express</span>
          </div>
          <div className="tech-stack-item">
            <i className="devicon-react-original monotone"></i>
            <span>React</span>
          </div>
          <div className="tech-stack-item">
            <i className="devicon-nodejs-plain monotone"></i>
            <span>Node.js</span>
          </div>
          <div className="tech-stack-item">
            <i className="devicon-postgresql-plain monotone"></i>
            <span>PostgreSQL</span>
          </div>
        </div>
        
        <Footer />
      </div>
  );
}

export default App;
