import React from 'react'
import '../styles/contact.css'
import Cards from '../components/Cards'
import FeatureCards from '../components/FeatureCards'
import { text } from '../data/main'
import { cards } from '../data/main'
import { featuredCards } from '../data/main'

const Contact = () => {
  return (
    <section className='contacts'>
      <div className='hero'>
          <div className="left-hero flex2">
            <h1 className='title'>Hi, I am John, Creative Technology</h1>
            <p className='text'>{text}</p>
          <button className="btn-hero">Download Resume</button>
          </div>
          <div className="right-hero flex">
            <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600" className='hero-img' alt="" />
          </div>
      </div>
      <div className='recent'>
        <h6>Recent posts</h6>
        <span>View all</span>
      </div>
      <Cards cards={cards}/>
      <div className='feature'>
        <h6>Feature posts</h6>
      </div>
      <FeatureCards featuredCards={featuredCards} classes={'contacts-cards'}/>
    </section>
  )
}

export default Contact