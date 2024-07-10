import React from 'react';
import './Home_2.css';
import { FaArrowRight, FaShoppingCart } from "react-icons/fa";
import culinary_photo from '../../assessts/Images/gallery/drink2.jpg';
import sellingPhoto1 from '../../assessts/Images/Hand Ok.png';
import sellingPhoto2 from '../../assessts/Images/Organic Seo.png';
import sellingPhoto3 from '../../assessts/Images/Healthy Food.png';
import sellingPhoto4 from '../../assessts/Images/Food Delivery Notification.png';
import sellingPhoto5 from '../../assessts/Images/Baby Food 3D Icon.png';
import sellingPhoto6 from '../../assessts/Images/Food Truck.png';
import OrderFood from './OrderFood';
import { motion } from 'framer-motion';

const Home_2 = ({ id, image, itemName, price }) => {
    return (
        <section className="home__2 container" id='home__2'>

            <div className="culinary">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="culinary__image">
                            <img src={culinary_photo} alt="Culinary Photo" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="culinary__details">
                            <h2>Capivating Culinary <span className='span'>Favourites.</span></h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora veritatis molestiae eum. Dignissimos at excepturi atque, pariatur porro saepe rem quasi nostrum repellendus quos alias mollitia eos reprehenderit sit voluptas.</p>
                            <a href="#" className='btn orderNow'>Order Now <FaArrowRight className='right_arrow' /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="best_selling_item">
                <div className="row">
                    <div className="col-12">
                        <div className="selling__title text-center p-2">
                            <h2>Best Selling <span className='span'>Items</span></h2>
                            <p>Discover our most popular items that customers love. Don't miss out on these top sellers!</p>
                        </div>
                    </div>
                </div>

                <div className="choice__of__customer">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="choice__images">
                                <div className="row">
                                    <motion.div className="col-md-4 col-sm-6" initial={{ opacity: 0, translateX: "-50%", translateY: "-50%" }} animate={{ opacity: 1, translateX: "0%", translateY: "0%" }} transition={{ duration: 0.5, delay: 0.5 }}>
                                        <div className="selling__images">
                                            <img src={sellingPhoto1} alt="Selling Photo 1" className='img-fluid' />
                                            <h3>Savour & Replay</h3>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                                        </div>
                                        <div className="selling__images">
                                            <img src={sellingPhoto4} alt="Selling Photo 1" className='img-fluid' />
                                            <h3>Delivery Notification</h3>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                                        </div>
                                    </motion.div>
                                    <motion.div className="col-md-4 col-sm-6" initial={{ opacity: 0, translateX: "-50%", translateY: "-50%" }} animate={{ opacity: 1, translateX: "0%", translateY: "0%" }} transition={{ duration: 0.5, delay: 0.85 }}>
                                        <div className="selling__images">
                                            <img src={sellingPhoto3} alt="Selling Photo 1" className='img-fluid' />
                                            <h3>Warm & Enjoy</h3>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                                        </div>
                                        <div className="selling__images">
                                            <img src={sellingPhoto2} alt="Selling Photo 1" className='img-fluid' />
                                            <h3>Organic Food</h3>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                                        </div>
                                    </motion.div>
                                    <motion.div className="col-md-4 col-sm-12" initial={{ opacity: 0, translateX: "-50%", translateY: "-50%" }} animate={{ opacity: 1, translateX: "0%", translateY: "0%" }} transition={{ duration: 0.5, delay: 1.2 }}>
                                        <div className="selling__images">
                                            <img src={sellingPhoto5} alt="Selling Photo 1" className='img-fluid' />
                                            <h3>Baby Food</h3>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                                        </div>
                                        <div className="selling__images">
                                            <img src={sellingPhoto6} alt="Selling Photo 1" className='img-fluid' />
                                            <h3>Food Delivery</h3>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-sm-12 p-4">
                            <h2>The Choice of <span className='span'>Customers</span></h2>
                            <p style={{ textAlign: "justify" }} className='selling__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque dicta architecto aut quia reprehenderit non minus porro numquam iste omnis dolor saepe iure incidunt dolorum quidem, est doloribus assumenda.</p>
                            <a href="#" className='btn viewMore'>
                                View More
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="handpicked__items">
                <div className="row">
                    <div className="col-12">
                        <div className="handpicked__title p-3">
                            <h2>Handpicked Culinary <span className="span">Masterpieces</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum incidunt iusto distinctio optio debitis poro molestias nobis repellendus.</p>
                        </div>
                    </div>
                </div>

                <div className="order-food-items">
                    <div className="food-items">
                        {OrderFood.map((item) => (
                            <div key={item.id} className="food-item">
                                <img src={item.image} alt={item.name} className='img-fluid' />
                                <div className="food__details">
                                    <h3>{item.itemName}</h3>
                                    <p>Price: {item.price}</p>
                                </div>
                                <button className='btn viewMore'>View More</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="contact" >
                <div className="row">
                    <div className="col-12">
                        <div className="contact__form">
                            <input type="email" className='email' placeholder='Enter Your Email' />
                            <h4>Elevate Your Dining Experience with a Reserved Table at <span className="span">Fast Food</span></h4>
                            <a href="#" className='btn'>Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog p-4 my-3">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Our <span className="span">Blog</span></h2>
                        <p className='w-100 mx-auto text-center' style={{ fontSize: "0.9rem", textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magnam voluptates maiores vel atque minus ad optio neque.</p>
                    </div>
                </div>

                <div className="blog__content">
                    <div className="row p-4">
                        <div className="col-md-6 col-sm-12">
                            <p>April 2, 2024</p>
                            <h2>The Culinary Canvas: <span className="span">
                                Artistry on a Plate Buffet
                            </span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi explicabo in similique quis vitae, quia dolore necessitatibus commodi minus distinctio delectus. Temporibus eligendi voluptatibus nostrum laboriosam facilis nisi corporis.</p>
                            <a href="#">Read More</a>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p>April 2, 2024</p>
                            <h2>Tasting Traditions: <span className="span">
                                A Culinary and Odyssey
                            </span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi explicabo in similique quis vitae, quia dolore necessitatibus commodi minus distinctio delectus. Temporibus eligendi voluptatibus nostrum laboriosam facilis nisi corporis.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Home_2