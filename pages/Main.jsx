import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import '../styles/main.css'
import {BsGlobeEuropeAfrica} from 'react-icons/bs'
import JobList from "../components/JobList";
import { ApiContext } from "../context/ApiContext";

const Main = () => {
  const {fullTime, setFullTime, filtered, location, setLocation} =useContext(ApiContext);
  
  const handleCheck = () =>{
    setFullTime(!fullTime);
  }
  
  // this sort algorithm is to remove all repeated county in the job list
    let result = [];
    const filtCat = (array) =>{
      for (let i = 0; i < array.length; i++) {
        let exist = false;
        for (let j = 0; j < result.length; j++) {
          if(array[i].candidate_required_location === result[j]){
            exist = true;
            break;
          }
        }
        if(!exist){
          result.push(array[i].candidate_required_location)
        }
      }
    }
    
    filtCat(filtered);
  
    return (
    <div>
      <SearchBar />
      <div className="main-containt">
        <div className="main-left">
          <div className="main-full">
            <input type="checkbox" checked={fullTime} onChange={handleCheck} />
            <h6>Full Time</h6>
          </div>
          <div className="main-location">
            <h4>location</h4>
            <input type="text" placeholder="City, state, zip code or country"  className="main-search-input" onChange={(e) => setLocation(e.target.value)}/>
            <BsGlobeEuropeAfrica className="location-icon" />
            <div className="location-area">
                <div className="location-radio">
                  <input type="radio" id={'All'} name="location" value={""} onChange={(e) => setLocation("")}/>
                  <label htmlFor={"All"}>All</label>
                </div>
              {result.filter(loc => !loc.includes("UTC" || "CET" || "EST")).map((item,index) =>(
                <div className="location-radio" key={index}>
                  <input type="radio" id={item.id} name="location" value={location} onChange={(e) => setLocation(item)}/>
                  <label htmlFor={item.id}>{item}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="main-right">
          <JobList/>
        </div>
      </div>
    </div>
  );
};

export default Main;
