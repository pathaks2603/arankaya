import "./PainManagementRetreatPage.css";
import bannerImg from "../../assets/retreat/pain/painmanage1.jpg";
import img1 from "../../assets/retreat/pain/painmanage2.jpg";
import img2 from "../../assets/retreat/pain/painmanage3.jpg";
import img3 from "../../assets/retreat/pain/painmanage4.jpg";
import img4 from "../../assets/retreat/pain/painmanage5.jpg";
import img5 from "../../assets/retreat/pain/painmanage6.jpg";
import img6 from "../../assets/retreat/pain/painmanage7.jpg";
import img7 from "../../assets/retreat/pain/painmanage8.jpg";

const PainManagementRetreatPage = () => {
  return (
    <div className="pain-page">
      {/* Banner */}
      <section
        className="pain-banner d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="pain-banner-overlay text-center text-white">
          <h1 className="display-4 fw-bold">💆‍♀️ Pain Management Retreat</h1>
          <p className="pain-tagline">Ease. Restore. Move Freely.</p>
        </div>
      </section>

      <section className="pain-container py-5">
        {/* Intro */}
        <p className="pain-overview text-center mb-4">
          Release discomfort, rebuild strength, and return to ease. The Pain
          Management Retreat at Aranyaka is a gentle yet powerful 5-day healing
          experience designed for individuals dealing with chronic pain,
          fatigue, joint stiffness, or postural imbalances. Surrounded by the
          nurturing energy of nature, guests are supported through personalized
          therapies and mindful movement.
        </p>

        {/* Overview */}
        <h3 className="pain-heading">🧭 Overview</h3>
        <p>
          This retreat blends Ayurvedic wisdom, movement therapy, and somatic
          awareness to offer relief and long-term strategies for pain
          management. Whether you're healing from injury, dealing with lifestyle
          stress, or seeking holistic support, our team provides care rooted in
          compassion and knowledge.
        </p>
        <p>
          <strong>Who It’s For:</strong>
        </p>
        <ul className="pain-list">
          <li>Individuals with chronic pain, arthritis, or muscular tension</li>
          <li>Those recovering from injuries or burnout</li>
          <li>Anyone seeking a restful, therapeutic reset</li>
        </ul>

        <img
          src={img1}
          className="pain-img my-4 rounded shadow-sm"
          alt="Healing therapy"
        />

        {/* Daily Schedule */}
        <h3 className="pain-heading">📅 Sample 5-Day Itinerary</h3>
        <div className="table-responsive mb-4">
          <table className="table pain-table text-center">
            <thead>
              <tr>
                <th>Time</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6:30 AM</td>
                <td>Herbal Pain-Relief Tea & Gentle Morning Walk</td>
              </tr>
              <tr>
                <td>7:30 – 8:30 AM</td>
                <td>Therapeutic Yoga & Joint Mobility</td>
              </tr>
              <tr>
                <td>9:00 AM</td>
                <td>Nourishing Satvik Breakfast</td>
              </tr>
              <tr>
                <td>10:00 – 12:00 PM</td>
                <td>Personal Therapy (Abhyanga, Kizhi, Steam)</td>
              </tr>
              <tr>
                <td>12:30 PM</td>
                <td>Warm, anti-inflammatory lunch</td>
              </tr>
              <tr>
                <td>2:00 – 4:00 PM</td>
                <td>Rest / Massage / Herbal Packs</td>
              </tr>
              <tr>
                <td>4:30 – 5:30 PM</td>
                <td>Movement Awareness or Somatic Stretch</td>
              </tr>
              <tr>
                <td>6:30 PM</td>
                <td>Light Dinner & Digestive Tea</td>
              </tr>
              <tr>
                <td>7:30 PM</td>
                <td>Yog Nidra or Guided Relaxation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <img
          src={img5}
          className="pain-img my-4 rounded shadow-sm"
          alt="Yoga session"
        />

        {/* Highlights images */}
        <div className="row mb-3">
          <div className="col-md-4 mb-2">
            <img
              src={img2}
              className="pain-feature-img rounded shadow-sm"
              alt="Highlights"
            />
          </div>
          <div className="col-md-4 mb-2">
            <img
              src={img4}
              className="pain-feature-img rounded shadow-sm"
              alt="Stay"
            />
          </div>
          <div className="col-md-4 mb-2">
            <img
              src={img3}
              className="pain-feature-img rounded shadow-sm"
              alt="Food"
            />
          </div>
        </div>

        {/* Highlights text */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <PainSection
              title="🌼 Highlights & Inclusions"
              list={[
                "Individual pain & posture assessment",
                "Ayurvedic treatments: Abhyanga, Kizhi, herbal steam",
                "Gentle movement therapy & therapeutic yoga",
                "Guided breathwork, Yog Nidra, and meditative walks",
                "Herbal compresses, foot soaks, and topical remedies",
                "Anti-inflammatory meals & teas curated for healing",
                "Access to the spa, gardens, pool, and meditation zones",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <PainSection
              title="🛏️ Stay & Amenities"
              list={[
                "Tranquil double occupancy rooms for deep rest",
                "Organic toiletries and calming natural surroundings",
                "Full access to yoga hall, spa, heated pool, and nature trails",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <PainSection
              title="🍽️ Food & Nourishment"
              list={[
                "Fresh, anti-inflammatory meals supporting healing",
                "Herbal infusions for joint pain, digestion, and relaxation",
                "Light and sattvic diet customized for your comfort",
              ]}
            />
          </div>
        </div>

        {/* Pricing */}
        <h3 className="pain-heading mt-5">💰 Pricing & Inclusions</h3>
        <div className="table-responsive mb-4">
          <table className="table pain-table text-center">
            <thead>
              <tr>
                <th>Room Type</th>
                <th>Price (5 Days / 4 Nights)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shared Double Room</td>
                <td>₹26,000 per person</td>
              </tr>
              <tr>
                <td>Private Room</td>
                <td>₹32,000 per person</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Inclusions:</strong> Stay, all meals, wellness beverages,
          Ayurvedic therapies, movement sessions, consultations, use of spa,
          yoga shala, gardens, and heated pool.
        </p>
        <p>
          <strong>Exclusions:</strong> Long-term treatment kits or Panchakarma
          add-ons, travel to and from Aranyaka.
        </p>

        <img
          src={img6}
          className="pain-img my-4 rounded shadow-sm"
          alt="Therapy moments"
        />

        {/* Booking */}
        <h3 className="pain-heading">📝 How to Book</h3>
        <ul className="pain-list mb-4">
          <li>📩 Fill out the Pain Management Retreat Booking Form</li>
          <li>📞 Call or WhatsApp: +91-8689928598</li>
          <li>📧 Email: wellness@aranyakafarm.com</li>
        </ul>
        <p className="mb-4">
          <em>Retreat capacity is limited for personalized care.</em>
        </p>

        {/* Is This Retreat for You */}
        <h3 className="pain-heading">🙋‍♀️ Is This Retreat for You?</h3>
        <ul className="pain-list mb-4">
          <li>You feel physically stiff, tired, or tense</li>
          <li>You live with joint pain, muscle fatigue, or chronic soreness</li>
          <li>You're seeking natural, nurturing alternatives to pain meds</li>
          <li>
            You want to rest, reset, and learn sustainable pain-relief practices
          </li>
        </ul>

        {/* CTA */}
        <div className="text-center mt-4">
          <h4 className="pain-cta mb-3">🌿 Ready to Move Without Pain?</h4>
          <button className="btn btn-gold m-2">Book Now</button>
          <button className="btn btn-outline-gold m-2">Ask a Question</button>
          <button className="btn btn-outline-gold m-2">
            Explore All Retreats
          </button>
        </div>

        <img
          src={img7}
          className="pain-img my-4 rounded shadow-sm"
          alt="Nature view"
        />
      </section>
    </div>
  );
};

// Reusable section
const PainSection = ({ title, list }) => (
  <>
    <h4 className="pain-heading">{title}</h4>
    <ul className="pain-list mb-4">
      {list.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </>
);

export default PainManagementRetreatPage;
