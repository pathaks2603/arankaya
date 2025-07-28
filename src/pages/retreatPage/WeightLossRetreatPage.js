import "./WeightLossRetreatPage.css";
import bannerImg from "../../assets/retreat/weight/Weightloss1.jpg";
import img1 from "../../assets/retreat/weight/weightloss2.jpg";
import img2 from "../../assets/retreat/weight/weightloss3.jpg";
import img3 from "../../assets/retreat/weight/weightloss4.jpg";
import img4 from "../../assets/retreat/weight/weightloss5.jpg";
import img5 from "../../assets/retreat/weight/weightloss6.jpg";
import img6 from "../../assets/retreat/weight/weightloss7.jpg";

const WeightLossRetreatPage = () => {
  return (
    <div className="weight-page">
      {/* Banner */}
      <section
        className="weight-banner d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="weight-banner-overlay text-center text-white">
          <h1 className="display-4 fw-bold">🧘‍♂️ Weight Loss Retreat</h1>
          <p className="weight-tagline">Transform Gently, Sustainably</p>
        </div>
      </section>

      <section className="weight-container py-5">
        {/* Intro */}
        <p className="weight-overview text-center mb-4">
          Reset your body, renew your habits, and reclaim your vitality. The
          Weight Loss Retreat at Aranyaka is designed for those who seek not
          just a slimmer body, but a stronger, more mindful relationship with
          food, movement, and self. Surrounded by nature and guided by holistic
          wisdom, this retreat blends science with soul for a truly sustainable
          path to wellness.
        </p>

        {/* Overview */}
        <h3 className="weight-heading">🧭 Overview</h3>
        <p>
          This 7-day retreat supports healthy weight loss through a balance of
          clean eating, movement, metabolism-boosting practices, and inner
          alignment. It’s not about strict dieting or punishing routines—it’s
          about finding your rhythm, honoring your body, and making empowered
          lifestyle shifts that last.
        </p>
        <p>
          <strong>Who It’s For:</strong>
        </p>
        <ul className="weight-list">
          <li>Anyone ready to lose weight mindfully and sustainably</li>
          <li>Those struggling with emotional eating or inconsistent habits</li>
          <li>People seeking motivation and guidance for long-term change</li>
        </ul>

        <img
          src={img1}
          className="weight-img my-4 rounded shadow-sm"
          alt="Weight loss retreat"
        />

        {/* Daily Schedule */}
        <h3 className="weight-heading">📅 How your day will look like</h3>
        <div className="table-responsive mb-4">
          <table className="table weight-table text-center">
            <thead>
              <tr>
                <th>Time</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6:00 AM</td>
                <td>Herbal Metabolism Tea & Morning Walk</td>
              </tr>
              <tr>
                <td>6:30 – 8:00 AM</td>
                <td>Yoga for Weight Loss (Core + Detox Flow)</td>
              </tr>
              <tr>
                <td>8:30 AM</td>
                <td>High-Fiber, Low-Glycemic Breakfast</td>
              </tr>
              <tr>
                <td>10:00 – 12:00 PM</td>
                <td>Nutrition Workshop / Seva Activity</td>
              </tr>
              <tr>
                <td>12:30 PM</td>
                <td>Protein-Rich, Balanced Lunch</td>
              </tr>
              <tr>
                <td>2:00 – 4:00 PM</td>
                <td>Personal Coaching / Spa / Journaling</td>
              </tr>
              <tr>
                <td>4:30 – 5:30 PM</td>
                <td>HIIT-inspired Movement or Functional Yoga</td>
              </tr>
              <tr>
                <td>6:00 PM</td>
                <td>Light Dinner (Soup / Steamed Meals)</td>
              </tr>
              <tr>
                <td>7:00 PM</td>
                <td>Guided Meditation / Yog Nidra</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          <em>
            Includes body composition assessment, habit tracking, and
            personalized plans.
          </em>
        </p>

        <img
          src={img6}
          className="weight-img my-4 rounded shadow-sm"
          alt="Evening meditation"
        />

        {/* Highlights */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src={img4}
              className="weight-feature-img rounded shadow-sm mb-2"
              alt="Highlights"
            />
            <WeightSection
              title="🌼 Highlights & Inclusions"
              list={[
                "Structured yoga and fitness sessions to support fat burn",
                "Nutrition coaching focused on metabolism and mindful eating",
                "Anti-inflammatory, gut-friendly meal plans",
                "Emotional awareness tools to address stress eating",
                "Daily movement variety: yoga, core work, cardio walks, functional training",
                "Habit-tracking journal and coaching tools",
                "End-of-day Yog Nidra for recovery and stress relief",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src={img3}
              className="weight-feature-img rounded shadow-sm mb-2"
              alt="Stay"
            />
            <WeightSection
              title="🛏️ Stay & Amenities"
              list={[
                "Cozy double occupancy rooms",
                "Access to spa, pool, yoga shala, walking trails",
                "Personal fitness and nutrition consultations",
                "Organic toiletries and filtered water",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src={img5}
              className="weight-feature-img rounded shadow-sm mb-2"
              alt="Food"
            />
            <WeightSection
              title="🍽️ Food & Nourishment"
              list={[
                "Anti-inflammatory, balanced meals with portion guidance",
                "Seasonal vegetables, whole grains, and plant-based proteins",
                "Herbal teas for digestion, metabolism, and hydration",
                "No sugar, dairy, or processed foods during the retreat",
              ]}
            />
          </div>
        </div>

        {/* Pricing */}
        <h3 className="weight-heading mt-5">💰 Pricing & Inclusions</h3>
        <div className="table-responsive mb-4">
          <table className="table weight-table text-center">
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
                <td>₹15,000</td>
                <td>₹10,000</td>
                <td>₹30,000</td>
                <td>₹20,000</td>
                <td>₹60,000</td>
                <td>₹45,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Inclusions:</strong> Accommodation, all meals and nutritional
          beverages, yoga, movement and wellness sessions, personal fitness and
          nutrition guidance, access to spa, pool and facilities.
        </p>
        <p>
          <strong>Exclusions:</strong> Spa treatments (can be booked
          separately), travel to and from Aranyaka.
        </p>

        <img
          src={img2}
          className="weight-img my-4 rounded shadow-sm"
          alt="Weight loss retreat moments"
        />

        {/* Booking */}
        <h3 className="weight-heading">📝 How to Book</h3>
        <ul className="weight-list mb-4">
          <li>📞 Call or WhatsApp: +91-9211985960</li>
          <li>📧 Email: enquiry@aranyakafarmstay.com</li>
          <li>💬 Schedule a consultation to personalize your experience</li>
        </ul>
        <p className="mb-4">
          <em>Spaces are limited to ensure personal attention and comfort.</em>
        </p>

        {/* Is This Retreat for You */}
        <h3 className="weight-heading">🙋‍♀️ Is This Retreat for You?</h3>
        <ul className="weight-list mb-4">
          <li>You want to lose weight naturally without crash diets</li>
          <li>You struggle with emotional eating or low motivation</li>
          <li>You’re ready for a guided reset and long-term tools</li>
          <li>
            You want a lifestyle shift rooted in kindness and self-respect
          </li>
        </ul>

        {/* CTA */}
        <div className="text-center mt-4">
          <h4 className="weight-cta mb-3">
            🔥 Ready to Transform From Within?
          </h4>
          <button className="btn btn-gold m-2">Book Your Retreat</button>
          <button className="btn btn-outline-gold m-2">Connect With Us</button>
          <button className="btn btn-outline-gold m-2">
            View All Retreats
          </button>
        </div>
      </section>
    </div>
  );
};

const WeightSection = ({ title, list }) => (
  <>
    <h4 className="weight-heading">{title}</h4>
    <ul className="weight-list mb-4">
      {list.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </>
);

export default WeightLossRetreatPage;
