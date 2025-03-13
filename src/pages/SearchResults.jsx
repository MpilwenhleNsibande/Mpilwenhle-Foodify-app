import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const { query } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      setMeals(data.meals || []);
      setLoading(false);
    };

    fetchMeals();
  }, [query]);

  if (loading) return <p>Loading search results...</p>;
  if (!meals.length) return <p>No meals found for "{query}".</p>;

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <div className="meal-list">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-card">
            <Link to={`/recipe/${meal.idMeal}`}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
