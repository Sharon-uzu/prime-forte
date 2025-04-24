import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import abt from '../Assets/Frame 93.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import Faq from '../Components/Faq';
import Footer from '../Components/Footer';
import {useLocation} from "react-router-dom";

const About = () => {
    const { pathname } = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = "auto";
      }, [pathname]);

  return (
    <div>
        <div className="aboutus">
            <div className="ab-h">
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className="ab-txt">
                <h3>Who We Are!</h3>
            </div>
        </div>


        <div className="who-we-are">
            <div className="w-l">
                <div className="grp1">
                    <h3>Who We Are!</h3>
                    <p>The team at WDK AI ToolKit provided unparalleled support throughout our project. Their expertise and dedication were evident from day one.</p>
                </div>

                <div className="abs-txt">
                    <div className="abs-c">
                        <p>Primeforte is a forward-thinking tech company dedicated to providing innovative solutions in software development, digital transformation, and technology consulting. Our mission is to make technology accessible, impactful, and transformative for our clients</p>
                        <div className="ab-btn">
                            <Link to=""><button>
                                <IoIosArrowRoundForward className='ab-i'/>
                                Read More
                            </button></Link>
                        </div>
                    </div>

                </div>
            </div>

            <img src={abt} alt="" />
        </div>

        <Faq/>

        <Footer/>

    </div>
  )
}

export default About