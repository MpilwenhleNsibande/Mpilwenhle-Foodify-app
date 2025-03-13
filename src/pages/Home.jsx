import useFetchTrending from "../hooks/useFetchTrending";
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer"; // Import footer

const Home = () => {
  const { recipes, loading } = useFetchTrending();

  return (
    <div>
      <h1>Trending Recipes</h1>
      {loading ? (
        <p>Loading recipes...</p>
      ) : (
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
