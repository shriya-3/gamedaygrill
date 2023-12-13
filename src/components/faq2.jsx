import React, { useState } from 'react';
import './faq2.css';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const getIconClass = (index) => {
    return activeIndex === index ? 'minus' : 'plus';
  };

  return (
    <div className="accordion-container">
      <h2>Frequently Asked Questions</h2>

      <div className="accordion-group">
        <button
          className={`accordion ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => toggleAccordion(0)}
        >
          Why am I not able to join Game Day Grill Rewards?
          <span className={`a_icon ${getIconClass(0)}`}>{'>'}</span>
        </button>
        <div className={`panel ${activeIndex === 0 ? 'active' : ''}`}>
          <p>
          Your email may have been used to create a Game Day Grill Account before. If you forgot your password, reset it and login again.  
          </p>
        </div>
      </div>

      <div className="accordion-group">
        <button
          className={`accordion ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => toggleAccordion(1)}
        >
          How do I get points?
          <span className={`a_icon ${getIconClass(1)}`}>{'>'}</span>
        </button>
        <div className={`panel ${activeIndex === 1 ? 'active' : ''}`}>
          <p>
          When ordering online or on app, login to your account and order away, Your points will be automatically added once the order is submitted. When ordering in person, make sure to show the cashier your rewards barcode at the top of the rewards page!
          </p>
        </div>
      </div>

      <div className="accordion-group">
        <button
          className={`accordion ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => toggleAccordion(2)}
        >
          I haven’t received my points yet!
          <span className={`a_icon ${getIconClass(2)}`}>{'>'}</span>
        </button>
        <div className={`panel ${activeIndex === 2 ? 'active' : ''}`}>
          <p>
          Points may take 30 minutes to be added from qualifying orders. In some cases, this might take 24 hours or more. If points still haven’t been added, contact customer support through our contact page. Orders made before the creation of an account, with a gift card, catering orders, or orders placed with a guest account do not qualify.  
          </p>
        </div>
      </div>

      <div className="accordion-group">
        <button
          className={`accordion ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => toggleAccordion(3)}
        >
          Can Game Day Grill cater?
          <span className={`a_icon ${getIconClass(3)}`}>{'>'}</span>
        </button>
        <div className={`panel ${activeIndex === 3 ? 'active' : ''}`}>
          <p>
          Yes, Game Day Grill can cater depending on your location and accepts catering orders up to 3 months in advance. Contact customer service to see if we can cater your event. 
          </p>
        </div>
      </div>

      {/* Group 5 */}
      <div className="accordion-group">
        <button
          className={`accordion ${activeIndex === 4 ? 'active' : ''}`}
          onClick={() => toggleAccordion(4)}
        >
          Which allergens can be found in Game Day Grill?
          <span className={`a_icon ${getIconClass(4)}`}>{'>'}</span>
        </button>
        <div className={`panel ${activeIndex === 4 ? 'active' : ''}`}>
          <p>
          Game Day Grill uses ingredients in our meals that some may be allergic to. To confirm these allergens, view the Allergen & Nutrition chart in the menu page. 
          </p>
        </div>
      </div>

      {/* Group 6 */}
      <div className="accordion-group">
        <button
          className={`accordion ${activeIndex === 5 ? 'active' : ''}`}
          onClick={() => toggleAccordion(5)}
        >
          I have a delivery issue!
          <span className={`a_icon ${getIconClass(5)}`}>{'>'}</span>
        </button>
        <div className={`panel ${activeIndex === 5 ? 'active' : ''}`}>
          <p>
          Contact our customer service through our contact page to solve your issue. If you qualify, you may be eligible to a refund and redelivery. 
          </p>
        </div>
      </div>

      {/* Group 7 */}
      <div className="accordion-group">
        <button
          className={`accordion ${activeIndex === 6 ? 'active' : ''}`}
          onClick={() => toggleAccordion(6)}
        >
          Can I cancel my order?
          <span className={`a_icon ${getIconClass(6)}`}>{'>'}</span>
        </button>
        <div className={`panel ${activeIndex === 6 ? 'active' : ''}`}>
          <p>
          After you place your order, our workers are busy making your meal, so we recommend not canceling orders. Contact our customer service team through our contact us page to cancel orders. Cancellation fees may occur. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
