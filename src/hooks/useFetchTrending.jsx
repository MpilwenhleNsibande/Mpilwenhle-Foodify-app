import { useState, useEffect } from "react";
import { fetchTrendingRecipes } from "../api/mealAPI";

const useFetchTrending = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecipes = async () => {
      const data = await fetchTrendingRecipes();
      setRecipes(data);
      setLoading(false);
    };

    loadRecipes();
  }, []);

  return { recipes, loading };
};

export default useFetchTrending;
