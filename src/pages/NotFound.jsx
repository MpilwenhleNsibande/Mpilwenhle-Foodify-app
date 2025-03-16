import React from "react";

const NotFound = () => {
  return (
    <div className="not-found-container">
      {/* Displaying a "no entry" icon */}
      <div className="icon">🚫</div>
      
      {/* Main title for the 404 error */}
      <h1>404 - Page Not Found</h1>
      
      {/* Message informing the user that the page doesn't exist */}
      <p>Sorry, the page you are looking for does not exist.</p>
      
      {/* Button that redirects the user back to the home page */}
      <button className="back-home-btn" onClick={() => window.location.href = '/'}>
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFound; 