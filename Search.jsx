import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import "./search.css";
const Search = ({ show, setShow }) => {
  const [location, setLocation] = useState(false);
  const [guests, setGuests] = useState(false);
  const [countAdult, setCountAdult] = useState(1);
  const [countChildren, setCountChildren] = useState(1);

  const handleCount = (num, count, setCount) => {
    if (count >= 1 || (num > 0 && count === 0)) {
      setCount(count + num);
    } else if (count <= 1) {
      setCount(0);
    }
  };
  return (
    <div className={show ? "area-active" : "area"}>
      <div className="area-nav">
        <div className="edit-search">
          <span>Edit you search</span>{" "}
          <AiOutlineClose
            size={20}
            onClick={() => {
              setShow(false);
              document.querySelector(".hero").style.filter = "brightness(100%)";
            }}
          />
        </div>
        <div
          onClick={() => {
            setLocation(true);
            setGuests(false);
          }}
        >
          <h6>Location</h6>
          <span>Helzinki, Finland</span>
          {location && (
            <div className="area-location">
              <ul>
                <li>
                  <MdLocationOn /> <span>Helsinki, Finland</span>
                </li>
                <li>
                  <MdLocationOn /> <span>Turku, Finland</span>
                </li>
                <li>
                  <MdLocationOn /> <span>Oulu, Finland</span>
                </li>
                <li>
                  <MdLocationOn /> <span>Vaasa, Finland</span>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div
          onClick={() => {
            setLocation(false);
            setGuests(true);
          }}
        >
          <h6>Guests</h6>
          <span>Add guests</span>
          {guests && (
            <div className="area-guests">
              <div>
                <h6>Adults</h6>
                <span>Ages of 13 above</span>
                <div className="area-numbers">
                  <button
                    onClick={() => handleCount(-1, countAdult, setCountAdult)}
                  >
                    -
                  </button>
                  <h6>{countAdult}</h6>
                  <button
                    onClick={() => handleCount(1, countAdult, setCountAdult)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <h6>Children</h6>
                <span>Ages 2-12</span>
                <div className="area-numbers">
                  <button
                    onClick={() =>
                      handleCount(-1, countChildren, setCountChildren)
                    }
                  >
                    -
                  </button>
                  <h6>{countChildren}</h6>
                  <button
                    onClick={() =>
                      handleCount(1, countChildren, setCountChildren)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="btn-search">
          <button
            onClick={() => {
              setShow(false);
              document.querySelector(".hero").style.filter = "brightness(100%)";
            }}
          >
            <AiOutlineSearch size={20} /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
