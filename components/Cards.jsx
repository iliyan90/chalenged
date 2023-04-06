import React from 'react'

const Cards = ({cards}) => {
  return (
    <div className='cards'>
        {cards.map((item, i) =>(
          <div className='card' key={i}>
            <h4 className='card-title'>{item.title}</h4>
            <div className='card-data'>
              <span>{item.data}</span>
              <span>{item.type}</span>
            </div>
            <p className='text'>{item.text}</p>
          </div>
        ))}
      </div>
  )
}

export default Cards