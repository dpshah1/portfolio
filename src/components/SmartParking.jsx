import ProjectPage, { img } from './ProjectPage'

function SmartParking() {
  return (
    <ProjectPage
      title="Smart Parking"
      summary="A drone reads numbered parking stalls from above to find the open ones."
      meta="Python / OCR / Flask / Alameda County Science and Engineering Fair"
    >
      <h2>The problem</h2>
      <p>
        An INRIX study of 6,000 drivers in the 10 largest US cities found drivers spend about 17 hours a year
        looking for parking, at a cost of around $1,000 each. 63% have skipped going somewhere because of
        parking, and roughly 30% of traffic is people circling for a spot. Those searches add up to about
        730 million extra vehicle miles and 47,000 tons of CO₂ a year.
      </p>
      <p>
        Some garages already solve this with a sensor over every stall. That’s too expensive to install and
        maintain on every street.
      </p>
      <figure>
        <img src={img('current_solution.png')} alt="Parking garage with a sensor light above each stall" />
        <figcaption>Per-stall sensors: they work, but only where someone paid for them.</figcaption>
      </figure>

      <h2>My approach</h2>
      <p>
        Give every stall a unique ID: a number, QR code or barcode. A drone photographs the block on a
        schedule and OCR reads whichever IDs it can see. If you can see the ID, the stall is empty. Drivers
        would check what’s open, or reserve a spot, from an app.
      </p>

      <h2>The prototype</h2>
      <p>
        I built a tabletop city block with 20 stalls, each marked with a two-digit number, and mounted a
        Lenovo webcam on a sliding wooden beam to stand in for the drone. A Flask admin app runs OCR on the
        photos and shows which stalls are open on a map.
      </p>
      <div className="gallery">
        <figure>
          <img src={img('img1.jpg')} alt="Webcam mounted on a wooden beam above the model" />
          <figcaption>The “drone”: a webcam on a sliding beam.</figcaption>
        </figure>
        <figure>
          <img src={img('img2.jpg')} alt="Tabletop model street with 20 numbered parking stalls" />
          <figcaption>20 stalls, each with a two-digit ID.</figcaption>
        </figure>
        <figure>
          <img src={img('smart-parking-flowchart.png')} alt="Flowchart from image capture to availability map" />
          <figcaption>From photo to availability.</figcaption>
        </figure>
        <figure>
          <img src={img('map.png')} alt="Admin map showing open and taken stalls" />
          <figcaption>The admin map after processing.</figcaption>
        </figure>
      </div>

      <h2>What breaks it</h2>
      <ul>
        <li>A car with a number on its roof looks like an open stall.</li>
        <li>Snow or wear can cover an ID.</li>
        <li>Nothing stops someone from parking in a spot another driver reserved.</li>
        <li>Fixed drone routes mean some blocks update slowly.</li>
      </ul>
      <div className="gallery">
        <figure>
          <img src={img('car-with-number.png')} alt="Car with a large number painted on its roof" />
          <figcaption>This car would read as an open stall.</figcaption>
        </figure>
        <figure>
          <img src={img('car-with-snow.png')} alt="Snow-covered parked car" />
          <figcaption>Snow hides the IDs.</figcaption>
        </figure>
      </div>
    </ProjectPage>
  )
}

export default SmartParking
