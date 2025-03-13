import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Fetch trending meals (random meals as an alternative)
export const fetchTrendingRecipes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=`);
    return response.data.meals || [];
  } catch (error) {
    console.error("Error fetching trending recipes:", error);
    return [];
  }
};

// Fetch a recipe by ID
export const fetchRecipeById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    return response.data.meals ? response.data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return null;
  }
};
