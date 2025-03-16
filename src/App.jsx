import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Navbar from "./components/Navbar";
import SearchResults from "./pages/SearchResults";
import Favorites from "./pages/Favorites";
import InterfacePage from "./pages/InterfacePage";
import NotFound from "./pages/NotFound";

// The main App component where routing is set up
const App = () => {
  return (
    <div>
      {/* Navbar component rendered at the top of the app on all pages */}
      <Navbar />
      
      <div className="main-content">
        {/* Routes container where different paths will be matched */}
        <Routes>
        
          {/* Route for the home page, accessible at '/' */}
          <Route path="/" element={<InterfacePage />} />
          
          {/* Route for displaying the list of recipes, accessible at '/recipes' */}
          <Route path="/recipes" element={<Home />} />
          
          {/* Route for showing detailed information of a specific recipe,
               the 'id' is a dynamic parameter used to fetch the recipe details */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          
          {/* Route for displaying the user's favorite recipes, accessible at '/favorites' */}
          <Route path="/favorites" element={<Favorites />} />
          
          {/* Route for displaying search results, accessible at '/search/:query' */}
          <Route path="/search/:query" element={<SearchResults />} />
          
          {/* Catch-all route for undefined paths,
               it will render the NotFound component when no other route matches */}
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </div>
    </div>
  );
};

// Export the App component as default for use in other files
export default App;
