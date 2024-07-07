import React from 'react';
import './Profile.css';
import logo from '../../assessts/Images/Food App Logo.png';
import foodDelivery from '../../assessts/Images/Food Delivery.png';

const Profile = ({ user }) => {
    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <div className="logo__container">
                <img src={logo} alt="Logo" className="home__img" />
                <h3 className="home__name">Welcome to Grillella
                    <img src={foodDelivery} alt="Food Delivery Image" className="foodDelivery" />
                </h3>
            </div>
            <div className="profile-details">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>City:</strong> {user.city}</p>
                <p><strong>Gender:</strong> {user.gender}</p>
            </div>
        </div>
    );
};

export default Profile;
