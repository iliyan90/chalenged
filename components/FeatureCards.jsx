import React from 'react'
import { useNavigate } from 'react-router-dom'

const FeatureCards = ({featuredCards, classes}) => {
const navigate = useNavigate();

  return (
    <div className={`featured-cards ${classes}` }>
        {
          featuredCards.map((item, i) =>(
            <div className='featured-card' key={i} onClick={() => navigate(`/works/${i}`, {state: {items: item}})}>
              <div className='featured-left'>
                <img src={item.img} alt="missing" /></div>
              <div className='featured-right'>
                <h3 className='featured-title'>
                  {item.title}
                </h3>
                <div className='featured-year'>
                  <span className='featured-year'>{item.year}</span>
                  <span className='featured-type'>{item.type}</span>
                </div>
                <p className='text'>{item.text}</p>
              </div>
            </div>
          ))
        }
      </div>
  )
}

export default FeatureCards