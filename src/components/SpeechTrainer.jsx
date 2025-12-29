import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import './ProjectDetail.css'

function SpeechTrainer() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)'
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)'
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)'
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
            <i className="fas fa-microphone"></i>
          </div>
          <h1>Speech Trainer</h1>
          <p className="subtitle">AI-Powered Presentation Skills Enhancement Platform</p>
          <Link to="/" className="back-button">
            <i className="fas fa-arrow-left"></i>
            Back to Portfolio
          </Link>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-exclamation-triangle section-icon"></i>
            The Problem
          </h2>
          <div className="problem-solution-grid">
            <div className="problem-card">
              <h3 className="card-title">Public Speaking Anxiety</h3>
              <p className="content-text">
                Public speaking is a fear that about 74% of people share. However, public speaking has a tremendous impact on our lives. People who are better speakers are generally more successful and have happier lives.
              </p>
              <p className="content-text">
                The challenge is: <strong>How can a computer analyze the quality of a speech automatically?</strong>
              </p>
            </div>
            <div className="solution-card">
              <h3 className="card-title">Our Solution</h3>
              <p className="content-text">
                Speech Trainer is a machine learning-based software application that provides users with comprehensive feedback scores to improve their presentation skills.
              </p>
              <p className="content-text">
                By analyzing six key presentation qualities, we help users develop confidence and effectiveness in public speaking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-lightbulb section-icon"></i>
            Solution Overview
          </h2>
          <p className="content-text">
            I researched several TED talk videos and noticed that verbal delivery and body language are very important to make a presentation effective. From this research, I identified six key presentation qualities that significantly impact speech effectiveness:
          </p>
          
          <div className="technologies-grid">
            <div className="tech-item">
              <i className="fas fa-user tech-icon"></i>
              <span><strong>Posture:</strong> Facial landmark tracking</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-comment tech-icon"></i>
              <span><strong>Filler Words:</strong> "um", "like", "basically" detection</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-tachometer-alt tech-icon"></i>
              <span><strong>Talking Speed:</strong> Words per minute analysis</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-volume-up tech-icon"></i>
              <span><strong>Clarity:</strong> Word pronunciation assessment</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-pause tech-icon"></i>
              <span><strong>Pause Quality:</strong> Length and frequency analysis</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-star tech-icon"></i>
              <span><strong>Confidence:</strong> Overall presentation scoring</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-cogs section-icon"></i>
            Implementation
          </h2>
          
          <div className="implementation-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-title">Research & Analysis</div>
                <div className="step-description">Identified six presentation qualities and wrote Python functions to evaluate any user video on these metrics.</div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-title">Data Collection</div>
                <div className="step-description">Collected 30-second clips from TED talks and other prominent speakers to train the machine learning model.</div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-title">Model Development</div>
                <div className="step-description">Created a machine learning model that predicts presentation quality scores for any headshot video.</div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <div className="step-title">Web Application</div>
                <div className="step-description">Built a website that evaluates and scores user videos on the six presentation qualities in real-time.</div>
              </div>
            </div>
          </div>

          <div className="project-image">
            <img src={`${import.meta.env.BASE_URL}speech-trainer-flowchart.png`} alt="Speech Trainer Project Architecture" />
            <p className="image-caption">System architecture showing the flow from video input to scoring output</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-tools section-icon"></i>
            Technologies Used
          </h2>
          
          <div className="technologies-grid">
            <div className="tech-item">
              <i className="fas fa-eye tech-icon"></i>
              <span><strong>OpenCV:</strong> Facial landmark detection and computer vision</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-database tech-icon"></i>
              <span><strong>PostgreSQL:</strong> Data storage and management</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-table tech-icon"></i>
              <span><strong>Pandas:</strong> Data manipulation and analysis</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-brain tech-icon"></i>
              <span><strong>Scikit-learn:</strong> Machine learning algorithms</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-plug tech-icon"></i>
              <span><strong>Psycopg2:</strong> PostgreSQL connection library</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-book tech-icon"></i>
              <span><strong>Jupyter Notebook:</strong> Interactive data analysis</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-chart-bar tech-icon"></i>
              <span><strong>Seaborn:</strong> Data visualization and graphing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="achievement">
            <div className="achievement-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="achievement-title">Science Fair Success</div>
            <div className="achievement-description">
              Participated in the Alameda County Science and Engineering Fair (ACSEF) and won <strong>Second Place</strong> for this innovative project.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SpeechTrainer

