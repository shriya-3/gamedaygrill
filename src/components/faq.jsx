import React, { useState } from 'react';
import './faq.css'; // Import your CSS file

export default function () {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const sections = [
      {
        label: 'Why am I not able to join Game Day Grill Rewards?',
        content: 'Your email may have been used to create a Game Day Grill Account before. If you forgot your password, reset it and login again.'
      },
      {
        label: 'How do I get points?',
        content: 'When ordering online or on app, login to your account and order away, Your points will be automatically added once the order is submitted. When ordering in person, make sure to show the cashier your rewards barcode at the top of the rewards page!'
      },
      {
        label: 'I have not received my points yet!',
        content: 'Points may take 30 minutes to be added from qualifying orders. In some cases, this might take 24 hours or more. If points still haven’t been added, contact customer support through our contact page. Orders made before the creation of an account, with a gift card, catering orders, or orders placed with a guest account do not qualify.'
      },
      {
        label: 'Can Game Day Grill cater?',
        content: 'Yes, Game Day Grill can cater depending on your location and accepts catering orders up to 3 weeks in advance. Contact customer service to see if we can cater your event.'
      },
      {
        label: 'Which allergens can be found in Game Day Grill?',
        content: 'Game Day Grill uses ingredients in our meals that some may be allergic to. To confirm these allergens, view the Allergen & Nutrition chart in the menu page.'
      },
      {
        label: 'I have a delivery issue!',
        content: 'Contact our customer service through our contact page to solve your issue. If you qualify, you may be eligible to a refund and redelivery.'
      },
      {
        label: 'Can I cancel my order?',
        content: 'After you place your order, our workers are busy making your meal, so we recommend not canceling orders. Contact our customer service team through our contact us page to cancel orders. Cancellation fees may occur.'
      }
    ];
  
    const handleAccordionClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className="accordian_container">
        <hr className='line1'></hr>
        <div className="actual_accordian_container">
            <h2 className="faq">Frequenty Asked Questions</h2>
            {sections.map((section, index) => (
            <div key={index}>
                <button
                className={`accordion ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleAccordionClick(index)}
                >
                {section.label}
                </button>
                <div className={`panel ${activeIndex === index ? 'show' : ''}`}>
                    <div className="panel_content">
                        <p>
                            {section.content}
                        </p>
                    </div>
                </div>
            </div>
            ))}
        </div>
      </div>
    );
  }

