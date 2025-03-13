import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites) || []; 

  
  const isFavorite = Array.isArray(favorites) && favorites.some((fav) => fav.idMeal === recipe.idMeal);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>

      {/* Heart button for adding/removing favorites */}
      <button
        className={`addToFavorites ${isFavorite ? "favorited" : ""}`}
        onClick={handleFavoriteToggle}>
        <span className="heart">
        {isFavorite ? "❤️" : "🤍"} {/* Full heart when favorited, empty heart otherwise */}
        </span>
        <span className="text">
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </span>
      </button>

      <Link to={`/recipe/${recipe.idMeal}`}>View Details</Link>
    </div>
  );
};

export default RecipeCard;
