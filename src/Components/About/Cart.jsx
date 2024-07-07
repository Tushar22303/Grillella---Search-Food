import React from 'react';
import './Cart.css';

const Cart = ({ cart, deleteFromCart }) => {
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
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
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="total">
                            <p><strong>Total</strong> <strong> ${calculateTotal()}</strong></p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
