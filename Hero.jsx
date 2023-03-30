import React from "react";
import "./hero.css";
import { AiFillStar } from "react-icons/ai";
const apartment = [
  {
    title: "Stylist apartment in center of the city",
    rating: 4.4,
    type: "Entire apartment",
    beds: 2,
    host: "super host",
    img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Cozy, peaceful and private room",
    rating: 4.25,
    type: "Private room",
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Modern house in modern area",
    rating: 4.96,
    type: "Entire house",
    img: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Stilish room in design district",
    rating: 4.65,
    type: "Entire apartment",
    beds: 2,
    host: "super host",
    img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Modern apartment close to nature",
    rating: 4.54,
    type: "Private room",
    img: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "House in remote area",
    rating: 4.64,
    type: "Entire house",
    img: "https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
const Hero = ({setShow}) => {
  return (
    <div className="hero" onClick={() => {setShow(false); document.querySelector('.hero').style.filter = 'brightness(100%)' }}>
      <h3 className="location">Stays in Finland</h3>
      <div className="cards">
        {apartment.map((item, id) => (
          <div className="card" key={id}>
            <img src={item.img} alt={id} className="card-image" />
            <div className="card-content">
              <div className="card-info">
                {item.host && <h6 className="host">{item.host}</h6>}
                <h6 className="type">{item.type}</h6>
                {item.beds && <h6 className="type">{item.beds} beds</h6>}
              </div>
              <h6 className="raiting">
                <AiFillStar color="#EB5757" /> {item.rating}
              </h6>
            </div>
            <div>
              <h6 className="title">{item.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
