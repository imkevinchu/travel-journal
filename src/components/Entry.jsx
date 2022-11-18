import { FaMapMarkerAlt } from "react-icons/fa";

const Entry = (props) => {
  return (
    <section className="Entry">
      <img src={props.imageUrl} alt={props.title} className="img" />
      <div>
        <span>
          <div className="location">
            <FaMapMarkerAlt className="marker" />
            {props.location}
          </div>
          <a href={props.googleMapsUrl} className="view-map">
            View on Google Maps
          </a>
        </span>
        <h1 className="title">{props.title}</h1>
        <p className="date">
          {props.startDate} – {props.endDate}
        </p>
        <p className="description">{props.description}</p>
      </div>
    </section>
  );
};

export default Entry;
