import React from 'react'
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import '../styles/footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-icons'>
            <AiFillFacebook/>
            <AiOutlineInstagram/>
            <AiOutlineTwitter/>
            <AiFillLinkedin/>
        </div>
        <div className='copyright'>
            Copyright <span>&copy;</span>2023 All right reserved created by <a href="http://itarashev.rf.gd/">http://itarashev.rf.gd/</a> 
        </div>
    </div>
  )
}

export default Footer