// CreativeRetreatPage.jsx
import "./CreativeRetreatPage.css";
import bannerImg from "../../assets/art/art8.jpg";
import img1 from "../../assets/art/art1.JPG";
import img2 from "../../assets/art/art2.jpg";
import img3 from "../../assets/art/art3.JPG";
import img4 from "../../assets/art/art4.JPG";
import img5 from "../../assets/art/art5.JPEG";
import img6 from "../../assets/art/art6.jpg";
import img7 from "../../assets/art/art7.jpg";

const CreativeRetreatPage = () => {
  return (
    <div className="creative-page">
      <section
        className="creative-banner d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="creative-banner-overlay text-center text-white">
          <h1 className="display-4 fw-bold">🌿 Creative Soul Retreat</h1>
          <p className="creative-tagline">Express. Reflect. Reconnect.</p>
        </div>
      </section>

      <section className="creative-container py-5">
        <p className="creative-overview text-center mb-4">
          Unleash your inner artist amidst the orchards. The Creative Soul
          Retreat at Aranyaka is a celebration of expression, stillness, and
          joyful creation. Set in tranquil nature, this retreat offers you the
          space, tools, and guidance to reconnect with your creative spark—no
          experience necessary.
        </p>

        <h3 className="creative-heading">🧭 Overview</h3>
        <p>
          This 5-day immersive retreat blends guided art workshops with nature
          walks, meditative sessions, and reflective stillness. Whether you're a
          beginner, hobbyist, or just seeking soul-time, this is a space to
          create without pressure, and connect with yourself through color,
          line, and form.
        </p>
        <p>
          <strong>Who It’s For:</strong>
        </p>
        <ul className="creative-list">
          <li>Artists, dreamers, seekers, and curious beginners</li>
          <li>Anyone looking to slow down and explore their creative voice</li>
          <li>
            Families, solo travelers, and couples looking for a unique
            experience
          </li>
        </ul>

        <img src={img1} className="creative-img my-4" alt="Art workshop" />

        <h3 className="creative-heading">📅 Sample 5-Day Itinerary</h3>
        <div className="table-responsive mb-4">
          <table className="table creative-table text-center">
            <thead>
              <tr>
                <th>Time</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6:30 AM</td>
                <td>Herbal Tea & Silent Morning Walk</td>
              </tr>
              <tr>
                <td>7:30 – 8:30 AM</td>
                <td>Gentle Yoga / Creative Visualization</td>
              </tr>
              <tr>
                <td>9:00 AM</td>
                <td>Farm-to-Table Breakfast</td>
              </tr>
              <tr>
                <td>10:00 – 12:30 PM</td>
                <td>Art Workshop (Medium of the Day)</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>Light Satvik Lunch</td>
              </tr>
              <tr>
                <td>2:30 – 4:30 PM</td>
                <td>Solo Creative Time / Group Mural / Reflection</td>
              </tr>
              <tr>
                <td>5:00 – 6:00 PM</td>
                <td>Nature Sketching / Open Mic / Storytelling</td>
              </tr>
              <tr>
                <td>6:30 PM</td>
                <td>Dinner</td>
              </tr>
              <tr>
                <td>7:30 PM</td>
                <td>Creative Circle / Yog Nidra</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <img src={img5} className="creative-feature-img mb-2" alt="Stay" />
            <h4 className="creative-heading">🌼 Highlights & Inclusions</h4>
            <ul className="creative-list">
              <li>
                Daily workshops in pencil art, mural work, color pen, charcoal
                art
              </li>
              <li>
                Indoor & outdoor creative zones (under trees, by the pool, in
                studio)
              </li>
              <li>All materials provided – just bring your heart</li>
              <li>Led by Nikhil Usare – artist, traveler, and mentor</li>
              <li>Solo & group creation formats for all personality types</li>
              <li>Optional art showcase on final day</li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <img src={img3} className="creative-feature-img mb-2" alt="Stay" />
            <h4 className="creative-heading">🛏️ Stay & Amenities</h4>
            <ul className="creative-list">
              <li>Comfortable double occupancy rooms for inspiration & rest</li>
              <li>
                Use of indoor studio, reflection zones, and open-air lounges
              </li>
              <li>Access to pool, gardens, yoga shala, and reading spaces</li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <img src={img4} className="creative-feature-img mb-2" alt="Food" />
            <h4 className="creative-heading">🍽️ Food & Nourishment</h4>
            <ul className="creative-list">
              <li>Wholesome, seasonal farm-to-table meals</li>
              <li>Herbal teas and snacks during art sessions</li>
              <li>Mindfully crafted food to fuel your creativity</li>
            </ul>
          </div>
        </div>

        <h3 className="creative-heading">💰 Pricing & Inclusions</h3>
        <table className="table creative-table text-center">
          <thead>
            <tr>
              <th></th>
              <th>3D/2N (Single)</th>
              <th>3D/2N (Double)</th>
              <th>7D/6N (Single)</th>
              <th>7D/6N (Double)</th>
              <th>14D/13N (Single)</th>
              <th>14D/13N (Double)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Detox Retreat</td>
              <td>₹20,000</td>
              <td>₹15,000</td>
              <td>₹35,000</td>
              <td>₹30,000</td>
              <td>₹60,000</td>
              <td>₹45,000</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Inclusions:</strong> Stay, meals, and all art sessions; art
          materials and access to creative zones; community events and
          end-of-retreat showcase.
        </p>
        <p>
          <strong>Exclusions:</strong> Travel to/from Aranyaka; optional spa or
          personal coaching sessions.
        </p>

        <img
          src={img7}
          className="create-img my-4 rounded shadow-sm"
          alt="Detox spa"
        />
        <h3 className="creative-heading">📝 How to Book</h3>
        <ul className="creative-list">
          <li>📩 Fill out the Creative Retreat Booking Form</li>
          <li>📞 Call or WhatsApp: +91-9211985960</li>
          <li>📧 Email: enquiry@aranyakafarmstay.com</li>
        </ul>

        <h3 className="creative-heading">🙋‍♀️ Is This Retreat for You?</h3>
        <ul className="creative-list">
          <li>You crave creative expression but don’t know where to start</li>
          <li>You’re burnt out and looking for soulful play</li>
          <li>You want to write, paint, draw, or simply make something real</li>
          <li>
            You’d love to explore art in community, without pressure or
            performance
          </li>
        </ul>

        <img src={img6} className="creative-img my-4" alt="Creative sessions" />

        <h3 className="creative-heading">🎨 Workshop Fees (Individual)</h3>
        <ul className="creative-list">
          <li>Pencil Art: ₹2,000 (5 Days), ₹4,000 (10 Days)</li>
          <li>Color Pen Art: ₹2,500 (5 Days), ₹5,000 (10 Days)</li>
          <li>Mural Art: ₹3,000 (5 Days), ₹6,000 (10 Days)</li>
          <li>Charcoal Art: ₹2,500 (5 Days), ₹5,000 (10 Days)</li>
        </ul>
        <p>
          <em>🎨 Flexible scheduling available</em>
        </p>

        <div className="text-center mt-4">
          <h4 className="creative-cta mb-3">
            🎨 Ready to Create From the Soul?
          </h4>
          <button className="btn btn-gold m-2">Book Now</button>
          <button className="btn btn-outline-gold m-2">
            View More Retreats
          </button>
          <button className="btn btn-outline-gold m-2">Meet the Artist</button>
        </div>

        <img src={img2} className="creative-img my-4" alt="Gallery" />
      </section>
    </div>
  );
};

export default CreativeRetreatPage;
