import ProjectPage from './ProjectPage'

function PongAI() {
  return (
    <ProjectPage
      title="Pong AI"
      summary="A Pong opponent that learned to play through a genetic algorithm, with no labeled data."
      meta="Python / PyTorch / Pygame / Flask-SocketIO"
      links={[
        ['Play it', 'https://neural-net-pong-ai.onrender.com'],
        ['GitHub', 'https://github.com/dpshah1/neural-net-pong-ai'],
      ]}
    >
      <h2>The network</h2>
      <p>
        Each player is a small PyTorch network called PongNet: 10 normalized inputs, two hidden layers of 64,
        and one output between -1 and 1 for how to move the paddle. Inputs are mirrored so one network can play
        either side, and normalized so it keeps working as the ball speeds up.
      </p>

      <h2>How it evolves</h2>
      <p>
        A population of 50 networks plays matches every generation. The strongest survive through elite and
        tournament selection, breed with uniform crossover at a 70% rate, and mutate. A Hall of Fame keeps the
        50 best models ever seen around as tougher opponents.
      </p>
      <p>
        Opponents get harder over time. Generations 1 to 20 mostly play a teacher, 21 to 50 play a mix of the
        teacher and the population, and from 51 on they play the population and the Hall of Fame.
      </p>

      <h2>Scoring</h2>
      <p>Fitness rewards active play and penalizes passive strategies like idling or camping at an edge.</p>
      <dl className="pairs">
        <dt>+75</dt><dd>Point scored</dd>
        <dt>+30</dt><dd>Successful return</dd>
        <dt>+20</dt><dd>Ball hit</dd>
        <dt>−0.1</dt><dd>Each idle frame</dd>
        <dt>−100 ×</dt><dd>Mean distance from the ball while it’s approaching</dd>
        <dt>−150</dt><dd>Missed ball</dd>
        <dt>−200 ×</dt><dd>Low movement variance</dd>
        <dt>−300</dt><dd>Never hits the ball at all</dd>
      </dl>

      <h2>Results</h2>
      <p>
        After 300+ generations, the final model returns shots reliably, gets into position before the ball
        arrives, and keeps up as the ball speeds up to 3x. It’s a real opponent for a person.
      </p>

      <h2>The game</h2>
      <p>
        The Pygame engine runs at 60 FPS with angle-based bounces and a speed multiplier that grows with every
        hit, up to 3x. There are three modes: two players, human vs AI, and a headless mode for training. The web
        version draws on an HTML5 canvas, talks to a Flask-SocketIO server for real-time multiplayer, and is
        hosted on Render.
      </p>
    </ProjectPage>
  )
}

export default PongAI
