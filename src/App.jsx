import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SmartParking from './components/SmartParking'
import SpeechTrainer from './components/SpeechTrainer'
import Presto from './components/Presto'
import NetraAI from './components/NetraAI'
import MoodsMetrics from './components/MoodsMetrics'
import PongAI from './components/PongAI'
import ThreeBackground from './components/ThreeBackground'

function App() {
  return (
    <>
      <ThreeBackground />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/smart-parking" element={<SmartParking />} />
          <Route path="/speech-trainer" element={<SpeechTrainer />} />
          <Route path="/presto" element={<Presto />} />
          <Route path="/netra-ai" element={<NetraAI />} />
          <Route path="/moods-metrics" element={<MoodsMetrics />} />
          <Route path="/pong-ai" element={<PongAI />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

