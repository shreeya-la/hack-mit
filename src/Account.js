import React from 'react';
import './Account.css';
import profileImage from './img/tim.png'; // Ensure this points to the actual image path

function Account() {
    return (
        <div className="account-details">
            <div className="profile">
                <img src={profileImage} alt="Profile" className="profile-image" />
            </div>
            <div className="details">
            <h1>Tim the Beaver</h1>
            <p>77 Massachusetts Ave, Cambridge, MA 02139</p>
            <p>617-857-7890</p>
            <a href="#bank">Linked Bank Account</a>
            <div className="edit-container">
                <button className="edit-button">Edit Account Details</button>
            </div>
            </div>
        </div>
    );
}

export default Account;