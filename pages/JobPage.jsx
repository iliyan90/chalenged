import React from "react";
import {  useNavigate, useLocation, Link } from "react-router-dom";
import "../styles/jobPage.css";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { sliceType } from "../tools/text/sliceType";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import moment from "moment";

const JobPage = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { data } = location.state;
  window.scrollTo(0,0);
  return (
    <div className="job-page">
      <div className="job-page-left">
        <div className="job-back" onClick={() => navigate('/')}>
          <HiOutlineArrowNarrowLeft />
          <span>Back to search</span>
        </div>
        <h4 className="job-apply">HOW TO APPLAY</h4>
        <p className="job-left-info">
          Pleace see remotive page for more information
        </p>
        <Link to={data.url}>
          <button className="job-btn-apply">APPLY HERE</button>
        </Link>
      </div>
      <div className="job-page-right">
        <div className="job-right-info">
          <h2>{data.title}</h2>
          {data.type && <h6 className="job-type">{sliceType(data.type)}</h6>}
        </div>
        <div className="job-right-time">
          <AiOutlineClockCircle />
          <span>{moment(data.data).fromNow()}</span>
        </div>
        <div className="job-right-company">
          <img src={data.company_logo} alt="" />
          <div className="job-right-comp">
            <h6 className="job-right-name">{data.company_name}</h6>
            <div className="job-info-location">
              <BsGlobeEuropeAfrica />
              <span>{data.company_location}</span>
            </div>
          </div>
        </div>
        <div className="job-right-desc">
          <div dangerouslySetInnerHTML={{__html: data.desc}}></div> 
        </div>
      </div>
    </div>
  );
};

export default JobPage;
