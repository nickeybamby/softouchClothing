import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";

const cards = [
  {
    id: 1,
    image: card1,
    title: "Suit",
  },
  {
    id: 2,
    image: card2,
    title: "Agbada",
  },
  {
    id: 3,
    image: card3,
    title: "Senator",
  },
];

const HeroSection = () => {
  return (
    <section className="section__container hero__container">
      {cards.map((card) => (
        <div key={card.id} className="hero__card">
          <img src={card.image} alt={card.title} />
          <div className="hero__content">
            <h4>{card.title}</h4>
            <a href="#">Discover More</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSection;
