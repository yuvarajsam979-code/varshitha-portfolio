import { useState } from 'react'
import './App.css'
import {
  profile,
  navigation,
  learningJourney,
  focusAreas,
  timeline,
  skills,
  projects,
  repositoryHighlights,
  goals,
} from './data/portfolioData'

const socialLinks = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: profile.email },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="page-shell">
      <header className="topbar">
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a href="#home" className="brand" aria-label="Singam Varshitha Reddy home" onClick={() => setIsMenuOpen(false)}>
            <span className="brand-mark">SV</span>
            <span className="brand-text">
              <strong>Singam Varshitha Reddy</strong>
              <small>Aspiring Developer</small>
            </span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <div id="nav-menu" className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {navigation.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="nav-cta" onClick={() => setIsMenuOpen(false)}>
            Let&apos;s Connect
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">Beginner Developer • Tech Enthusiast • Lifelong Learner</p>
            <h1>{profile.name}</h1>
            <h2>{profile.role}</h2>
            <p className="tagline">{profile.tagline}</p>
            <p className="intro">{profile.intro}</p>

            <div className="cta-row">
              <a href="#journey" className="primary-btn">
                Explore My Journey
              </a>
              <a href="#projects" className="secondary-btn">
                View Projects
              </a>
            </div>

            <div className="social-row" aria-label="Social links">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="social-btn">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual reveal" aria-label="Abstract code visualization">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="code-card">
              <div className="code-header">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="code-lines">
                <span>{'const learning = ['}</span>
                <span>{'"HTML", "CSS", "JavaScript"'}</span>
                <span>{'];'}</span>
                <span>{'function build() {'}</span>
                <span>{'  return "Curiosity + practice";'}</span>
                <span>{'}'}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading">
            <p className="section-kicker">About Me</p>
            <h3>Learning, experimenting, building, and improving.</h3>
          </div>

          <div className="about-grid">
            <div className="glass-panel">
              <p>
                I am a beginner in programming, and I am genuinely interested in how technology works, how software is built,
                and how ideas can turn into practical solutions. I enjoy learning new concepts, understanding different tools,
                and improving my skills step by step.
              </p>
            </div>

            <div className="glass-panel">
              <p>
                I am curious about multiple technologies, and I want to explore how they connect to build meaningful projects.
                I am learning at a steady pace, focusing on fundamentals, trying new things, and growing through real practice.
              </p>
            </div>
          </div>
        </section>

        <section id="journey" className="section journey-section">
          <div className="section-heading center">
            <p className="section-kicker">My Learning Journey</p>
            <h3>Starting → Learning → Building → Exploring → Growing</h3>
          </div>

          <div className="journey-grid">
            <div className="journey-group">
              <h4>Learning</h4>
              <div className="tag-group">
                {learningJourney.learning.map((item) => (
                  <span key={item} className="tag accent-tag">{item}</span>
                ))}
              </div>
            </div>

            <div className="journey-group">
              <h4>Exploring</h4>
              <div className="tag-group">
                {learningJourney.exploring.map((item) => (
                  <span key={item} className="tag secondary-tag">{item}</span>
                ))}
              </div>
            </div>

            <div className="journey-group">
              <h4>Future Goals</h4>
              <div className="tag-group">
                {learningJourney.futureGoals.map((item) => (
                  <span key={item} className="tag muted-tag">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section current-focus">
          <div className="section-heading center">
            <p className="section-kicker">Current Focus</p>
            <h3>What I&apos;m Learning Right Now</h3>
          </div>

          <div className="focus-grid">
            {focusAreas.map((item) => (
              <article key={item.title} className="focus-card glass-panel">
                <span className="mini-badge">Active</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading center">
            <p className="section-kicker">Projects</p>
            <h3>Building a strong foundation through practical work</h3>
          </div>

          <div className="project-columns">
            <div className="project-column">
              <h4>Currently Building</h4>
              {projects.building.map((project) => (
                <article key={project.name} className="project-card glass-panel">
                  <div className="project-meta">
                    <span className="status status-progress">{project.status}</span>
                  </div>
                  <h5>{project.name}</h5>
                  <p>{project.description}</p>
                  <div className="chip-row">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github}>GitHub</a>
                    <a href={project.demo}>Live Demo</a>
                  </div>
                </article>
              ))}
            </div>

            <div className="project-column">
              <h4>Completed Projects</h4>
              {projects.completed.map((project) => (
                <article key={project.name} className={`project-card glass-panel ${project.isPlaceholder ? 'placeholder-card' : ''}`}>
                  <div className="project-meta">
                    <span className="status status-complete">{project.status}</span>
                  </div>
                  <h5>{project.name}</h5>
                  <p>{project.description}</p>
                  <div className="chip-row">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip">{tech}</span>
                    ))}
                  </div>
                  {!project.isPlaceholder && (
                    <div className="project-links">
                      <a href={project.github}>GitHub</a>
                      <a href={project.demo}>Live Demo</a>
                    </div>
                  )}
                </article>
              ))}
            </div>

            <div className="project-column">
              <h4>Future Projects</h4>
              {projects.future.map((project) => (
                <article key={project.name} className={`project-card glass-panel ${project.isPlaceholder ? 'placeholder-card' : ''}`}>
                  <div className="project-meta">
                    <span className="status status-planned">{project.status}</span>
                  </div>
                  <h5>{project.name}</h5>
                  <p>{project.description}</p>
                  <div className="chip-row">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip">{tech}</span>
                    ))}
                  </div>
                  {!project.isPlaceholder && (
                    <div className="project-links">
                      <a href={project.github}>GitHub</a>
                      <a href={project.demo}>Live Demo</a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section timeline-section" id="journey-timeline">
          <div className="section-heading center">
            <p className="section-kicker">Growth Timeline</p>
            <h3>My path so far</h3>
          </div>

          <div className="timeline" aria-label="Career growth timeline">
            {timeline.map((item) => (
              <article key={item.title} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content glass-panel">
                  <span className="timeline-year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading center">
            <p className="section-kicker">Skills</p>
            <h3>Honest progress, not inflated claims</h3>
          </div>

          <div className="skills-grid">
            <div className="skills-column glass-panel">
              <h4>Currently Learning</h4>
              <div className="tag-group">
                {skills.currentlyLearning.map((item) => (
                  <span key={item} className="tag accent-tag">{item}</span>
                ))}
              </div>
            </div>

            <div className="skills-column glass-panel">
              <h4>Exploring</h4>
              <div className="tag-group">
                {skills.exploring.map((item) => (
                  <span key={item} className="tag secondary-tag">{item}</span>
                ))}
              </div>
            </div>

            <div className="skills-column glass-panel">
              <h4>Future Goals</h4>
              <div className="tag-group">
                {skills.futureGoals.map((item) => (
                  <span key={item} className="tag muted-tag">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="goals" className="section goals-section">
          <div className="section-heading">
            <p className="section-kicker">Where I&apos;m Going</p>
            <h3>A focused path toward becoming a strong developer.</h3>
          </div>

          <div className="goals-panel glass-panel">
            <ul>
              {goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section github-section">
          <div className="section-heading center">
            <p className="section-kicker">Building in Public</p>
            <h3>Sharing the learning journey, one step at a time</h3>
          </div>

          <div className="repo-grid">
            {repositoryHighlights.map((item) => (
              <a key={item.name} href={item.href} className="repo-card glass-panel" target="_blank" rel="noreferrer">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-panel glass-panel">
            <p className="section-kicker">Let&apos;s Connect</p>
            <h3>I&apos;m always interested in learning, building, and connecting with people who are passionate about technology.</h3>
            <div className="contact-links">
              <a href={profile.email}>Email</a>
              <a href={profile.github}>GitHub</a>
              <a href={profile.linkedin}>LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>{profile.name}</strong>
          <p>Aspiring Developer • Always Learning</p>
        </div>

        <div className="footer-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>

        <p className="footer-note">Built with curiosity and a lot of learning.</p>
        <p className="copyright">© 2026 {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
