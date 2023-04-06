import React from 'react'
import '../styles/hamburger.css'
const Hamburger = ({show, setShow}) => {
  return (
    <div className='hamb' onClick={() => setShow(!show)}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Hamburger