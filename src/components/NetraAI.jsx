import ProjectPage from './ProjectPage'

function NetraAI() {
  return (
    <ProjectPage
      title="Netra AI"
      summary="Ask your security camera what happened instead of scrubbing through hours of footage."
      meta="Cal Hacks 11.0 / Python / Reflex / Gemini"
      links={[
        ['Devpost', 'https://devpost.com/software/netra-ai'],
        ['GitHub', 'https://github.com/Vaddala06/calhacks'],
      ]}
    >
      <h2>Why we built it</h2>
      <p>
        The idea came from a real theft in front of a family member’s house. Finding the moment it happened
        meant watching hours of video. We wanted to just ask.
      </p>

      <h2>How it works</h2>
      <p>
        OpenCV watches the stream and saves a 5-second clip whenever it sees motion. Gemini writes a
        description of each clip, and those descriptions go into ChromaDB.
      </p>
      <p>
        You type or say a question like “Did someone come to my house?” (speech goes through Deepgram) and
        get an answer drawn from the stored descriptions. Important events also send an alert as they happen.
      </p>

      <h2>Stack</h2>
      <dl className="pairs">
        <dt>Python, Reflex</dt><dd>The whole app, frontend and backend</dd>
        <dt>OpenCV</dt><dd>Motion detection and clip recording</dd>
        <dt>Google Gemini</dt><dd>Describing what happens in each clip</dd>
        <dt>ChromaDB</dt><dd>Storing and searching alerts</dd>
        <dt>Deepgram</dt><dd>Speech to text for spoken questions</dd>
      </dl>

      <h2>What’s next</h2>
      <ul>
        <li>Text message alerts, like “Your daughter has arrived home” or “There is a fire outside your home.”</li>
        <li>Training on footage from more countries and more kinds of people.</li>
        <li>Multi-factor auth and encryption for stored footage.</li>
      </ul>
    </ProjectPage>
  )
}

export default NetraAI
