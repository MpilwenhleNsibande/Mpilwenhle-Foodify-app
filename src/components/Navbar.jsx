import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search meals..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
