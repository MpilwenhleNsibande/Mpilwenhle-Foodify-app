import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch(); // Getting the dispatch function from redux to dispatch actions
  const favorites = useSelector((state) => state.favorites) || []; // Selecting the favorites from the redux store

  // Checking if the current recipe is already in the favorites list
  const isFavorite = Array.isArray(favorites) && favorites.some((fav) => fav.idMeal === recipe.idMeal);

  // Defining the handleFavoriteToggle function to add or remove the recipe from favorites
  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe)); // Dispatching removeFavorite action if the recipe is already a favorite
    } else {
      dispatch(addFavorite(recipe)); // Dispatching addFavorite action if the recipe is not yet a favorite
    }
  };

  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} /> {/* Displaying the recipe image */}
      <h3>{recipe.strMeal}</h3> {/* Displaying the recipe name */}

      {/* Heart button for adding/removing favorites */}
      <button
        className={`addToFavorites ${isFavorite ? "favorited" : ""}`} // Applying "favorited" class if the recipe is in favorites
        onClick={handleFavoriteToggle}> {/* Triggering handleFavoriteToggle on click */}
        <span className="heart">
          {isFavorite ? "❤️" : "🤍"} {/* Full heart when favorited, empty heart when not favorited */}
        </span>
        <span className="text">
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"} {/* Button text changes based on favorite status */}
        </span>
      </button>

      <Link to={`/recipe/${recipe.idMeal}`}>View Details</Link> {/* Linking to the recipe details page */}
    </div>
  );
};

export default RecipeCard; 

