import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Initializing the searchQuery state
  const navigate = useNavigate(); // Getting the navigate function to handle page navigation

  // Defining the handleSearch function to navigate to the search page with the query
  const handleSearch = () => {
    if (searchQuery.trim()) { // Checking if the searchQuery is not empty
      navigate(`/search/${searchQuery}`); // Navigating to the search results page with the search query
    }
  };

  return (
    <nav>
      {/* Rendering the logo section that links to the home page */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Rendering the navigation links for Home, Recipes, and Favorites */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>

      {/* Rendering the search container with an input field and search button */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search meals..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Updating searchQuery on input change
        />
        <button onClick={handleSearch}>Search</button> {/* Triggering the search on button click */}
      </div>
    </nav>
  );
};

export default Navbar; // Exporting the Navbar component to use in other parts of the app

