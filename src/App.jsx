import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">
          <span>Nitin.</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-btn">Hire Me</a>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-badge">
          🚀 Available for Internship
        </div>
        <h1>
          Hi, I'm Nitin.<br />
          <span>Full Stack Developer</span>
        </h1>
        <p>
          I build beautiful, responsive, and dynamic web applications. 
          Passionate about solving real-world problems through clean code and intuitive design.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </header>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="section-header">
          <h2>Featured <span>Projects</span></h2>
          <p>Here are some of the real-world applications I have built.</p>
        </div>
        
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-content">
              <h3>GestureFlow Control System</h3>
              <p>A touchless presentation control system utilizing real-time computer vision to capture and interpret hand gestures via webcam.</p>
              <div className="tech-stack">
                <span>Python</span>
                <span>OpenCV</span>
                <span>NumPy</span>
                <span>CVZone</span>
              </div>
              <a href="#" className="project-link">View Details →</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-content">
              <h3>Govt. Scheme Eligibility Checker</h3>
              <p>A dynamic web application that allows citizens to instantly check their eligibility for government welfare schemes and competitive exams.</p>
              <div className="tech-stack">
                <span>React</span>
                <span>TypeScript</span>
                <span>Firebase</span>
                <span>Vite</span>
              </div>
              <a href="#" className="project-link">View Details →</a>
            </div>
          </div>
        </div>
      </section>

      {/* About / Resume Section */}
      <section className="about-section" id="about">
        <div className="section-header">
          <h2>About <span>Me</span></h2>
          <p>My journey, skills, and experience.</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Full Stack Web Developer</h3>
            <p>I am a passionate developer with experience in building modern web applications. I love solving complex problems and turning ideas into functional, beautiful software.</p>
            <div className="skills-container">
              <span className="skill-tag">HTML5 & CSS3</span>
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Git & GitHub</span>
            </div>
            <a href="#" className="btn-primary" style={{marginTop: '20px', display: 'inline-block'}}>Download Resume</a>
          </div>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h4>Full Stack Web Development Intern</h4>
              <h5>Future Interns | Present</h5>
              <p>Building real-world web applications and scalable client lead management systems.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h4>Hackathon Participant</h4>
              <h5>Smart India Hackathon & Google TechSprint</h5>
              <p>Developed innovative problem-solving solutions and built functional prototypes under tight deadlines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="section-header">
          <h2>Get In <span>Touch</span></h2>
          <p>Have a question or want to work together? Send me a message!</p>
        </div>
        <div className="contact-container">
          {/* We will connect this form to Web3Forms later */}
          <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="75793e7c-7a0f-4589-8441-6386f591b830" />
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="How can I help you?"></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{width: '100%'}}>Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Nitin. Built for Future Interns.</p>
      </footer>

    </div>
  )
}

export default App
