import "./FoodPage.css";
import heroImg from "../assets/retreat/detox7.jpg";
import food1 from "../assets/food/food.JPG";
import food2 from "../assets/food/food3.JPG";
import food3 from "../assets/food/food4.jpg";
import food4 from "../assets/food/food5.jpg";
import food5 from "../assets/food/food6.jpg";
import food6 from "../assets/food/food7.jpg";
import food7 from "../assets/food/food8.jpg";
import food8 from "../assets/food/food9.jpg";
import food9 from "../assets/food/food10.jpg";
import food10 from "../assets/food/food11.jpg";
import food11 from "../assets/food/food12.jpg";
import food12 from "../assets/food/food14.jpg";
import food13 from "../assets/food/food15.jpg";
import food14 from "../assets/food/food16.jpg";

const FoodPage = () => {
  return (
    <div className="food-page">
      {/* Banner */}
      <section
        className="food-banner d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="food-banner-overlay text-center text-white">
          <h1 className="display-4 fw-bold">🍃 Farm-to-Table Dining</h1>
          <p className="food-tagline">Food as Prasad • Seva • Sadhana</p>
        </div>
      </section>

      <section className="food-container py-5">
        {/* Intro */}
        <p className="food-overview text-center mb-4">
        At Aranyaka, every meal is a ritual — a quiet celebration of the
            earth, the seasons, and the wisdom of simplicity. We believe food is
            sacred, and its journey from seed to plate should be as pure and
            conscious as its nourishment.
        </p>

        {/* Philosophy */}
        <h3 className="food-heading">🌱 Rooted in Satvik Philosophy</h3>
        <p>
          Our meals use whole, vibrant ingredients — no refined sugars,
          preservatives, or artificial flavors. Each dish is created with care
          and reverence, supporting both body and spirit.
        </p>
        <img
          src={food1}
          className="food-img my-4 rounded shadow-sm"
          alt="Farm dish"
        />

        {/* Daily Routine */}
        <h3 className="food-heading">🍽️ A Day of Nourishment</h3>
        <ul className="food-list mb-4">
          <li>🌅 Morning: Herbal infusions, fresh fruit & soaked nuts</li>
          <li>🌞 Midday: Balanced satvik thali, homemade pickles & chutneys</li>
          <li>🌙 Evening: Light broth, khichdi, roasted roots</li>
        </ul>
        <p>
          Menus change with the seasons: leafy greens & millets in winter,
          pumpkin in monsoon, amla & drumstick in spring — always local and
          farm-fresh.
        </p>
        <img
          src={food2}
          className="food-img my-4 rounded shadow-sm"
          alt="Seasonal meal"
        />

        {/* Highlights */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src={food3}
              className="food-feature-img rounded shadow-sm mb-2"
              alt="Signature"
            />
            <FoodSection
              title="🍵 Signature Offerings"
              list={[
                "Herbal teas & ancient grain breads",
                "Homemade pickles & chutneys",
                "Seasonal satvik specials",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src={food4}
              className="food-feature-img rounded shadow-sm mb-2"
              alt="Dining spaces"
            />
            <FoodSection
              title="🌳 Dining Experience"
              list={[
                "Under orchard trees or in community hall",
                "Silent breakfasts & mindful meals",
                "Farm-to-plate freshness every day",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src={food5}
              className="food-feature-img rounded shadow-sm mb-2"
              alt="Special diets"
            />
            <FoodSection
              title="🥗 For Every Guest"
              list={[
                "Vegan & gluten-free options",
                "Jain meals on request",
                "Prepared with local organic produce",
              ]}
            />
          </div>
        </div>

        {/* Closing */}
        <h3 className="food-heading mt-5">🙏 Food as Offering</h3>
        <p className="mb-4">
          Meals are prepared not just to nourish but to honour — food as
          <strong> prasad</strong> (offering), <strong>seva</strong> (service),
          and <strong>sadhana</strong> (mindful practice).
        </p>

        <div className="text-center mt-4">
          <h4 className="food-cta mb-3">🍃 Join us for a soulful meal</h4>
          <button className="btn btn-gold m-2">Book Your Stay</button>
          <button className="btn btn-outline-gold m-2">Ask a Question</button>
        </div>

        <img
          src={food6}
          className="food-img my-4 rounded shadow-sm"
          alt="Dining view"
        />
        {/* Food Gallery */}
       <h3 className="food-heading mt-5">📸 Visual Feast</h3>
<div className="food-gallery my-4">
  {[
    food7,
    food8,
    food9,
    food10,
    food11,
    food12,
    food13,
    food14,
    food2
  ].map((src, idx) => (
    <div className="food-gallery-item" key={idx}>
      <img src={src} alt={`Food ${idx + 7}`} />
    </div>
  ))}
</div>

      </section>
    </div>
  );
};

const FoodSection = ({ title, list }) => (
  <>
    <h4 className="food-heading">{title}</h4>
    <ul className="food-list mb-4">
      {list.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </>
);

export default FoodPage;
