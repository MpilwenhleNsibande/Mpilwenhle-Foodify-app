import { useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer"; 

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites); // Accessing the favorites from the redux store
  // If no favorites are found, display a message indicating no favorite recipes
  if (!favorites || favorites.length === 0) {
    return <p>No favorite recipes yet, please add some recipes to your favorites.</p>; // Displaying a message if no favorites exist
  }

  return (
    <div className="fav">
      <h1>My Favorite Recipes</h1>
      <div className="recipe-grid">
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} isFavorite={true} /> /* Rendering RecipeCard with recipe details */
        ))}
      </div>

      {/* Footer */}
          <Footer />
    </div>
  );
};

export default Favorites;
