import React from 'react';
import './Faq.css';

const Faq = () => {
    return (
        <div className="faq-container">
            <h2 className='text-center'>FAQ's</h2>
            <div className="faq-item">
                <h3>What payment methods do you accept?</h3>
                <p>We accept all major credit and debit cards, as well as PayPal.</p>
            </div>
            <div className="faq-item">
                <h3>Is there a minimum order for delivery?</h3>
                <p>Yes, our minimum order amount for delivery is $20 USD.</p>
            </div>
            <div className="faq-item">
                <h3>Do you offer catering services?</h3>
                <p>Yes, we offer catering services for events. Please contact us for more information.</p>
            </div>
            <div className="faq-item">
                <h3>Can I modify my order after placing it?</h3>
                <p>Unfortunately, orders cannot be modified once they have been placed. Please ensure your order is accurate before confirming.</p>
            </div>
        </div>
    );
}

export default Faq;
