import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <TourDetail key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

const TourDetail = ({ name, info, image, cost, duration, location, date }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <h4>{name}</h4>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {location}
          </p>
          <p>{duration} days</p>
          <p>from ${cost}</p>
        </div>
      </div>
    </article>
  );
};

export default Tours;
