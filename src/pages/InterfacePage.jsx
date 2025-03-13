import React from "react";
import video1 from "../assets/video-1.mp4"; 
import coverImage from "../assets/food-1.jpg"; 
import middleImage from "../assets/food-2.jpg"; 
import bottomImage from "../assets/food-3.png"; 
import Footer from "../components/Footer"; 
import "../styles/InterfacePage.css"; 

const InterfacePage = () => {
  return (
    <div className="interface-container">
      {/* The cover image with the slogan or motto */}
      <div className="cover-section">
        <img src={coverImage} alt="Cover" className="cover-image" />
        <h1 className="slogan">Recipes Like No Other, Delight in Every Bite! </h1>
      </div>

      {/* The image & Video/Text Section */}
      <div className="image-video-text-section">
        
        <img src={middleImage} alt="Middle" className="middle-image" />

        
        <div className="video-text-box">
          <video controls autoPlay muted className="intro-video">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-box">
            <h2>Explore Our Flavors</h2>
            <p>Every Bite Tells a Story, and Every Recipe is a Journey of Flavors!🍽️✨.</p>
          </div>
        </div>
      </div>

      {/* The image before the footer */}
      <div className="last-image-section">
        <img src={bottomImage} alt="Bottom" className="bottom-image" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InterfacePage;
