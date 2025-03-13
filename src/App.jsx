import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Navbar from "./components/Navbar";
import SearchResults from "./pages/SearchResults";
import Favorites from "./pages/Favorites";
import InterfacePage from "./pages/InterfacePage";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<InterfacePage />} />
          <Route path="/recipes" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
      </div>
    </div>
  );
};


export default App;
