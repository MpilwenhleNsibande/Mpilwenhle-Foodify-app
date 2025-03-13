import { useParams, useLocation } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";
import { useState, useEffect } from "react";

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  // Accessing favorites from the Redux store
  const favorites = useSelector((state) => state.favorites);

  // Getting current location (URL)
  const location = useLocation();

  // Function to fetch recipe by ID
  const fetchRecipeById = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals[0]; 
  };

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        const data = await fetchRecipeById(id);
        setRecipe(data);
        setLoading(false);
        // Check if this recipe is in favorites
        const isFav = favorites.some((fav) => fav.idMeal === id);
        setIsFavorite(isFav);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setLoading(false);
      }
    };

    loadRecipe();
  }, [id, favorites]);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe));
    } else {
      dispatch(addFavorite(recipe));
    }
    setIsFavorite(!isFavorite);
  };

  if (loading) return <p>Loading recipe details...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  // Determine if the current page is the recipe details page
  const isDetailsPage = location.pathname.includes("recipe");

  return (
    <div className="recipe-detail">
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      
      {/* Apply different styles or classes for the button based on the page */}
      <div className="det-fav">
        <button
         onClick={toggleFavorite}
         className={isDetailsPage ? "details-page-button" : "home-page-button"}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>

      <h2>Ingredients</h2>
      <ul>
        {Array.from({ length: 20 }).map((_, index) => {
          const ingredient = recipe[`strIngredient${index + 1}`];
          const measure = recipe[`strMeasure${index + 1}`];
          return (
            ingredient && (
              <li key={index}>
                {measure} {ingredient}
              </li>
            )
          );
        })}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;
