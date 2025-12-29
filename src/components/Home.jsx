import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import './Home.css'

function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    // Intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    document.querySelectorAll('.project-item').forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  const projects = [
    {
      id: 'speech-trainer',
      title: 'Speech Trainer',
      description: 'A machine learning-based application that provides real-time feedback on presentation skills, analyzing posture, filler words, speaking pace, and confidence levels to help users improve their public speaking abilities.',
      icon: 'fas fa-microphone',
      tags: ['Machine Learning', 'Computer Vision', 'OpenCV', 'Python'],
      link: '/speech-trainer'
    },
    {
      id: 'presto',
      title: 'Presto',
      description: 'An AI-powered restaurant customer service platform that revolutionizes ordering by creating intelligent agents that can process PDF menus, extract nutrition information, and provide personalized recommendations using Google Gemini AI.',
      icon: 'fas fa-utensils',
      image: `${import.meta.env.BASE_URL}logo.png`,
      tags: ['Next.js', 'AI/ML', 'Supabase', 'Vercel'],
      link: '/presto'
    },
    {
      id: 'netra-ai',
      title: 'Netra AI',
      description: 'An AI-powered video stream security app that transforms space monitoring with instant event querying and real-time alerts, built for Cal Hacks 11.0 using computer vision and speech recognition.',
      icon: 'fas fa-video',
      tags: ['Python', 'Computer Vision', 'AI/ML', 'Reflex'],
      link: '/netra-ai'
    },
    {
      id: 'smart-parking',
      title: 'Smart Parking',
      description: 'An innovative drone-based parking detection system that uses aerial imagery and OCR to identify available parking spots in real-time, helping reduce traffic congestion and parking-related stress in urban areas.',
      icon: 'fas fa-car',
      tags: ['Computer Vision', 'OCR', 'Flask', 'IoT'],
      link: '/smart-parking'
    },
    {
      id: 'moods-metrics',
      title: 'Moods and Metrics',
      description: 'An AI-powered mental health analysis tool that uses audio, video, and transcription sentiment analysis to help users understand and visualize their emotional states in real-time.',
      icon: 'fas fa-brain',
      tags: ['React', 'Python', 'AI/ML', 'FastAPI'],
      link: '/moods-metrics'
    },
    {
      id: 'pong-ai',
      title: 'Pong Game with Neural Network AI',
      description: 'A Pong implementation featuring an AI opponent trained via genetic algorithm. The AI learns through evolution, playing matches and improving over generations. Includes local gameplay, training system, and web deployment with real-time multiplayer.',
      icon: 'fas fa-gamepad',
      tags: ['Python', 'PyTorch', 'Genetic Algorithm', 'Flask', 'Pygame'],
      link: '/pong-ai'
    }
  ]

  return (
    <>
      <Navbar />
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="fade-in-up">Dhruv Shah</h1>
            <h2 className="fade-in-up delay-1">UC Berkeley EECS</h2>
            <p className="fade-in-up delay-2">
              Hey everyone! I'm Dhruv, I like building full-stack applications and working with AI. Feel free to reach out to me.
            </p>
            <div className="hero-contact fade-in-up delay-3">
              <a href="https://github.com/dpshah1" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/dhruv-shah-489668263" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:dhruvshah5@berkeley.edu" className="contact-link" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <a href="#projects" className="cta-button fade-in-up delay-3">
              View work
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title fade-in-up">Experience</h2>
          
          <div className="experience-card fade-in-up delay-1">
            <div className="experience-header">
              <div className="experience-title">
                <h3>Product Manager</h3>
                <span className="company">Web Development at Berkeley (WDB)</span>
              </div>
              <div className="experience-meta">
                <span className="location">Berkeley, CA</span>
                <span className="duration">Jan 2025 — Present</span>
              </div>
            </div>
            
            <div className="experience-content">
              <ul className="experience-list">
                <li>Led a cross-functional team of 12 developers and designers to build ProductPals, a full-stack AI recommendation system for a startup client, managing the complete product lifecycle from initial requirements gathering to production deployment.</li>
                <li>Built an AI-powered tool recommendation engine using RAG architecture with Pinecone vector database, DynamoDB, S3, and Next.js that analyzes team workflows to suggest optimal productivity tools, reducing software evaluation time for teams.</li>
              </ul>
            </div>
          </div>

          <div className="experience-card fade-in-up delay-1">
            <div className="experience-header">
              <div className="experience-title">
                <h3>Computer Vision & Cloud Infrastructure Intern</h3>
                <span className="company">Anchor Logics</span>
              </div>
              <div className="experience-meta">
                <span className="location">Berkeley, CA</span>
                <span className="duration">May 2025 — September 2025</span>
              </div>
            </div>
            
            <div className="experience-content">
              <ul className="experience-list">
                <li>Developing gait analysis pipeline using OpenPose, YOLOv12, DeepSORT, and OpenCV to extract stride length, cadence, and gait speed metrics.</li>
                <li>Architected AWS infrastructure (EC2, S3) for automated video processing and data storage.</li>
                <li>Built web platform with React and FastAPI enabling patients to upload videos and receive automated gait analysis results.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          
          <div className="projects-list">
            {projects.map((project) => (
              <Link key={project.id} to={project.link} className="project-item">
                <div className="project-icon">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <i className={project.icon}></i>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-arrow">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="social-links">
            <a href="https://github.com/dpshah1" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/dhruv-shah-489668263" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:dhruvshah5@berkeley.edu" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <p>&copy; 2024 Dhruv Shah</p>
        </div>
      </footer>
    </>
  )
}

export default Home

