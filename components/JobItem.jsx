import React from "react";
import "../styles/jobItem.css";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { sliceType } from "../tools/text/sliceType";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
const JobItem = ({
  id,
  company_logo,
  company_name,
  company_location,
  title,
  data,
  type,
  desc,
  url,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="job-item"
      onClick={() =>
        navigate(`/job/${id}`, {
          state: {
            data: {
              id,
              company_logo,
              company_name,
              company_location,
              title,
              data,
              type,
              desc,
              url,
            },
          },
        })
      }
    >
      <div className="job-company-logo">
        <img src={company_logo} alt="" className="company-logo" />
        <div className="job-desc">
          <span className="company-name">{company_name}</span>
          <h3 className="job-title">{title}</h3>
          {type && <h6 className="job-type">{sliceType(type)}</h6>}
        </div>
      </div>
      <div className="job-info">
        <div className="job-info-location">
          <BsGlobeEuropeAfrica />
          <span>{company_location}</span>
        </div>
        <div className="job-info-location">
          <AiOutlineClockCircle />
          <span>{moment(data).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
