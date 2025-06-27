import "../pages/FoodPage.css";

const FoodPage = () => {
  return (
    <div className="food-page luxury-theme">
      {/* Hero Section */}
      <section
        className="hero-food d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: `url(https://www.yogabasics.com/yogabasics2017/wp-content/uploads/2019/10/epicurrence-MtT0MMBT1Ws-unsplash.jpg)
          `,
        }}
      >
        <div className="overlay p-5">
          <h1 className="display-4 fw-bold">Food at Aranyaka</h1>
          <p className="lead">
            Where every meal is a sacred ritual, a mindful celebration of the
            earth.
          </p>
        </div>
      </section>

      {/* Food Philosophy */}
      <section className="py-5 bg-light-tint">
        <div className="container">
          <h2 className="elegant-heading mb-4">Rooted in Satvik Philosophy</h2>
          <p className="luxury-paragraph">
            At Aranyaka, every meal is a ritual — a quiet celebration of the
            earth, the seasons, and the wisdom of simplicity. We believe food is
            sacred, and its journey from seed to plate should be as pure and
            conscious as its nourishment.
          </p>
          <p className="luxury-paragraph">
            Our kitchen is guided by the Satvik philosophy, where meals are
            light yet grounding, energizing yet calming. You won’t find anything
            artificial here — no refined sugars, no preservatives, no
            unnecessary spice. Just whole, vibrant ingredients cooked with care,
            intention, and reverence.
          </p>
        </div>
      </section>

      {/* Daily Rituals */}
      <section className="py-5">
        <div className="container">
          <h2 className="elegant-heading mb-4">A Day of Nourishment</h2>
          <p className="luxury-paragraph">
            The day begins with warm herbal infusions, soaked nuts, and fresh
            fruit — nature’s gentle wake-up call. Midday thalis are colourful,
            balanced, and deeply satisfying, often accompanied by home-fermented
            pickles, cooling chutneys, and hand-pounded ghee. In the evening,
            warm broths, khichdi, and roasted roots soothe the senses, allowing
            for quiet reflection and restful sleep.
          </p>
          <p className="luxury-paragraph">
            Our menus change with the weather — pumpkin and turmeric in the
            monsoons, drumsticks and amla in spring, leafy greens and millets in
            winter — ensuring the body receives exactly what it needs, when it
            needs it.
          </p>
        </div>
      </section>

      {/* Sacred Connection */}
      <section className="py-5 bg-light-tint">
        <div className="container">
          <h2 className="elegant-heading mb-4">Food as a Sacred Offering</h2>
          <p className="luxury-paragraph">
            Food at Aranyaka is also a medium of connection — to the land, to
            oneself, and to each other. Whether you're eating in silence under a
            mango tree or gathered around a shared table, meals become moments
            of presence.
          </p>
          <p className="luxury-paragraph">
            We happily accommodate special dietary needs. Vegan, gluten-free, or
            Jain meals can be thoughtfully prepared on request.
          </p>
          <p className="luxury-paragraph">
            Here, food is not just sustenance. <br />
            It is <strong>prasad</strong> — an offering. <br />
            It is <strong>seva</strong> — an act of service. <br />
            It is <strong>sadhana</strong> — a daily practice in mindfulness.
          </p>
          <p className="luxury-paragraph">
            Come, eat with us — not just to fill your stomach, but to nourish
            your soul.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FoodPage;
