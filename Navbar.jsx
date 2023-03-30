import React from 'react'
import './navbar.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react'
const Navbar = ({setShow}) => {

  return (
    <nav className='nav' >
        
        <img src="./img/logo.png" alt="" className='logo'/>
        <div className="search-bar">
            <span className='srch-loc' onClick={() => {setShow(true); document.querySelector('.hero').style.filter = 'brightness(40%)'}}>Helzinki, Finland</span>
            <input type="text" placeholder='Add guests' className='search-input' />
            <AiOutlineSearch color='#EB5757' size={25} onClick={() => {setShow(true); document.querySelector('.hero').style.filter = 'brightness(40%)'}}/>
        </div>
    </nav>
  )
}

export default Navbar