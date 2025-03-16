import { useState, useEffect } from "react";
import { fetchTrendingRecipes } from "../api/mealAPI";

const useFetchTrending = () => {
  const [recipes, setRecipes] = useState([]); // Initializing state to store recipes
  const [loading, setLoading] = useState(true); // Initializing state to manage loading state

  // Using useEffect to fetch data when the component is mounted
  useEffect(() => {
    const loadRecipes = async () => {
      const data = await fetchTrendingRecipes(); // Fetching trending recipes from the API
      setRecipes(data); // Setting the fetched recipes to state
      setLoading(false); // Setting loading state to false once data is fetched
    };

    loadRecipes(); // Triggering the loadRecipes function to fetch data
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return { recipes, loading }; // Returning the recipes and loading state to be used in the component
};

export default useFetchTrending; // Exporting the custom hook for use in other components
