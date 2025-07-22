import "./YogaRetreatPage.css";
import bannerImg from "../../assets/retreat/yoga/Yogameditation1.jpg";
import img1 from "../../assets/retreat/yoga/yogameditation2.jpg";
import img2 from "../../assets/retreat/yoga/yogameditation3.jpg";
import img3 from "../../assets/retreat/yoga/yogameditation4.jpg";
import img4 from "../../assets/retreat/yoga/yogameditation5.jpg";
import img5 from "../../assets/retreat/yoga/yogameditation6.jpg";
import img7 from "../../assets/retreat/yoga/yogameditation8.jpg";

const YogaRetreatPage = () => {
  return (
    <div className="yoga-page">
      {/* Banner */}
      <section
        className="yoga-banner d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="yoga-banner-overlay text-center text-white">
          <h1 className="display-4 fw-bold">
            🧘‍♀️ Yoga & Meditation Retreat at Aranyaka
          </h1>
          <p className="yoga-tagline">
            Breathe. Move. Be Still. Return to You.
          </p>
        </div>
      </section>

      <section className="yoga-container py-5">
        {/* Intro */}
        <p className="yoga-overview text-center mb-4">
          Step away from the noise of the world and immerse yourself in a
          sanctuary of stillness, movement, and mindful breath. The Yoga &
          Meditation Retreat at Aranyaka is designed for anyone seeking to reset
          their inner compass and reconnect with their natural rhythm—through
          intentional practices rooted in ancient wisdom and guided presence.
          <br />
          Nestled among 36 acres of lush orchards in Ranipokhri, this retreat is
          an invitation to realign your body, calm your mind, and soften into a
          deeper awareness of self.
        </p>

        {/* Daily Schedule */}
        <h3 className="yoga-heading">📅 How your day will look like</h3>
        <div className="table-responsive mb-5">
          <table className="table yoga-table text-center">
            <thead>
              <tr>
                <th>Time</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6:00 AM</td>
                <td>Havan (Fire Ceremony) & Herbal Tea</td>
              </tr>
              <tr>
                <td>6:30 – 8:00 AM</td>
                <td>Morning Yoga (Hatha + Pranayama)</td>
              </tr>
              <tr>
                <td>8:30 AM</td>
                <td>Farm-to-Table Breakfast</td>
              </tr>
              <tr>
                <td>10:00 – 12:00 PM</td>
                <td>Guided Meditation & Group Reflection</td>
              </tr>
              <tr>
                <td>12:30 PM</td>
                <td>Satvik Lunch</td>
              </tr>
              <tr>
                <td>2:00 – 4:00 PM</td>
                <td>Free Time / Spa / Journaling</td>
              </tr>
              <tr>
                <td>4:30 – 5:30 PM</td>
                <td>Evening Yoga (Restorative/Yin)</td>
              </tr>
              <tr>
                <td>6:00 PM</td>
                <td>Light Dinner</td>
              </tr>
              <tr>
                <td>7:00 PM</td>
                <td>Yog Nidra / Silent Sitting</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          <em>
            Note: Days also include opportunities for seva (voluntary service),
            mindful walks, and quiet time in the garden or orchard.
          </em>
        </p>

        {/* Highlights */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src={img4}
              className="yoga-feature-img rounded shadow-sm mb-2"
              alt="Highlights"
            />
            <YogaSection
              title="🌼 Unique Features & Highlights"
              list={[
                "Daily yoga sessions tailored to all levels (Hatha, Yin, and gentle flow)",
                "Pranayama and meditation techniques for inner clarity",
                "Morning Havan (Vedic fire ritual) to set spiritual intention",
                "Guided seva (service) for grounding and connection",
                "Access to healing therapies and Ayurvedic massages",
                "Journaling prompts, reflective practices, and personal check-ins",
                "End-of-day Yog Nidra for deep rest and subconscious release",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src={img5}
              className="yoga-feature-img rounded shadow-sm mb-2"
              alt="Stay"
            />
            <YogaSection
              title="🛏️ Accommodation & Amenities"
              list={[
                "Private or shared double occupancy rooms",
                "Use of heated swimming pool, pickleball court, and yoga shala",
                "All-natural organic bath products",
                "Peaceful indoor spaces for reading, games, and conversation",
                "Spa therapies available on request",
                "Herbal tea, filtered water, and light snacks throughout the day",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src={img3}
              className="yoga-feature-img rounded shadow-sm mb-2"
              alt="Food"
            />
            <YogaSection
              title="🍽️ Food & Nourishment"
              list={[
                "All meals are seasonal, vegetarian, and farm-to-table",
                "Inspired by Ayurvedic principles and regional ingredients",
                "Gluten-free, vegan, and detox-friendly options available",
                "Meals served mindfully in a community setting",
              ]}
            />
          </div>
        </div>

        {/* Pricing */}
        <h3 className="yoga-heading mt-5">💰 Pricing & Inclusions</h3>
        <div className="table-responsive mb-4">
          <table className="table yoga-table text-center">
            <thead>
              <tr>
                <th>Retreat Programme</th>
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
                <td>Yoga and Meditation</td>
                <td>₹20,000</td>
                <td>₹15,000</td>
                <td>₹35,000</td>
                <td>₹30,000</td>
                <td>₹60,000</td>
                <td>₹45,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Inclusions:</strong> Accommodation, all meals and teas, yoga &
          meditation sessions, evening activities, community seva, and access to
          all common spaces.
        </p>
        <p>
          <strong>Exclusions:</strong> Spa treatments (booked separately),
          travel to and from the farmstay.
        </p>

        {/* Booking */}
        <h3 className="yoga-heading">📝 How to Book</h3>
        <ul className="yoga-list mb-4">
          <li>📩 Fill out the Retreat Booking Form</li>
          <li>📞 Call or WhatsApp us at +91-XXXXXXX</li>
          <li>💬 Speak to our Retreat Coordinator to help you choose</li>
        </ul>
        <p className="mb-4">
          <em>
            Limited spots per retreat to ensure personal attention and
            spaciousness.
          </em>
        </p>

        {/* Is This Retreat For You */}
        <h3 className="yoga-heading">🙋‍♀️ Is This Retreat for You?</h3>
        <ul className="yoga-list mb-5">
          <li>You’re feeling burnt out, scattered, or emotionally tired</li>
          <li>You want to deepen your yoga and meditation practice</li>
          <li>You long for a pause—to simply breathe, move, and be</li>
          <li>
            You crave authentic connection and a rhythm that feels natural
          </li>
        </ul>

        {/* FAQ */}
        <h3 className="yoga-heading">❓ FAQ</h3>
        <ul className="yoga-list mb-5">
          <li>
            <strong>Do I need to be experienced in yoga or meditation?</strong>{" "}
            No. All levels are welcome. Practices are gentle and adaptable.
          </li>
          <li>
            <strong>Is Wi-Fi available?</strong> Yes, though we encourage a
            digital detox for deeper presence.
          </li>
          <li>
            <strong>Can I come solo?</strong> Absolutely. Many participants come
            alone—and often leave with new connections.
          </li>
        </ul>

        {/* Gallery */}
        <h3 className="yoga-heading">📸 Gallery</h3>
        <div className="row mb-4">
          <div className="col-md-4 mb-2">
            <img
              src={img2}
              className="yoga-feature-img rounded shadow-sm"
              alt="Gallery"
            />
          </div>
          <div className="col-md-4 mb-2">
            <img
              src={img7}
              className="yoga-feature-img rounded shadow-sm"
              alt="Meditation nook"
            />
          </div>
          <div className="col-md-4 mb-2">
            <img
              src={img1}
              className="yoga-feature-img rounded shadow-sm"
              alt="Peaceful retreat"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-4">
          <h4 className="yoga-cta mb-3">🌿 Ready to Begin?</h4>
          <button className="btn btn-gold m-2">Book Your Retreat</button>
          <button className="btn btn-outline-gold m-2">Chat with Us</button>
          <button className="btn btn-outline-gold m-2">
            Explore More Retreats
          </button>
        </div>
      </section>
    </div>
  );
};

const YogaSection = ({ title, list }) => (
  <>
    <h4 className="yoga-heading">{title}</h4>
    <ul className="yoga-list mb-4">
      {list.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </>
);

export default YogaRetreatPage;
