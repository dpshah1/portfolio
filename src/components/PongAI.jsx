import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import './ProjectDetail.css'

function PongAI() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)'
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)'
      } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)'
        navbar.style.boxShadow = 'none'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar showPortfolioLink={true} />
      <section className="project-hero">
        <div className="container">
          <div className="project-icon">
            <i className="fas fa-gamepad"></i>
          </div>
          <h1>Pong Game with Neural Network AI</h1>
          <p className="subtitle">Evolution-Based AI Training System</p>
          <div className="project-links">
            <a href="https://neural-net-pong-ai.onrender.com" target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fas fa-external-link-alt"></i>
              Live Demo
            </a>
            <a href="https://github.com/dpshah1/neural-net-pong-ai" target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </div>
          <Link to="/" className="back-button">
            <i className="fas fa-arrow-left"></i>
            Back to Portfolio
          </Link>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-info-circle section-icon"></i>
            Overview
          </h2>
          <p className="content-text">
            A complete Pong implementation featuring an AI opponent trained via genetic algorithm. 
            The AI learns through evolution, playing matches and improving over generations without 
            any labeled data. Includes local gameplay, AI training system, and web deployment 
            with real-time multiplayer support.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-cogs section-icon"></i>
            Architecture
          </h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-gamepad"></i>
              </div>
              <div className="feature-title">Core Game Engine</div>
              <div className="feature-description">
                Three game modes: two-player classic Pong, headless AI-compatible engine for training, 
                and human vs AI gameplay. Features 60 FPS with angle-based ball physics and dynamic 
                speed multiplier (increases after each hit, max 3x).
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-brain"></i>
              </div>
              <div className="feature-title">Neural Network</div>
              <div className="feature-description">
                PongNet architecture with 10 normalized input features, two hidden layers (64→64 neurons), 
                and continuous action output [-1, 1]. Features state mirroring for both paddle sides and 
                speed-invariant learning through normalized inputs.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-dna"></i>
              </div>
              <div className="feature-title">Genetic Algorithm</div>
              <div className="feature-description">
                Population of 50 neural networks evolving through elite selection, tournament selection, 
                uniform crossover (70% rate), and adaptive mutation. Maintains Hall of Fame with top 50 
                models ever seen for stronger opponents.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="feature-title">Curriculum Learning</div>
              <div className="feature-description">
                Progressive difficulty: Generations 1-20 play mostly against teacher, 21-50 mix teacher 
                and population, 51+ focus on population and Hall of Fame matches for advanced learning.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-chart-line section-icon"></i>
            Fitness Function
          </h2>
          <p className="content-text">
            Multi-component fitness function that encourages active, strategic play while discouraging 
            passive strategies. The system rewards scoring, hitting, and returning while penalizing 
            missed balls, idle behavior, and edge camping.
          </p>
          
          <div className="problem-solution-grid">
            <div className="solution-card">
              <h3 className="card-title">Rewards</h3>
              <ul className="content-list">
                <li>+75 per point scored</li>
                <li>+20 per ball hit</li>
                <li>+30 per successful return</li>
              </ul>
            </div>

            <div className="problem-card">
              <h3 className="card-title">Penalties</h3>
              <ul className="content-list">
                <li>-150 per missed ball</li>
                <li>-0.1 per idle frame</li>
                <li>-100 × mean distance when ball approaching</li>
                <li>-300 if never hits ball</li>
                <li>-200 × low movement variance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-sitemap section-icon"></i>
            Technical Architecture
          </h2>
          
          <div className="technologies-grid">
            <div className="tech-item">
              <i className="fas fa-gamepad tech-icon"></i>
              <span><strong>Game Engine - Pygame:</strong> Classic Pong implementation with angle-based physics and dynamic speed scaling</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-brain tech-icon"></i>
              <span><strong>Neural Networks - PyTorch:</strong> Deep learning models with 10 input features and continuous action output</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-dna tech-icon"></i>
              <span><strong>Evolution - Genetic Algorithm:</strong> Population-based training with elite selection, crossover, and adaptive mutation</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-server tech-icon"></i>
              <span><strong>Backend - Flask:</strong> Web server with Flask-SocketIO for real-time WebSocket communication</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-globe tech-icon"></i>
              <span><strong>Frontend - HTML5 Canvas:</strong> Real-time game rendering with 60 FPS fixed timestep</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-cloud tech-icon"></i>
              <span><strong>Deployment - Render.com:</strong> Production-ready web deployment with headless mode support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-star section-icon"></i>
            Key Features
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-dna"></i>
              </div>
              <div className="feature-title">Evolution-Based Learning</div>
              <div className="feature-description">
                No labeled data required. AI learns through self-play and genetic evolution, 
                developing strategies naturally over generations.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chess"></i>
              </div>
              <div className="feature-title">Emergent Strategies</div>
              <div className="feature-description">
                AI develops strategic positioning, adaptive play styles, and competitive 
                techniques through evolutionary pressure.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="feature-title">Production Ready</div>
              <div className="feature-description">
                Full web deployment with real-time multiplayer support, WebSocket communication, 
                and scalable architecture.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-desktop"></i>
              </div>
              <div className="feature-title">Cross-Platform</div>
              <div className="feature-description">
                Works seamlessly on macOS, Linux, Windows, and web browsers with consistent 
                performance across platforms.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-trophy section-icon"></i>
            Training Results
          </h2>
          <p className="content-text">
            Trained for 300+ generations with a population of 50 neural networks. The final model 
            demonstrates remarkable capabilities:
          </p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">300+</div>
              <div className="stat-label">Generations Trained</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50</div>
              <div className="stat-label">Population Size</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">64→64</div>
              <div className="stat-label">Neural Network Architecture</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10</div>
              <div className="stat-label">Input Features</div>
            </div>
          </div>

          <div className="implementation-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-title">Consistent Shot Returns</div>
                <div className="step-description">
                  The AI reliably returns shots with high accuracy, demonstrating learned paddle control 
                  and ball tracking capabilities.
                </div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-title">Strategic Positioning</div>
                <div className="step-description">
                  AI develops optimal paddle positioning strategies, anticipating ball trajectories 
                  and maximizing return opportunities.
                </div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-title">Speed Adaptation</div>
                <div className="step-description">
                  Successfully adapts to dynamic ball speed changes, maintaining performance as 
                  speed multiplier increases up to 3x.
                </div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <div className="step-title">Competitive Play</div>
                <div className="step-description">
                  Provides challenging gameplay against human opponents, demonstrating emergent 
                  strategic thinking and adaptive behavior.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PongAI

