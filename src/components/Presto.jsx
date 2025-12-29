import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import './ProjectDetail.css'

function Presto() {
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
            <i className="fas fa-utensils"></i>
          </div>
          <h1>Presto</h1>
          <p className="subtitle">AI-Powered Restaurant Customer Service Platform</p>
          <div className="project-links">
            <a href="https://drive-thru-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="project-link">
              <i className="fas fa-external-link-alt"></i>
              Live Demo
            </a>
            <a href="https://github.com/dpshah1/drive-thru-ai" target="_blank" rel="noopener noreferrer" className="project-link">
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
            Traditional restaurant customer service faces significant challenges in the digital age. 
            Manual menu processing, limited accessibility to nutrition information, and the inability 
            to provide personalized recommendations create friction in the ordering experience. 
            Restaurants need a modern solution that can automate menu processing and provide 
            intelligent customer service.
          </p>

          <div className="problem-solution-grid">
            <div className="problem-card">
              <h3 className="card-title">Manual Menu Processing</h3>
              <p className="content-text">
                Restaurants struggle with manually digitizing PDF menus, which is time-consuming 
                and error-prone. This creates delays in updating menu information and makes it 
                difficult to provide accurate, up-to-date information to customers.
              </p>
            </div>
            <div className="solution-card">
              <h3 className="card-title">AI-Powered Solution</h3>
              <p className="content-text">
                Presto revolutionizes this process by using Google Gemini AI to automatically 
                extract menu items, prices, nutrition facts, and allergen information from PDF 
                menus, creating intelligent customer service agents for each restaurant.
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
                <i className="fas fa-store"></i>
              </div>
              <div className="feature-title">Restaurant Management</div>
              <div className="feature-description">
                Create and manage restaurant profiles with location and comprehensive menu information
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-file-pdf"></i>
              </div>
              <div className="feature-title">PDF Menu Processing</div>
              <div className="feature-description">
                Upload PDF menus and automatically extract menu items using Google Gemini AI
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-robot"></i>
              </div>
              <div className="feature-title">AI Customer Service</div>
              <div className="feature-description">
                Generate intelligent customer service agents that handle orders and answer questions
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-apple-alt"></i>
              </div>
              <div className="feature-title">Nutrition Information</div>
              <div className="feature-description">
                Extract and store detailed nutrition facts, ingredients, and allergen information
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="feature-title">Smart Recommendations</div>
              <div className="feature-description">
                AI agents provide personalized recommendations based on dietary restrictions
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="feature-title">Responsive Design</div>
              <div className="feature-description">
                Modern, mobile-friendly interface optimized for all devices and screen sizes
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
                <div className="step-title">Restaurant Creation</div>
                <div className="step-description">
                  Restaurants create profiles through the add-store interface, entering name, location, 
                  and uploading PDF menu files. Multiple PDFs can be combined for comprehensive processing.
                </div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-title">PDF Processing Pipeline</div>
                <div className="step-description">
                  PDFs are uploaded to the server, analyzed by Google Gemini AI, and menu items, 
                  prices, nutrition facts, and ingredients are automatically extracted and stored in Supabase.
                </div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-title">AI Customer Service Generation</div>
                <div className="step-description">
                  Each restaurant gets its own AI customer service agent that can answer questions 
                  about menu items, ingredients, allergens, and provide personalized recommendations.
                </div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <div className="step-title">Customer Interaction</div>
                <div className="step-description">
                  Customers can browse menus, ask questions about ingredients and allergens, 
                  get personalized recommendations, and place orders through the AI agent.
                </div>
              </div>
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
              <i className="fas fa-code tech-icon"></i>
              <span><strong>Frontend - Next.js 15:</strong> React framework with App Router, Tailwind CSS for styling</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-server tech-icon"></i>
              <span><strong>Backend - Next.js API Routes:</strong> Serverless API endpoints for file uploads and processing</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-brain tech-icon"></i>
              <span><strong>AI Processing - Google Gemini AI:</strong> Advanced AI model for PDF processing</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-database tech-icon"></i>
              <span><strong>Database - Supabase:</strong> PostgreSQL database with real-time capabilities</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-cloud tech-icon"></i>
              <span><strong>Deployment - Vercel:</strong> Fully optimized for Vercel deployment</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Presto

