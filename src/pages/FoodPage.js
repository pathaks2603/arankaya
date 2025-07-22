import "../pages/FoodPage.css";
import img6 from "../assets/retreat/detox7.jpg";
import { useEffect } from "react";

const FoodPage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".food-page-aranyaka section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="food-page-aranyaka">
      {/* Hero Section */}
      <section
        className="food-hero-aranyaka d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${img6})`,
        }}
      >
        <div className="food-hero-overlay-aranyaka">
          <h1 className="food-hero-title-aranyaka">Farm-to-Table Dining</h1>
          <p className="food-hero-subtitle-aranyaka">
            Where every meal is a sacred ritual, a mindful celebration of the
            earth.
          </p>
        </div>
      </section>

      {/* Food Philosophy */}
      <section className="food-section-light-aranyaka">
        <div className="container">
          <h2 className="food-heading-aranyaka">Rooted in Satvik Philosophy</h2>
          <p className="food-paragraph-aranyaka">
            At Aranyaka, every meal is a ritual — a quiet celebration of the
            earth, the seasons, and the wisdom of simplicity. We believe food is
            sacred, and its journey from seed to plate should be as pure and
            conscious as its nourishment.
          </p>
          <p className="food-paragraph-aranyaka">
            Our kitchen is guided by the Satvik philosophy, where meals are
            light yet grounding, energizing yet calming. You won't find anything
            artificial here — no refined sugars, no preservatives, no
            unnecessary spice. Just whole, vibrant ingredients cooked with care,
            intention, and reverence.
          </p>
        </div>
      </section>

      {/* Daily Rituals */}
      <section>
        <div className="container">
          <h2 className="food-heading-aranyaka">A Day of Nourishment</h2>
          <p className="food-paragraph-aranyaka">
            The day begins with warm herbal infusions, soaked nuts, and fresh
            fruit — nature’s gentle wake-up call. Midday thalis are colourful,
            balanced, and deeply satisfying, often accompanied by home-fermented
            pickles, cooling chutneys, and hand-pounded ghee. In the evening,
            warm broths, khichdi, and roasted roots soothe the senses, allowing
            for quiet reflection and restful sleep.
          </p>
          <p className="food-paragraph-aranyaka">
            Our menus change with the weather — pumpkin and turmeric in the
            monsoons, drumsticks and amla in spring, leafy greens and millets in
            winter — ensuring the body receives exactly what it needs, when it
            needs it.
          </p>
        </div>
      </section>

      {/* Sacred Connection */}
      <section className="food-section-light-aranyaka">
        <div className="container">
          <h2 className="food-heading-aranyaka">Food as a Sacred Offering</h2>
          <p className="food-paragraph-aranyaka">
            Food at Aranyaka is also a medium of connection — to the land, to
            oneself, and to each other. Whether you're eating in silence under a
            mango tree or gathered around a shared table, meals become moments
            of presence.
          </p>
          <p className="food-paragraph-aranyaka">
            We happily accommodate special dietary needs. Vegan, gluten-free, or
            Jain meals can be thoughtfully prepared on request.
          </p>
          <p className="food-paragraph-aranyaka">
            Here, food is not just sustenance. <br />
            It is <strong>prasad</strong> — an offering. <br />
            It is <strong>seva</strong> — an act of service. <br />
            It is <strong>sadhana</strong> — a daily practice in mindfulness.
          </p>
          <p className="food-paragraph-aranyaka">
            Come, eat with us — not just to fill your stomach, but to nourish
            your soul.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FoodPage;
