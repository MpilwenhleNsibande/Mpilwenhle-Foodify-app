import React, { useState } from "react";
import video1 from "../assets/video-1.mp4"; 
import coverImage from "../assets/food-1.jpg"; 
import middleImage from "../assets/food-2.jpg"; 
import bottomImage from "../assets/food-3.png"; 
import Footer from "../components/Footer"; 
import "../styles/InterfacePage.css"; 

const InterfacePage = () => {
  // State for managing FAQ visibility
  const [activeFAQ, setActiveFAQ] = useState(null); // Initializing state to track which FAQ is active (visible)

  // Function to toggle FAQ visibility
  const handleFAQClick = (index) => {
    setActiveFAQ(index === activeFAQ ? null : index); // Toggle answer visibility based on the clicked FAQ
  };

  return (
    <div className="interface-container">
      {/* The cover image with the slogan or motto */}
      <div className="cover-section">
        <img src={coverImage} alt="Cover" className="cover-image" /> {/* Displaying the cover image */}
        <h1 className="slogan">Recipes like no other, delight in every bite!</h1> {/* Displaying the slogan */}
      </div>

      {/* The image & Video/Text Section */}
      <div className="image-video-text-section">
        <img src={middleImage} alt="Middle" className="middle-image" /> {/* Displaying a middle image */}
        <div className="text-box">
          <video controls autoPlay muted className="intro-video"> {/* Displaying a video with controls */}
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2>Explore Our Flavored Recipes</h2> {/* Heading for the text section */}
          <p>Every bite tells a story, and every recipe is a journey of flavors. Our recipes don't just give you delicious food but delicious healthy food</p> {/* Text description */}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2> {/* Displaying the FAQ section heading */}
        
        {/* FAQ item for "What ingredients do I need for a recipe?" */}
        <div className="faq-item-container">
          <div className="faq-item">
            <div className="faq-question" onClick={() => handleFAQClick(0)}>
              <h3>What ingredients do I need for a recipe?</h3>
              <span className="toggle-icon">{activeFAQ === 0 ? "-" : "+"}</span> {/* Toggle icon to show/hide the answer */}
            </div>
            {activeFAQ === 0 && <p className="faq-answer">Each recipe will list all the ingredients needed. Check the ingredient list at the top of the recipe for detailed amounts.</p>} {/* Displaying the answer when clicked */}
          </div>
        </div>
        
        {/* FAQ item for "Can I substitute ingredients?" */}
        <div className="faq-item-container">
          <div className="faq-item">
            <div className="faq-question" onClick={() => handleFAQClick(1)}>
              <h3>Can I substitute ingredients?</h3>
              <span className="toggle-icon">{activeFAQ === 1 ? "-" : "+"}</span> 
            </div>
            {activeFAQ === 1 && <p className="faq-answer">Yes, many ingredients can be substituted. Look for common swaps. For example, if the recipe calls for buttermilk and you do not have any, you can use regular milk mixed with a tablespoon of lemon juice or vinegar. Let us know the ingredient you would like to replace, and we can suggest the best alternative for your recipe or ask our community for suggestions!</p>} 
          </div>
        </div>

        {/* FAQ item for "How do I store leftovers?" */}
        <div className="faq-item-container">
          <div className="faq-item">
            <div className="faq-question" onClick={() => handleFAQClick(2)}>
              <h3>How do I know if I’ve followed the recipe correctly?</h3>
              <span className="toggle-icon">{activeFAQ === 2 ? "-" : "+"}</span> 
            </div>
            {activeFAQ === 2 && <p className="faq-answer"> If you’ve followed the recipe steps and measurements accurately, your dish should turn out as described. Look for visual cues or use tools like a kitchen thermometer to check doneness. If you are unsure, feel free to reach out to us  -  we are happy to help troubleshoot and ensure your cooking success!</p>}
          </div>
        </div>
      </div>

      {/* Inquiry About Recipe Section */}
      <div className="inquiry-section">
        <h2>Have a Question About a Recipe?</h2> {/* Heading for the inquiry section */}
        <p>If you have any questions or need assistance with a recipe, feel free to reach out to us!</p> {/* Prompting the user to contact */}
        
        {/* Inquiry form for the user to send a message */}
        <form className="inquiry-form" method="POST" action="mailto:your-email@example.com">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required /> {/* Name input field */}
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required /> {/* Email input field */}

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea> {/* Message textarea field */}

          <button type="submit" className="submit-btn">Send Inquiry</button> {/* Submit button */}
        </form>
      </div>

      {/* Footer */}
      <Footer /> 
    </div>
  );
};

export default InterfacePage; 

