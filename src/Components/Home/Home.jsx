import React from 'react';
import './Home.css';
import HeaderSocials from './HeaderSocials';
import Shapes from './Shapes';
import logo from '../../assessts/Images/Food App Logo.png'
import foodDelivery from '../../assessts/Images/Food Delivery.png'
import Home_2 from '../Home_2/Home_2';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <section className="home container" id='home'>
                <div className="intro">
                    <img src={logo} alt="Logo" className='home__img' />
                    <h1 className='home__name'>WelCome to Grillella
                        <img src={foodDelivery} alt="Food Delivery Image" className='foodDelivery' />
                    </h1>
                    <span className='home__education'>We are glad to have you here. Explore our content and learn more about what we have to offer.</span>
                    <HeaderSocials />

                    <a href="#home__2" className="btn readMore">Read More</a>
                </div>
                <Shapes />
            </section>
            <Home_2 />
            <Footer />
        </>
    )
}

export default Home;

