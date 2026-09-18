import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import './Home.css'

const sections = ['about', 'experience', 'involvement', 'projects']

const jobs = [
  {
    role: 'AI Engineer Intern',
    org: 'Chipchop',
    logo: 'chipchop.png',
    when: 'May – Jul 2026',
    points: [
      'Worked on Chipchop’s agent for debugging FPGA/RTL code. Redesigned how it reasons and recovers from errors, and made its output strictly formatted and tolerant of model failures, so runs on the test suite are reproducible.',
      'Raised the agent’s target-fix rate from 12% to 96% with guardrails that make every code edit give a reason tied to the user’s request, and by replacing flaky error checks with one signal we trust: the compiler.',
    ],
    tags: ['AI agents', 'FPGA', 'RTL', 'Guardrails'],
  },
  {
    role: 'AI.Accelerate Bootcamp',
    org: 'ServiceNow',
    logo: 'servicenow.png',
    when: 'Jun – Aug 2026',
    points: [
      'Built a chat agent that answers reimbursement-policy questions and submits, routes and approves expense claims in a single conversation, using a 7-tool agent loop with per-thread memory.',
      'Wrote a 20-case LLM-judge eval suite for faithfulness, tool-call correctness and clarification handling. It caught ungrounded answers and wrong tool calls that manual testing missed. Scores ranged from 4.7 to 4.85 out of 5.',
      'Placed 1st in the company security challenge.',
    ],
    tags: ['Tool calling', 'RAG', 'LLM evals'],
  },
  {
    role: 'Computer Vision and Cloud Infrastructure Intern',
    org: 'Anchor Logics',
    logo: 'anchor-logics.png',
    when: 'May – Aug 2025',
    points: [
      'Built a pipeline with OpenPose, YOLOv12, DeepSORT and OpenCV that measures stride length, cadence and step height from patient videos.',
      'Shipped the platform on AWS (EC2, S3) with FastAPI and React. Patients film themselves walking at home and get feedback back, which cut manual analysis time by 80%.',
    ],
    tags: ['OpenCV', 'YOLOv12', 'AWS', 'FastAPI', 'React'],
  },
]

const involvement = [
  {
    role: 'Junior Mentor',
    org: 'Computer Science Mentors',
    logo: 'csm.png',
    when: 'Fall 2026',
    points: [
      'Teach a weekly discussion section of 5 students in CS 61C (Computer Architecture), covering C, RISC-V assembly, caches, pipelining and parallelism.',
      'Run each section as a short lecture plus worksheet problems, and rework the pace around whatever the group is actually stuck on.',
      'Meet weekly with the other mentors to practice teaching and trade feedback on what worked in section.',
    ],
    tags: ['Teaching', 'CS 61C', 'RISC-V'],
  },
  {
    role: 'Product Manager',
    org: 'Web Development at Berkeley',
    logo: 'wdb.png',
    when: 'Jan 2025 – Present',
    points: [
      'Lead a team of 12 engineers and designers across two client projects, from gathering requirements to production.',
      'ProductPals: a new RAG-based tech stack recommendation engine on Pinecone, DynamoDB, S3 and Next.js.',
      'A community platform for the clothing brand CKTH, with local recommendations and rewards tied to purchases.',
    ],
    tags: ['Product', 'Pinecone', 'DynamoDB', 'Next.js'],
  },
]

const projects = [
  {
    title: 'TickerLab',
    description: 'Describe a trading strategy in plain English and Claude turns it into code, then backtests it on Yahoo Finance data against buy-and-hold and the S&P 500 across 10+ metrics like CAGR, Sharpe and drawdown.',
    tags: ['Next.js', 'Claude API', 'Recharts'],
  },
  {
    title: 'Moods and Metrics',
    link: '/moods-metrics',
    note: 'Otsuka Valuenex Award, TreeHacks 2025',
    description: 'Estimates stress from someone’s voice, face and words, then plots it in 2D and 3D.',
    tags: ['React', 'FastAPI', 'wav2vec2', 'Gemini'],
  },
  {
    title: 'Netra AI',
    link: '/netra-ai',
    note: 'Cal Hacks 11.0',
    description: 'Ask a security camera “did someone come to my house?” instead of scrubbing through footage.',
    tags: ['Python', 'Reflex', 'OpenCV', 'Gemini'],
  },
  {
    title: 'Presto',
    link: '/presto',
    description: 'Upload a restaurant’s PDF menu and get a chat agent that knows every item, price and allergen, and can take orders.',
    tags: ['Next.js', 'Supabase', 'Gemini'],
  },
  {
    title: 'Pong AI',
    link: '/pong-ai',
    description: 'A Pong opponent evolved with a genetic algorithm: 50 small PyTorch networks, 300+ generations, no labeled data. Playable in the browser.',
    tags: ['PyTorch', 'Pygame', 'Flask'],
  },
  {
    title: 'Speech Trainer',
    link: '/speech-trainer',
    note: '2nd place, Alameda County Science and Engineering Fair',
    description: 'Scores a video of you presenting on six things like posture, filler words and clarity, using a model trained on 200+ speeches, then writes you a feedback report.',
    tags: ['Python', 'OpenCV', 'scikit-learn'],
  },
  {
    title: 'Smart Parking',
    link: '/smart-parking',
    description: 'Finds open street parking by reading numbered stalls from overhead photos with OCR. Prototyped with a webcam on a sliding beam over a tabletop street.',
    tags: ['Python', 'OCR', 'Flask'],
  },
]

// Font Awesome Free 6.5.2 icons, CC BY 4.0 (https://fontawesome.com/license/free)
const socials = [
  ['GitHub', 'https://github.com/dpshah1', '0 0 496 512', 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z'],
  ['LinkedIn', 'https://www.linkedin.com/in/dhruv-shah-489668263', '0 0 448 512', 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'],
  ['Email', 'mailto:dhruvshah5@berkeley.edu', '0 0 512 512', 'M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z'],
]

// HashRouter owns the URL hash, so in-page links scroll by hand instead of setting #id.
const jump = (e) => {
  e.preventDefault()
  document.getElementById(e.currentTarget.hash.slice(1))?.scrollIntoView()
}

const Tags = ({ tags }) => (
  <ul className="tags">
    {tags.map((tag) => <li key={tag}>{tag}</li>)}
  </ul>
)

function Home() {
  const [active, setActive] = useState('about')
  const spotlight = useRef(null)

  useEffect(() => {
    // A section counts as active once it crosses the band just above the middle of the screen.
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-35% 0px -60% 0px' }
    )
    sections.forEach((id) => observer.observe(document.getElementById(id)))

    const move = (e) => {
      spotlight.current.style.setProperty('--x', `${e.clientX}px`)
      spotlight.current.style.setProperty('--y', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', move)

    return () => {
      observer.disconnect()
      window.removeEventListener('pointermove', move)
    }
  }, [])

  return (
    <>
      <div className="spotlight" ref={spotlight} />
      <div className="shell">
        <header className="intro">
          <div>
            <h1><Link to="/">Dhruv Shah</Link></h1>
            <h2>EECS student at UC Berkeley</h2>
            <nav className="toc" aria-label="Sections">
              <ul>
                {sections.map((id) => (
                  <li key={id}>
                    <a href={`#${id}`} onClick={jump} className={active === id ? 'active' : undefined}>
                      <span className="line" />
                      {id}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <ul className="social">
            {socials.map(([label, href, viewBox, d]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                  <svg viewBox={viewBox} aria-hidden="true"><path d={d} /></svg>
                </a>
              </li>
            ))}
            <li><ThemeToggle /></li>
          </ul>
        </header>

        <main className="content">
          <section id="about" className="about">
            <h2 className="section-label">About</h2>
            <p>
              Hey! I’m Dhruv, a third-year EECS student at UC Berkeley. My main interests are AI agents
              and machine learning, systems (databases, OS, networking), full-stack development, and
              product management.
            </p>
            <p>
              This summer I was an AI engineer intern at <strong>Chipchop</strong>, where I improved the
              reliability of a Verilog/SystemVerilog debugging agent. I also went
              through <strong>ServiceNow’s AI.Accelerate bootcamp</strong>, building an
              expense-claims agent and the eval suite that tests it. Before that I built gait analysis at <strong>Anchor Logics</strong>,
              and I’m a product manager at <strong>Web Development at Berkeley</strong>. More details about my
              experience and projects below.
            </p>
            <p>Feel free to reach out.</p>
          </section>

          <section id="experience">
            <h2 className="section-label">Experience</h2>
            <ol className="cards">
              {jobs.map((job) => (
                <li key={job.org} className="card">
                  <div className="aside">
                    <p className="when">{job.when}</p>
                    <img className="logo" src={`${import.meta.env.BASE_URL}logos/${job.logo}`} alt={`${job.org} logo`} width="56" height="56" loading="lazy" />
                  </div>
                  <div>
                    <h3>{job.role} · <span>{job.org}</span></h3>
                    <ul className="points">
                      {job.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                    <Tags tags={job.tags} />
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="involvement">
            <h2 className="section-label">Campus involvement</h2>
            <ol className="cards">
              {involvement.map((job) => (
                <li key={job.org} className="card">
                  <div className="aside">
                    <p className="when">{job.when}</p>
                    <img className="logo" src={`${import.meta.env.BASE_URL}logos/${job.logo}`} alt={`${job.org} logo`} width="56" height="56" loading="lazy" />
                  </div>
                  <div>
                    <h3>{job.role} · <span>{job.org}</span></h3>
                    <ul className="points">
                      {job.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                    <Tags tags={job.tags} />
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="projects">
            <h2 className="section-label">Projects</h2>
            <ul className="cards">
              {projects.map((project) => (
                <li key={project.title} className="card project-card">
                  <div>
                    <h3>
                      {project.link ? (
                        <Link to={project.link}>{project.title}<span className="arrow" aria-hidden="true">↗</span></Link>
                      ) : project.title}
                    </h3>
                    {project.note && <p className="note">{project.note}</p>}
                    <p className="description">{project.description}</p>
                    <Tags tags={project.tags} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  )
}

export default Home
