import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../assessts/Images/Food App Logo.png';
import welcomeIcon from '../../assessts/Images/welcome.png';
import { TiHome } from "react-icons/ti";
import { FaReceipt, FaUser, FaQuestionCircle, FaShoppingCart } from "react-icons/fa";
import { IoSettings, IoFastFoodSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { animate, motion } from 'framer-motion';

const Sidebar = () => {

    const ulVariant = {
        hidden: {
            x: -100,
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.35,
                when: "beforeChildren"
            }
        }
    }

    const liVariant = {
        hidden: {
            x: -50,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            staggerChildren: 0.3,
        }
    }

    const [toggle, showMenu] = useState(false);
    const [animating, setAnimating] = useState(false);

    const handleLinkClick = () => {
        showMenu(false);
    };

    return (
        <>
            <motion.aside className={toggle ? 'aside show-menu' : 'aside'}
                initial={{ opacity: 0, translateX: "-250px" }}
                animate={{ opacity: 1, translateX: 0, }}
                transition={{ type: "tween", duration: 0.5 }}
            >

                <Link to='/' href="#" className='logo__image' >
                    <motion.img src={logo} alt="logo" className='logo'
                        initial={{ x: 0 }}
                        animate={{
                            rotate: animating ? 360 : 0
                        }}
                        transition={{ duration: 0.5 }}
                        onClick={() => setAnimating(!animating)}
                    />
                    <h3>WelCome to Grillella
                        <img src={welcomeIcon} alt="WelCome Icon" className='welcomeIcon' />
                    </h3>
                </Link>



                <nav className='nav'>
                    <div className="nav__menu">
                        <motion.ul className="nav__list"
                            variants={ulVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.li className="nav__item"
                                variants={liVariant}
                            >
                                <Link to="/" className='nav__link' onClick={handleLinkClick}>
                                    <TiHome className='icon' />
                                    <p>Home</p>
                                </Link>
                            </motion.li>
                            <motion.li className="nav__item"
                                variants={liVariant}
                            >
                                <Link to='/about' className='nav__link' onClick={handleLinkClick}>
                                    <IoFastFoodSharp className='icon' />
                                    <p>Order Food</p>
                                </Link>
                            </motion.li>
                            <motion.li className="nav__item"
                                variants={liVariant}
                            >
                                <Link to='/cart' className='nav__link' onClick={handleLinkClick}>
                                    <FaShoppingCart className='icon' />
                                    <p>Your Order</p>
                                </Link>
                            </motion.li>
                            <motion.li className="nav__item"
                                variants={liVariant}
                            >
                                <Link to='/receipe' className='nav__link' onClick={handleLinkClick}>
                                    <FaReceipt className='icon' />
                                    <p>Receipe</p>
                                </Link>
                            </motion.li>
                            <motion.li className="nav__item"
                                variants={liVariant}
                            >
                                <Link to='/profile' className='nav__link' onClick={handleLinkClick}>
                                    <FaUser className='icon' />
                                    <p>Profile</p>
                                </Link>
                            </motion.li>
                            <motion.li className="nav__item"
                                variants={liVariant}
                            >
                                <Link to='/setting' className='nav__link' onClick={handleLinkClick}>
                                    <IoSettings className='icon' />
                                    <p>Setting</p>
                                </Link>
                            </motion.li>
                            <motion.li className="nav__item"
                                variants={liVariant}
                            >
                                <Link to='/faq' className='nav__link' onClick={handleLinkClick}>
                                    <FaQuestionCircle className='icon' />
                                    <p>FAQ</p>
                                </Link>
                            </motion.li>
                        </motion.ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <span className='copyright'>
                        &copy; 2024 - 2025.
                    </span>
                </div>
            </motion.aside >

            <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
                <RxHamburgerMenu className='icon-menu' />
            </div>
        </>
    )
}

export default Sidebar;
