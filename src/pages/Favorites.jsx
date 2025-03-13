import { useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer"; // Import footer

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites); // ✅ Ensure this matches the reducer name in store

  if (!favorites || favorites.length === 0) {
    return <p>No favorite recipes yet.</p>; // ✅ Handle empty state safely
  }

  return (
    <div>
      <h1>My Favorite Recipes</h1>
      <div className="recipe-grid">
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} isFavorite={true} />
        ))}
      </div>
      {/* Footer */}
          <Footer />
    </div>
  );
};

export default Favorites;
