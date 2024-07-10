import React, { useEffect, useState } from 'react';
import './Cart.css';
import { FaTrashAlt } from "react-icons/fa";
import orderPlaced from '../../assessts/Images/place order.png'

const Cart = ({ cart, setCart, deleteFromCart }) => {
    const [showModal, setShowModal] = useState(false)

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart))
        }
    }, [setCart])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handlePlaceOrder = () => {
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            setCart([]);
            localStorage.removeItem('cart');
            window.location.href = '/';
        }, 5000);
    };


    return (
        <>
            <div className="cart">
                <h2 className='cart__title'>Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="cart-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index}>
                                        <td><img src={item.image} alt={item.name} /></td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <button onClick={() => deleteFromCart(index)} className="btn-delete">
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="total">
                            <p><strong>Total</strong> <strong> ${calculateTotal()}</strong></p>
                        </div>
                        <button onClick={handlePlaceOrder} className="btn-place-order">Place Order</button>
                    </div>
                )}
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal__content">
                        <div className="order_placed">
                            <h2 className='text-success'>Order Placed Successfully!
                                <img src={orderPlaced} className='img-fluid orderTheFood placeOrder' />
                            </h2>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
