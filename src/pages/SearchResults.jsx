import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom"; 

// SearchResults component that displays search results based on a query
const SearchResults = () => {
  // Extract the 'query' from the URL params (e.g., if the URL is /search/chicken, 'chicken' is the query)
  const { query } = useParams();

  // State variables to hold search results and loading state
  const [meals, setMeals] = useState([]); // Stores the list of meals fetched from the API
  const [loading, setLoading] = useState(true); // Keeps track of loading state while fetching data

  // useEffect hook to fetch data from the API when the component mounts or the query changes
  useEffect(() => {
    // Fetch function to get meals based on the search query
    const fetchMeals = async () => {
      // Make an API call to search for meals using the query
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json(); // Parse the JSON response from the API

      // If meals are found, update the state with the fetched meals; otherwise, return an empty array
      setMeals(data.meals || []); 
      setLoading(false); // Set loading to false once data is fetched
    };

    fetchMeals(); // Execute the fetchMeals function when the component mounts
  }, [query]); // Depend on the query so that the effect runs when the query changes

  // If the component is still loading, display a loading message
  if (loading) return <p>Loading search results, please wait...</p>;

  // If no meals are found, display a message indicating no results
  if (!meals.length) return <p>No meals found for "{query}".</p>;

  return (
    <div className="search-results">
      <h1>Showing results for "{query}"</h1>
      
      {/* Loop through the meals array and display each meal as a card */}
      <div className="meal-list">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-card">
            {/* Link to navigate to the recipe detail page for the specific meal */}
            <Link to={`/recipe/${meal.idMeal}`}>
              <img src={meal.strMealThumb} alt={meal.strMeal} /> {/* Display meal thumbnail */}
              <button className="search-btn">
                <h3>{meal.strMeal}</h3> {/* Display meal name */}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
