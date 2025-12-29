import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './ProjectDetail.css'

function NetraAI() {
  return (
    <>
      <Navbar showPortfolioLink={true} />
      <section className="project-hero">
        <div className="container">
          <div className="project-icon">
            <i className="fas fa-video"></i>
          </div>
          <h1>Netra AI</h1>
          <p className="subtitle">AI-Powered Video Stream Security Application</p>
          <div className="project-links">
            <a href="https://devpost.com/software/netra-ai" target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fas fa-external-link-alt"></i>
              Devpost
            </a>
            <a href="https://github.com/Vaddala06/calhacks" target="_blank" rel="noopener noreferrer" className="project-link">
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
            Traditional video surveillance systems require manual review of hours of footage to find specific events, 
            making them inefficient and time-consuming. When incidents occur, users often need to sift through 
            extensive video recordings to understand what happened, which is both frustrating and impractical.
          </p>

          <div className="problem-solution-grid">
            <div className="problem-card">
              <h3 className="card-title">Manual Video Review</h3>
              <p className="content-text">
                Users often need to manually review hours of surveillance footage to find specific events, 
                which is time-consuming and inefficient. This was the exact challenge faced when someone 
                stole something in front of a family member's house.
              </p>
            </div>
            <div className="solution-card">
              <h3 className="card-title">AI-Powered Solution</h3>
              <p className="content-text">
                Netra AI transforms video monitoring with instant event querying and real-time alerts. 
                Users can ask natural language questions about events and receive immediate, detailed responses.
              </p>
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
                <i className="fas fa-search"></i>
              </div>
              <div className="feature-title">Instant Event Querying</div>
              <div className="feature-description">
                Ask natural language questions about events in your video feed and get immediate answers
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-bell"></i>
              </div>
              <div className="feature-title">Real-Time Alerts</div>
              <div className="feature-description">
                Receive instant notifications with detailed descriptions of important events as they happen
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-microphone"></i>
              </div>
              <div className="feature-title">Speech Recognition</div>
              <div className="feature-description">
                Voice-to-text functionality for easy communication with the system, making it accessible for all users
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-eye"></i>
              </div>
              <div className="feature-title">Motion Detection</div>
              <div className="feature-description">
                Automatic detection and recording of motion events with configurable sensitivity settings
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-brain"></i>
              </div>
              <div className="feature-title">AI Analysis</div>
              <div className="feature-description">
                Advanced AI processing using Google Gemini to analyze video content and extract meaningful insights
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-database"></i>
              </div>
              <div className="feature-title">Smart Storage</div>
              <div className="feature-description">
                Efficient storage and retrieval of alert messages using ChromaDB for quick access to historical data
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
                <div className="step-title">Video Processing</div>
                <div className="step-description">
                  The system continuously monitors video streams using OpenCV for motion detection and records 
                  5-second clips when activity is detected.
                </div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-title">AI Analysis</div>
                <div className="step-description">
                  Google Gemini AI analyzes the video content to understand what's happening and generates 
                  detailed descriptions of events.
                </div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-title">Natural Language Queries</div>
                <div className="step-description">
                  Users can ask questions like "Did someone come to my house?" and receive instant, 
                  accurate responses based on the analyzed video data.
                </div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <div className="step-title">Real-Time Alerts</div>
                <div className="step-description">
                  Important events trigger immediate alerts with detailed descriptions, keeping users 
                  informed of significant activities in real-time.
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
              <i className="fab fa-python tech-icon"></i>
              <span><strong>Python:</strong> Core programming language for the application</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-brain tech-icon"></i>
              <span><strong>Google Gemini:</strong> AI model for video analysis and content understanding</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-eye tech-icon"></i>
              <span><strong>OpenCV:</strong> Computer vision library for motion detection and video processing</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-microphone tech-icon"></i>
              <span><strong>DeepGram:</strong> Speech-to-text functionality for voice interactions</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-database tech-icon"></i>
              <span><strong>ChromaDB:</strong> Vector database for storing and retrieving alert messages</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-code tech-icon"></i>
              <span><strong>Reflex:</strong> Full-stack framework for frontend and backend development</span>
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
              <i className="fas fa-mobile-alt plan-icon"></i>
              <div className="plan-text">
                <strong>Real-Time Text Alerts:</strong> Send detailed event descriptions via text messages, 
                such as "Your daughter has arrived home" or "There is a fire outside your home."
              </div>
            </div>
            <div className="plan-item">
              <i className="fas fa-globe plan-icon"></i>
              <div className="plan-text">
                <strong>Enhanced AI Training:</strong> Train the AI model on video data from different 
                countries and diverse populations for better global applicability.
              </div>
            </div>
            <div className="plan-item">
              <i className="fas fa-shield-alt plan-icon"></i>
              <div className="plan-text">
                <strong>Improved Security:</strong> Implement Multi-Factor Authentication and encryption 
                to enhance privacy and security of user data.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NetraAI

