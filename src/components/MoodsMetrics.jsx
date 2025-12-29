import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import './ProjectDetail.css'

function MoodsMetrics() {
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
            <i className="fas fa-brain"></i>
          </div>
          <h1>Moods and Metrics</h1>
          <p className="subtitle">AI-Powered Mental Health Analysis Tool</p>
          <div className="award-badge">
            🏆 Winner - Otsuka Valuenex Award at TreeHacks 2025
          </div>
          <div className="project-links">
            <a href="https://devpost.com/software/moodmap-ai" target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fas fa-external-link-alt"></i>
              Devpost
            </a>
            <a href="https://github.com/corey-shen/stress-level-audio-analysis" target="_blank" rel="noopener noreferrer" className="project-link">
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
            <i className="fas fa-exclamation-triangle section-icon"></i>
            The Problem
          </h2>
          
          <p className="content-text">
            In today's world, stress and anxiety are increasingly prevalent, yet many people struggle to understand 
            and quantify their emotional states. Traditional mental health monitoring often relies on subjective 
            self-reporting, making it difficult to get accurate, real-time insights into one's emotional well-being.
          </p>

          <div className="problem-solution-grid">
            <div className="problem-card">
              <h3 className="card-title">Limited Self-Awareness</h3>
              <p className="content-text">
                People often struggle to accurately assess their own emotional states and stress levels, 
                leading to poor mental health management and delayed intervention when needed.
              </p>
            </div>
            <div className="solution-card">
              <h3 className="card-title">AI-Powered Analysis</h3>
              <p className="content-text">
                Moods and Metrics provides objective, multi-modal analysis of emotional states through 
                audio, video, and transcription sentiment analysis, helping users gain deeper insights into their mental well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-star section-icon"></i>
            Analysis Modalities
          </h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-microphone"></i>
              </div>
              <div className="feature-title">Audio Analysis</div>
              <div className="feature-description">
                Utilizes a fine-tuned wav2vec2 transformer to capture arousal, valence, and dominance values, 
                mapping them to stress scores through advanced sentiment analysis
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-video"></i>
              </div>
              <div className="feature-title">Video Analysis</div>
              <div className="feature-description">
                Sends video clips to Google Gemini AI for facial expression analysis, evaluating calm/stress 
                levels with detailed reasoning
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <div className="feature-title">Transcription Analysis</div>
              <div className="feature-description">
                Performs sentiment analysis on video transcription data, providing comprehensive emotional 
                insights through text analysis
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="feature-title">2D & 3D Visualization</div>
              <div className="feature-description">
                Interactive data visualization using three.js to map valence, dominance, and arousal 
                in both 2D and 3D formats
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-brain"></i>
              </div>
              <div className="feature-title">AI-Driven Insights</div>
              <div className="feature-description">
                Advanced AI models provide real-time emotional analysis and personalized insights 
                for better mental health understanding
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="feature-title">User-Friendly Interface</div>
              <div className="feature-description">
                Clean React frontend with intuitive UI design, making complex emotional analysis 
                accessible to everyone
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-cogs section-icon"></i>
            How It Works
          </h2>
          
          <div className="implementation-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-title">Multi-Modal Input</div>
                <div className="step-description">
                  Users can provide audio recordings, video clips, or text transcriptions for analysis, 
                  allowing flexibility in how they want to assess their emotional state.
                </div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-title">AI Processing</div>
                <div className="step-description">
                  Advanced AI models (wav2vec2 for audio, Gemini for video/text) analyze the input 
                  to extract emotional indicators like arousal, valence, and dominance.
                </div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-title">Emotional Mapping</div>
                <div className="step-description">
                  Using a tri-dimensional model of core affect, the system maps emotional data 
                  to comprehensive stress scores and emotional states.
                </div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <div className="step-title">Interactive Visualization</div>
                <div className="step-description">
                  Results are presented through interactive 2D and 3D visualizations, helping users 
                  understand their emotional patterns and trends over time.
                </div>
              </div>
            </div>
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
              <i className="fab fa-react tech-icon"></i>
              <span><strong>React:</strong> Frontend framework for interactive UI components</span>
            </div>
            <div className="tech-item">
              <i className="fab fa-python tech-icon"></i>
              <span><strong>Python:</strong> Backend development and AI model integration</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-brain tech-icon"></i>
              <span><strong>Hugging Face:</strong> Fine-tuned wav2vec2 transformer for audio analysis</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-cogs tech-icon"></i>
              <span><strong>PyTorch:</strong> Deep learning framework for model training and inference</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-cloud tech-icon"></i>
              <span><strong>FastAPI:</strong> High-performance backend API framework</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-chart-bar tech-icon"></i>
              <span><strong>Three.js:</strong> 3D visualization library for interactive emotion mapping</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-palette tech-icon"></i>
              <span><strong>Tailwind CSS:</strong> Utility-first CSS framework for modern styling</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-chart-line tech-icon"></i>
              <span><strong>D3.js:</strong> Data visualization library for 2D charts and graphs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-rocket section-icon"></i>
            Future Plans
          </h2>
          
          <div className="future-plans">
            <div className="plan-item">
              <i className="fas fa-heartbeat plan-icon"></i>
              <div className="plan-text">
                <strong>Enhanced AI Models:</strong> Integrate additional modalities such as heartbeat monitoring, 
                EKG signals, and other biometric data for more comprehensive emotional analysis.
              </div>
            </div>
            <div className="plan-item">
              <i className="fas fa-microphone plan-icon"></i>
              <div className="plan-text">
                <strong>Custom Model Training:</strong> Collect and train models on breathing audio to stress score 
                data for more accurate local emotional tracking.
              </div>
            </div>
            <div className="plan-item">
              <i className="fas fa-video plan-icon"></i>
              <div className="plan-text">
                <strong>Real-Time Analysis:</strong> Implement live video analysis without requiring pre-recorded clips 
                for immediate emotional feedback.
              </div>
            </div>
            <div className="plan-item">
              <i className="fas fa-lightbulb plan-icon"></i>
              <div className="plan-text">
                <strong>Personalized Recommendations:</strong> Add AI-powered stress relief suggestions and 
                personalized wellness recommendations based on emotional patterns.
              </div>
            </div>
            <div className="plan-item">
              <i className="fas fa-mobile-alt plan-icon"></i>
              <div className="plan-text">
                <strong>Mobile Application:</strong> Develop a mobile version for on-the-go emotional tracking 
                with fully local processing capabilities.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MoodsMetrics

