import React from 'react'
import '../styles/works.css'
import FeatureCards from '../components/FeatureCards'
import { featuredCards } from '../data/main'

const Works = () => {
  return (
    <section className='works'>
      <h1 className='title'>Works</h1>
      <div className='works-content'>
        <FeatureCards featuredCards={featuredCards} classes={"works-cards"}/>
      </div>
    </section>
  )
}

export default Works