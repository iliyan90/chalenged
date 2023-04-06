import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/navbar.css'
import {AiOutlineClose} from 'react-icons/ai'
import Hamburger from './Hamburger'
const Navbar = () => {
    const [btn, setBtn] = useState({
        isActive: 2,
        btnText:['Works','Blog','Contact']
    })
    const [show, setShow] = useState(false)
    const links = ['/works','/blog','/']
    const navigate = useNavigate();
    const active = (i) =>{
        setBtn({...btn, isActive: btn.btnText[i]})
    }
    const activeClass = (i) =>{
        if(btn.isActive === btn.btnText[i]){
            return 'btn-nav btn-nav-active';
        }else{
            return 'btn-nav'
        }
    }
  return (
    <nav className='navbar'>
        <Hamburger setShow={setShow} show={show}/>
        <div className={show ? 'btn-nav-group btn-active' : 'btn-nav-group'}>
        <AiOutlineClose onClick={() => setShow(false)} className='close'/>
        {btn.btnText.map((item, i) =>(
            <button className={activeClass(i)} onClick={() => {navigate(links[i]); active(i); setShow(false)}} key={i}>{item}</button>
            ))}
        </div>
    </nav>
  )
}

export default Navbar