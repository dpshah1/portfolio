import ProjectPage from './ProjectPage'

function Presto() {
  return (
    <ProjectPage
      title="Presto"
      summary="Turns a restaurant’s PDF menu into a chat agent that answers questions and takes orders."
      meta="Next.js / Supabase / Gemini / Vercel"
      links={[
        ['Live demo', 'https://drive-thru-ai.vercel.app'],
        ['GitHub', 'https://github.com/dpshah1/drive-thru-ai'],
      ]}
    >
      <h2>The idea</h2>
      <p>
        Most restaurant menus live as PDFs. That makes simple questions like “what here is nut-free?” hard to
        answer, and it means someone at the restaurant has to type the menu in by hand before any online
        ordering can happen. Presto reads the PDF for them.
      </p>

      <h2>How it works</h2>
      <p>
        A restaurant signs up with its name, location and one or more PDF menus. The PDFs go to Google Gemini,
        which pulls out every item with its price, ingredients, nutrition facts and allergens, and stores them
        in Supabase.
      </p>
      <p>
        Each restaurant then gets its own agent. Customers can browse the menu, ask what’s in a dish, get
        suggestions that fit a dietary restriction, and place an order.
      </p>

      <h2>Stack</h2>
      <dl className="pairs">
        <dt>Next.js 15</dt><dd>App Router frontend, API routes for uploads and processing</dd>
        <dt>Tailwind CSS</dt><dd>Styling</dd>
        <dt>Google Gemini</dt><dd>Reading the PDF menus</dd>
        <dt>Supabase</dt><dd>Postgres for restaurants and menu items</dd>
        <dt>Vercel</dt><dd>Hosting</dd>
      </dl>
    </ProjectPage>
  )
}

export default Presto
