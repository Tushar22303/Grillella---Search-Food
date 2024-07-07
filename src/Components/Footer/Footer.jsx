import React from 'react'
import './Footer.css'
import logo from '../../assessts/Images/Food App Logo.png'

const Footer = () => {
    return (
        <>
            <section id="footer" className="footer">
                <div className="grillella">
                    <img src={logo} alt="Logo" className='img-fluid' />
                    <p>Grillella is the place where you can please your soul and tummy with delicious food receipes of all cuisine and out service is absolutely free.</p>
                    <p> &copy; 2024 - 2025 | All Right Reserved</p>
                </div>

                <div className="footer__section">
                    <div className="contant_us">
                        <h4>Contact Us</h4>
                        <a href="#">grillella.com</a>
                        <a href="#">+91-1234567890</a>
                        <a href="#">299 - Maninagar, Ahmedabad</a>
                    </div>

                    <div className="social">
                        <h4>Socials</h4>
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Footer