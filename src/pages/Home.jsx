import useFetchTrending from "../hooks/useFetchTrending";
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer"; 

const Home = () => {
  const { recipes, loading } = useFetchTrending(); // Fetching trending recipes and loading state using custom hook

  return (
    <div className="home-1">
      <h1>Trending Recipes</h1> {/* Displaying the title for the home page */}

      {/* Conditionally rendering content based on loading state */}
      {loading ? (
        <p>Loading recipes, please wait...</p> // Displaying loading message while fetching recipes
      ) : (
        <div className="recipe-grid">
          {/* Mapping over the fetched recipes and rendering RecipeCard components for each */}
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} /> /* Rendering RecipeCard with recipe details */
          ))}
        </div>
      )}

      {/* Footer */}
      <Footer /> 
    </div>
  );
};

export default Home; 
