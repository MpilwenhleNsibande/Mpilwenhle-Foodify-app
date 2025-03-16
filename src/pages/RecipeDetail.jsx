import { useParams, useLocation } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux"; 
import { addFavorite, removeFavorite } from "../redux/favoritesSlice"; 
import { useState, useEffect } from "react"; 

const RecipeDetail = () => {
  const { id } = useParams(); // Extracting the recipe ID from the URL params
  const [recipe, setRecipe] = useState(null); // State for storing the recipe data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [isFavorite, setIsFavorite] = useState(false); // State to track whether the recipe is favorited
  const dispatch = useDispatch(); // Dispatch function for Redux actions

  // Accessing the list of favorite recipes from Redux store
  const favorites = useSelector((state) => state.favorites);

  // Getting the current location (URL) using useLocation hook
  const location = useLocation();

  // Function to fetch recipe data by ID from the API
  const fetchRecipeById = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals[0]; // Returning the first recipe
  };

  // Effect hook to fetch the recipe data when the component mounts or the ID/favorites change
  useEffect(() => {
    const loadRecipe = async () => {
      try {
        const data = await fetchRecipeById(id); // Fetching the recipe data
        setRecipe(data); // Setting the recipe data in state
        setLoading(false); // Setting loading to false after the recipe is fetched

        // Checking if the recipe is in the list of favorites
        const isFav = favorites.some((fav) => fav.idMeal === id);
        setIsFavorite(isFav); // Updating the favorite state
      } catch (error) {
        console.error("Error fetching recipe:", error); // Error handling
        setLoading(false); // Setting loading to false even if there’s an error
      }
    };

    loadRecipe(); // Calling the loadRecipe function
  }, [id, favorites]); // Re-running the effect when ID or favorites change

  // Function to toggle the favorite status of the recipe
  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe)); // Dispatching action to remove from favorites
    } else {
      dispatch(addFavorite(recipe)); // Dispatching action to add to favorites
    }
    setIsFavorite(!isFavorite); // Toggling the favorite status locally
  };

  if (loading) return <p>Loading recipe details, please wait...</p>; // Showing loading message while the recipe is being fetched
  if (!recipe) return <p>Recipe not found.</p>; // Showing error if recipe data is not found

  // Checking if the current page is the recipe details page
  const isDetailsPage = location.pathname.includes("recipe");

  return (
    <div className="recipe-detail">
      <h1>{recipe.strMeal}</h1> {/* Recipe name */}
      <img src={recipe.strMealThumb} alt={recipe.strMeal} /> {/* Recipe image */}
      
      {/* Add/Remove from favorites button */}
      <div className="det-fav">
        <button
         onClick={toggleFavorite}
         className={isDetailsPage ? "details-page-button" : "home-page-button"}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"} {/* Button text changes based on favorite status */}
        </button>
      </div>

      <h2>Ingredients</h2>
      <ul className="ingre-par">
        {/* Looping through the ingredients (max 20) */}
        {Array.from({ length: 20 }).map((_, index) => {
          const ingredient = recipe[`strIngredient${index + 1}`]; // Getting ingredient name
          const measure = recipe[`strMeasure${index + 1}`]; // Getting measurement
          return (
            ingredient && (
              <li key={index}>
                {measure} {ingredient} {/* Displaying ingredient and measure */}
              </li>
            )
          );
        })}
      </ul>
      
      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p> {/* Displaying recipe instructions */}
    </div>
  );
};

export default RecipeDetail; 
