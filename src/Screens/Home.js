import React,{useEffect} from 'react'
import Header from '../Components/Header'
import hero from '../Assets/hero.png'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";
import abt from '../Assets/us.png'
import { GoCheckCircle } from "react-icons/go";
import serv from '../Assets/service.png'
import Footer from '../Components/Footer';
import Faq from '../Components/Faq';
import Testimonials from '../Components/Testimonials';
import {useLocation} from "react-router-dom";

const Home = () => {
    const { pathname } = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = "auto";
      }, [pathname]);


  return (
    <div>

        {/* Header */}

        <Header/>

        {/* hero-section */}

        <div className="hero">
            <div className="h-top">
                <h2>Shaping the Future of Tech Innovation</h2>
                <p>At Primeforte, we deliver cutting-edge tech solutions that empower businesses and individuals to excel in a digital-first world.</p>
            </div>
            <img src={hero} alt="" />
            <div className="h-btns">
                <a href='#contact'><button>Contact Us</button></a>
                <Link to='/about'><button className='exp-btn'>Explore</button></Link>
            </div>
        </div>

        {/* who we are section */}

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

        {/* service section */}

        <div className="services" id='service'>
            <div className="s-top">
                <h3>Our Services</h3>
                <p>Understanding a product's capabilities requires a comprehensive assessment of its features, functionality, flexibility & integration.</p>
            </div>

            <div className="serv-flex">
                <div className="one">
                    <div className="one-card">
                        <div className="one-cc">
                            <GoCheckCircle className='cc-i'/>
                            <h4>Brand Design</h4>
                            <p>Describe the chore you need help with</p>
                        </div>
                        
                    </div>

                    <div className="one-card">
                        <div className="one-cc">
                            <GoCheckCircle className='cc-i'/>
                            <h4>Web Development</h4>
                            <p>We connect you With trusted helper near you</p>
                        </div>
                        
                    </div>

                </div>

                <div className="s-img">
                    <img src={serv} alt="" />
                </div>

                <div className="one">
                    <div className="one-card">
                        <div className="one-cc">
                            <GoCheckCircle className='cc-i'/>
                            <h4>UI/UX Design</h4>
                            <p>Sit back while your task get done</p>
                        </div>
                        
                    </div>

                    <div className="one-card">
                        <div className="one-cc">
                            <GoCheckCircle className='cc-i'/>
                            <h4>Cyber Attack</h4>
                            <p>Leave feedback and Pay  Securely via the App</p>
                        </div>
                        
                    </div>

                </div>

            </div>
        </div>

        <Testimonials/>

        {/* contact section */}
        <div className="contact" id='contact'>
            <form className='contact-form'>
                <div className="c-f-c">
                    <h3>Get in Touch</h3>
                    <p>Our friendly team will get in touch with you</p>

                    <input type="text" placeholder='Full Name'/>
                    <input type="email" placeholder='Email Address'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    <button>Send Message</button>

                </div>
            </form>
        </div>

        <Faq/>

        <Footer/>

    </div>
  )
}

export default Home