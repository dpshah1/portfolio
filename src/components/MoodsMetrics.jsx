import ProjectPage from './ProjectPage'

function MoodsMetrics() {
  return (
    <ProjectPage
      title="Moods and Metrics"
      summary="Estimates how stressed someone is from their voice, face and words, then plots it."
      meta="TreeHacks 2025 / Winner, Otsuka Valuenex Award"
      links={[
        ['Devpost', 'https://devpost.com/software/moodmap-ai'],
        ['GitHub', 'https://github.com/corey-shen/stress-level-audio-analysis'],
      ]}
    >
      <h2>The idea</h2>
      <p>
        Most mental health tracking is self-reported, and people aren’t great at judging their own stress.
        We wanted a second opinion built from signals that are harder to talk yourself out of.
      </p>

      <h2>What it listens to</h2>
      <dl className="pairs">
        <dt>Voice</dt>
        <dd>A fine-tuned wav2vec2 model outputs arousal, valence and dominance, which we map to a stress score.</dd>
        <dt>Face</dt>
        <dd>Video clips go to Gemini, which rates calm versus stress from facial expression and explains its reasoning.</dd>
        <dt>Words</dt>
        <dd>Sentiment analysis on the transcript of what was said.</dd>
      </dl>
      <p>
        Results are placed on the three axes of core affect (valence, arousal, dominance) and drawn in 2D with
        D3 and in 3D with three.js.
      </p>

      <h2>Stack</h2>
      <p>
        React and Tailwind on the frontend, FastAPI in Python on the backend, the audio model from Hugging Face
        running in PyTorch, and Gemini for video.
      </p>

      <h2>What’s next</h2>
      <ul>
        <li>Heart rate and EKG as more inputs.</li>
        <li>Our own model trained on breathing audio, so stress tracking can run locally.</li>
        <li>Live video instead of pre-recorded clips.</li>
        <li>Stress-relief suggestions based on someone’s patterns.</li>
        <li>A mobile app with everything processed on the device.</li>
      </ul>
    </ProjectPage>
  )
}

export default MoodsMetrics
