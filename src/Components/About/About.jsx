import React, { useState } from 'react';
import Data from './Data';
import './About.css';
import orderTheFood from '../../assessts/Images/OrderTheFood.gif'
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = ({ addToCart, cartItemsCount }) => {
    const [items, setItems] = useState(Data);

    const filterItem = (nameItem) => {
        const updateItem = Data.filter((currElem) => {
            return currElem.name === nameItem;
        });

        setItems(updateItem);
    };

    return (
        <>
            <section className="container about" id='about'>
                <div className="row">
                    <div className="col-12">
                        <h2 className='text-center py-4 fs-3'>Now You Can Order
                            <img src={orderTheFood} alt="" className='img-fluid orderTheFood' />
                        </h2>
                    </div>
                </div>
                <div className="order__title">
                    <div className="row">
                        <div className="col-12">
                            <h2>What's in your Mind?</h2>
                            <div className="cart-icon">
                                <Link to='/cart'>
                                    <i className="fas fa-shopping-cart" style={{ color: "gray" }}></i>
                                    {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order__listing">
                    <div className="listing__items">
                        <span className="item__list" onClick={() => setItems(Data)}>Everything</span>
                        <span className='item__list' onClick={() => filterItem("Pizza")}>Pizza</span>
                        <span className='item__list' onClick={() => filterItem("Burger")}>Burger</span>
                        <span className='item__list' onClick={() => filterItem("Pasta")}>Pasta</span>
                        <span className='item__list' onClick={() => filterItem("Beef")}>Beef</span>
                        <span className='item__list' onClick={() => filterItem("Drinks")}>Drinks</span>
                        <span className='item__list' onClick={() => filterItem("Ice Cream")}>Ice Cream</span>
                    </div>
                </div>
                <div className="order-food-items">
                    <div className="food-items">
                        {items.map((item, i) => (
                            <motion.div key={item.id} className="food-item"
                                initial={{
                                    opacity: 0,
                                    translateX: "-50%",
                                    translateY: "-50%",
                                }}
                                animate={{
                                    opacity: 1,
                                    translateX: 0,
                                    translateY: 0
                                }}
                                transition={{
                                    delay: i * 0.15,
                                    duration: 0.1
                                }}
                            >
                                <img src={item.image} alt={item.name} className='img-fluid' />
                                <div className="food__details">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <p>Price: ${item.price}</p>
                                </div>
                                <button onClick={() => addToCart(item)}>Order Now</button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;
