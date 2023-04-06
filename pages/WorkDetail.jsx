import React from 'react'
import '../styles/workDetail.css'
import { useLocation } from 'react-router-dom'
const WorkDetail = () => {
    const {items} =  useLocation().state
  return (
    <section className='work-details'>
        <h1 className='title-work'>{items.title} with usability in my mind</h1>
        <div className='work-year'>
            <span>{items.year}</span>
            <span>{items.type}, user expirience disign</span>
        </div>
        <p>{items.text}</p>
        <img src={items.img} alt="" />
        <div className='work-image'>
            <h2>{items.title1}</h2>
            <h3>{items.title2}</h3>
            <img src={items.img1} alt="" />
            <img src={items.img2} alt="" />
        </div>
    </section>
  )
}

export default WorkDetail