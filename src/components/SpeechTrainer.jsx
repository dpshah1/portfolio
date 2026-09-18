import ProjectPage, { img } from './ProjectPage'

function SpeechTrainer() {
  return (
    <ProjectPage
      title="Speech Trainer"
      summary="Upload a video of yourself presenting and get a score on the things that make a talk work."
      meta="Second place, Alameda County Science and Engineering Fair"
    >
      <h2>Why</h2>
      <p>
        About 74% of people are afraid of public speaking, and the usual fix is practicing in front of
        someone who can give you feedback. I wanted to know whether a computer could give that feedback
        on its own.
      </p>

      <h2>What it measures</h2>
      <p>I watched a lot of TED talks and settled on six qualities that separated good delivery from bad:</p>
      <ul>
        <li>Posture, from facial landmark tracking</li>
        <li>Filler words like “um”, “like” and “basically”</li>
        <li>Talking speed in words per minute</li>
        <li>How clearly words are pronounced</li>
        <li>How long and how often you pause</li>
        <li>Overall confidence</li>
      </ul>

      <h2>How I built it</h2>
      <p>
        I wrote a Python function for each quality, using OpenCV for the video and a speech recognition model
        for the audio. Then I ran 200+ speeches from TED and other well-known speakers through them and trained
        a scikit-learn model to score a presentation on each metric. A web app runs your upload through the
        same pipeline.
      </p>
      <p>
        It also gives you speaking prompts to practice with, and writes an AI feedback report on both how you
        delivered the talk and what you said.
      </p>
      <figure>
        <img src={img('speech-trainer-flowchart.png')} alt="Flowchart from video input through the six analyzers to a final score" />
        <figcaption>Video in, six scores out.</figcaption>
      </figure>

      <h2>Stack</h2>
      <dl className="pairs">
        <dt>OpenCV</dt><dd>Facial landmarks for posture</dd>
        <dt>Speech recognition</dt><dd>Transcripts for filler words and pace</dd>
        <dt>scikit-learn</dt><dd>The scoring model</dd>
        <dt>Pandas, Jupyter, Seaborn</dt><dd>Exploring the data and plotting it</dd>
        <dt>PostgreSQL, psycopg2</dt><dd>Storing clips and scores</dd>
      </dl>
    </ProjectPage>
  )
}

export default SpeechTrainer
