import React from "react";
import gameDevPortfolioImage from "./images/game-dev-portfolio.png";
import usedCarPricePredictorImage from "./images/used-car-price-predictor.png";

const projects = [
  {
    title: "Used Car Price Predictor",
    description:
      "Used a used car dataset from Kaggle.com and enable users to input car features and receive a estimated price.",
    image: usedCarPricePredictorImage,
    link: "https://used-car-price-predictor-1-pis0.onrender.com/",
    tags: ["Python", "ML", "CSV files"],
  },
  {
    title: "Game Dev Portfolio Website",
    description:
      "This website contain all the games I've made.",
    image: gameDevPortfolioImage,
    link: "https://rushymc.github.io/Game-Dev-Portfolio/index.html",
    tags: ["HTML", "CSS", "JavaScript", "Unity", "Godot"],
  },
];

const skillGroups = [
  {
    department: "Programming Languages",
    items: ["Python", "JavaScript", "HTML", "CSS", "SQL", "Java"],
  },
  {
    department: "Tools & Technology",
    items: ["Git", "GitHub", "Render", "Kaggle", "Visual Studio Code", "PyCharm", "IntelliJ"],
  },
  {
    department: "Frameworks & Libraries",
    items: ["React", "Node.js", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    department: "Engineering Skills",
    items: [
      "Frontend Architecture",
      "API Design",
      "Machine Learning",
      "Data Cleaning",
      "Product Engineering",
    ],
  },
];

function App() {
  return (
    <main className="portfolio-shell">
      <style>{styles}</style>

      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Portfolio home">
          <span className="brand-mark">SE</span>
          <span>RushyMC</span>
        </a>

        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/RushyMC" target="_blank">Github</a>
          <a href="https://leetcode.com/u/rushymctits/" target="_blank">Leetcode Profile</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Software Engineer</p>
          <h2>Building reliable software with clean interfaces and thoughtful systems.</h2>
          <p className="hero-text">
            Hi, I'm Phi. I design and build modern web applications,
            backend services, and interesting tools for users to enjoy and learn from.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              View Projects
            </a>
            <a className="secondary-button" href="mailto:nhatpnb1@gmail.com">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-card" aria-label="Profile summary">
        
          <div className="status-row">
            <span className="status-dot" />
            <span>Available for select projects</span>
          </div>
          <dl className="quick-stats">
            <div>
              <dt>2+</dt>
              <dd>Years building</dd>
            </div>
            <div>
              <dt>2+</dt>
              <dd>Projects shipped</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Projects</h2>
          <p>
            
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={`${project.title} preview`} />
              <div className="project-content">
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" aria-label={`Open ${project.title}`}>
                  View project
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section" id="skills">
        <div>
          <p className="eyebrow">What I Do</p>
          <h2>Engineering that balances craft, clarity, and delivery.</h2>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.department}>
              <h3>{group.department}</h3>
              <div className="skill-grid">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Have a project or role in mind?</h2>
          <p>
            I'm always interested in thoughtful products, useful tools, and
            engineering teams that care about quality.
          </p>
        </div>
        <a className="primary-button" href="mailto:nhatpnb1@gmail.com">
          Contact me!
        </a>
      </section>
    </main>
  );
}

const styles = `
  :root {
    color-scheme: dark;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: #0e1117;
    color: #f4f7fb;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background:
      radial-gradient(circle at top left, rgba(54, 184, 168, 0.14), transparent 34rem),
      linear-gradient(180deg, #0e1117 0%, #121723 46%, #0d1017 100%);
    min-width: 320px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .portfolio-shell {
    width: min(1180px, calc(100% - 40px));
    margin: 0 auto;
    padding: 24px 0 56px;
  }

  .navbar {
    position: sticky;
    top: 16px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 12px 14px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 8px;
    background: rgba(14, 17, 23, 0.78);
    backdrop-filter: blur(18px);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
  }

  .brand,
  .nav-links {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .brand {
    font-weight: 800;
    letter-spacing: 0;
  }

  .brand-mark {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border-radius: 8px;
    color: #061410;
    background: #62d6c7;
    font-size: 0.9rem;
  }

  .nav-links a {
    padding: 9px 10px;
    border-radius: 8px;
    color: #b8c3d4;
    font-size: 0.95rem;
    transition: color 160ms ease, background 160ms ease;
  }

  .nav-links a:hover {
    color: #f4f7fb;
    background: rgba(255, 255, 255, 0.06);
  }

  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
    gap: 56px;
    align-items: center;
    min-height: calc(100vh - 104px);
    padding: 84px 0 72px;
  }

  .hero-copy {
    max-width: 720px;
  }

  .eyebrow {
    margin: 0 0 12px;
    color: #62d6c7;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  h1,
  h2,
  h3,
  p {
    margin-top: 0;
  }

  h1 {
    margin-bottom: 24px;
    max-width: 850px;
    font-size: clamp(2.7rem, 7vw, 5.8rem);
    line-height: 0.95;
    letter-spacing: 0;
  }

  h2 {
    margin-bottom: 14px;
    color: #f8fbff;
    font-size: clamp(2rem, 4vw, 3.2rem);
    line-height: 1.05;
    letter-spacing: 0;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 1.28rem;
    letter-spacing: 0;
  }

  .hero-text,
  .section-heading p,
  .project-content p,
  .contact-section p {
    color: #b8c3d4;
    font-size: 1.04rem;
    line-height: 1.7;
  }

  .hero-text {
    max-width: 650px;
    margin-bottom: 32px;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .primary-button,
  .secondary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 46px;
    padding: 0 18px;
    border-radius: 8px;
    font-weight: 800;
    transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
  }

  .primary-button {
    color: #071410;
    background: #62d6c7;
  }

  .secondary-button {
    color: #f4f7fb;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.05);
  }

  .primary-button:hover,
  .secondary-button:hover {
    transform: translateY(-2px);
  }

  .hero-card {
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 28px 80px rgba(0, 0, 0, 0.32);
  }

  .hero-card img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }

  .status-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 18px 20px 4px;
    color: #d6dee9;
    font-weight: 700;
  }

  .status-dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #62d6c7;
    box-shadow: 0 0 0 6px rgba(98, 214, 199, 0.14);
  }

  .quick-stats {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin: 0;
    padding: 18px 20px 22px;
  }

  .quick-stats div {
    padding: 18px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.06);
  }

  .quick-stats dt {
    font-size: 2rem;
    font-weight: 900;
  }

  .quick-stats dd {
    margin: 4px 0 0;
    color: #a9b5c6;
  }

  .section {
    padding: 72px 0;
  }

  .section-heading {
    max-width: 720px;
    margin-bottom: 34px;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }

  .project-card {
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.055);
    transition: transform 170ms ease, border-color 170ms ease, background 170ms ease;
  }

  .project-card:hover {
    transform: translateY(-5px);
    border-color: rgba(98, 214, 199, 0.42);
    background: rgba(255, 255, 255, 0.075);
  }

  .project-card img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
  }

  .project-content {
    padding: 22px;
  }

  .tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 18px;
  }

  .tag-row span,
  .skill-grid span {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 999px;
    color: #dce4ef;
    background: rgba(255, 255, 255, 0.06);
  }

  .tag-row span {
    padding: 6px 9px;
    font-size: 0.78rem;
    font-weight: 700;
  }

  .project-content a {
    display: inline-flex;
    margin-top: 8px;
    color: #62d6c7;
    font-weight: 800;
  }

  .split-section {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(320px, 1fr);
    gap: 44px;
    align-items: start;
  }

  .skill-groups {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .skill-group {
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.055);
  }

  .skill-group h3 {
    margin-bottom: 14px;
    color: #f8fbff;
    font-size: 1rem;
  }

  .skill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .skill-grid span {
    padding: 9px 11px;
    font-size: 0.88rem;
    font-weight: 800;
  }

  .contact-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-top: 38px;
    padding: 32px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    background: linear-gradient(135deg, rgba(98, 214, 199, 0.13), rgba(255, 255, 255, 0.055));
  }

  .contact-section div {
    max-width: 680px;
  }

  .contact-section h2 {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
  }

  @media (max-width: 920px) {
    .hero,
    .split-section {
      grid-template-columns: 1fr;
    }

    .hero {
      gap: 36px;
      min-height: auto;
      padding-top: 70px;
    }

    .project-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 680px) {
    .portfolio-shell {
      width: min(100% - 28px, 1180px);
      padding-top: 14px;
    }

    .navbar,
    .contact-section {
      align-items: flex-start;
      flex-direction: column;
    }

    .nav-links {
      width: 100%;
      justify-content: space-between;
    }

    .nav-links a {
      padding-left: 0;
      padding-right: 0;
    }

    .hero {
      padding: 58px 0 48px;
    }

    .hero-actions,
    .primary-button,
    .secondary-button {
      width: 100%;
    }

    .project-grid,
    .quick-stats,
    .skill-groups {
      grid-template-columns: 1fr;
    }

    .section {
      padding: 48px 0;
    }

    .contact-section {
      padding: 24px;
    }
  }
`;

export default App;
