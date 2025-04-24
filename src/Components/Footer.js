import React from 'react'
import logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="f-l">
                <img src={logo} alt="" />
                <p>Discover a World of Possibilities with TripNavigator Tours.</p>
            </div>

            <div className="f-r">
                <div className="top">
                    <a href="">Products</a>
                    <a href="">Solutions</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Pricing</a>
                    <a href="">Resources</a>
                </div>

                <div className="bottom">
                    <span>@ 2024, All rights reserved.</span>
                    <div className="links">
                        <a href="">Terms & Conditions</a>
                        <a href="">Privacy Policy</a>
                    </div>
                    
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer