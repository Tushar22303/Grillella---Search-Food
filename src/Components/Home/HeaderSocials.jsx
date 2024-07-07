import React from 'react'
import { FaBehance, FaDribbble, FaInstagramSquare, FaPinterest, FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <>
            <div className="home__socials">
                <a href="https://www.instagram.com/" className='home__social-link' target='_blank'>
                    <FaInstagramSquare />
                </a>
                <a href="https://www.twitter.com/" className='home__social-link' target='_blank'>
                    <FaTwitter />
                </a>
                <a href="https://www.pinterest.com/" className='home__social-link' target='_blank'>
                    <FaPinterest />
                </a>
                <a href="https://www.dribbble.com/" className='home__social-link' target='_blank'>
                    <FaDribbble />
                </a>
                <a href="https://www.behance.com/" className='home__social-link' target='_blank'>
                    <FaBehance />
                </a>
            </div>
        </>
    )
}

export default HeaderSocials