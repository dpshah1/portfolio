import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './ProjectDetail.css'

const BASE_URL = import.meta.env.BASE_URL || '/portfolio/'

function SmartParking() {
  return (
    <>
      <Navbar showPortfolioLink={true} />
      <section className="project-hero">
        <div className="container">
          <div className="project-icon">
            <i className="fas fa-car"></i>
          </div>
          <h1>Smart Parking</h1>
          <p className="subtitle">Drone-Based Intelligent Parking Detection System</p>
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
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">17</div>
              <div className="stat-label">Hours per year spent looking for parking</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">$1,000</div>
              <div className="stat-label">Average annual cost per driver</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">63%</div>
              <div className="stat-label">Drivers avoid destinations due to parking</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">30%</div>
              <div className="stat-label">Traffic caused by parking searches</div>
            </div>
          </div>

          <p className="content-text">
            Parking challenges have become a significant urban problem affecting millions of drivers daily. 
            A comprehensive study from INRIX collected data from 6,000 drivers across the 10 largest cities in the US, 
            revealing the staggering impact of parking inefficiencies on our daily lives.
          </p>

          <div className="problem-solution-grid">
            <div className="problem-card">
              <h3 className="card-title">Economic Impact</h3>
              <p className="content-text">
                Drivers spend up to $2,000 annually in fuel costs in major cities, with the average driver 
                spending $1,000 per year just looking for parking spots.
              </p>
            </div>
            <div className="problem-card">
              <h3 className="card-title">Environmental Impact</h3>
              <p className="content-text">
                Parking searches generate approximately 730 million vehicle miles traveled annually, 
                creating 47,000 tons of carbon dioxide emissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-search section-icon"></i>
            Current Solutions
          </h2>
          <p className="content-text">
            Some parking garages have sensors over each parking stall to detect availability. However, 
            this approach has high installation and maintenance costs, making it impractical and 
            cost-prohibitive for street parking applications.
          </p>
          
          <div className="image-gallery">
            <div className="gallery-item">
              <img src={`${BASE_URL}current_solution.png`} alt="Current parking sensor solution" className="gallery-image" />
              <div className="gallery-caption">Traditional parking stall sensors - expensive and limited to garages</div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-lightbulb section-icon"></i>
            Our Solution
          </h2>
          <p className="content-text">
            Smart Parking is an innovative drone-based system that takes aerial pictures of city blocks 
            and processes them to identify available parking stalls in real-time. Users can then use a 
            mobile app to find parking near their desired location or reserve parking ahead of time.
          </p>

          <div className="implementation-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-title">Unique Identifiers</div>
                <div className="step-description">Each parking stall is assigned a unique identifier (UID) - either a numeric code, QR code, or barcode.</div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-title">Aerial Imaging</div>
                <div className="step-description">Drones capture aerial images of parking areas at regular intervals.</div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-title">Image Processing</div>
                <div className="step-description">OCR algorithms identify visible UIDs to determine parking availability.</div>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <div className="step-title">Mobile App</div>
                <div className="step-description">Users access real-time parking availability and can reserve spots through a mobile application.</div>
              </div>
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
          
          <div className="technologies-grid">
            <div className="tech-item">
              <i className="fas fa-cube tech-icon"></i>
              <span><strong>Prototype Model:</strong> 20 parking stalls on a city block</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-camera tech-icon"></i>
              <span><strong>Webcam System:</strong> Simulates drone aerial imaging</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-eye tech-icon"></i>
              <span><strong>OCR Technology:</strong> Optical Character Recognition for UID detection</span>
            </div>
            <div className="tech-item">
              <i className="fas fa-globe tech-icon"></i>
              <span><strong>Flask Web App:</strong> Admin interface for system management</span>
            </div>
          </div>

          <div className="image-gallery">
            <div className="gallery-item">
              <img src={`${BASE_URL}smart-parking-flowchart.png`} alt="Smart Parking System Architecture" className="gallery-image" />
              <div className="gallery-caption">System architecture showing the complete flow from image capture to availability display</div>
            </div>
            <div className="gallery-item">
              <img src={`${BASE_URL}img1.jpg`} alt="Webcam setup for parking detection" className="gallery-image" />
              <div className="gallery-caption">Lenovo webcam mounted on a sliding wooden beam to simulate drone movement</div>
            </div>
            <div className="gallery-item">
              <img src={`${BASE_URL}img2.jpg`} alt="Tabletop parking model" className="gallery-image" />
              <div className="gallery-caption">Tabletop model with 20 parking stalls, each with unique two-digit identifiers</div>
            </div>
            <div className="gallery-item">
              <img src={`${BASE_URL}map.png`} alt="Parking availability map" className="gallery-image" />
              <div className="gallery-caption">Admin interface showing real-time parking availability map after image processing</div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-exclamation-circle section-icon"></i>
            Limitations & Challenges
          </h2>
          
          <div className="limitations">
            <div className="limitation-item">
              <i className="fas fa-car limitation-icon"></i>
              <div className="limitation-text">Cars with numbers on the roof can deceive the system into thinking that number is an open parking stall.</div>
            </div>
            <div className="limitation-item">
              <i className="fas fa-user limitation-icon"></i>
              <div className="limitation-text">People can take others' reserved parking spots without consequences.</div>
            </div>
            <div className="limitation-item">
              <i className="fas fa-clock limitation-icon"></i>
              <div className="limitation-text">Pre-programmed drone routes may cause delays in updating availability data for specific areas.</div>
            </div>
            <div className="limitation-item">
              <i className="fas fa-snowflake limitation-icon"></i>
              <div className="limitation-text">Identifiers can be covered by snow or damaged, affecting system reliability.</div>
            </div>
          </div>

          <div className="image-gallery">
            <div className="gallery-item">
              <img src={`${BASE_URL}car-with-number.png`} alt="Car with number on roof" className="gallery-image" />
              <div className="gallery-caption">Example of how cars with numbers on the roof could confuse the system</div>
            </div>
            <div className="gallery-item">
              <img src={`${BASE_URL}car-with-snow.png`} alt="Car covered in snow" className="gallery-image" />
              <div className="gallery-caption">Weather conditions like snow can obscure parking identifiers</div>
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
            <div className="achievement-title">Science Fair Recognition</div>
            <div className="achievement-description">
              Successfully participated in the Alameda County Science and Engineering Fair (ACSEF) 
              with this innovative parking solution project.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SmartParking

