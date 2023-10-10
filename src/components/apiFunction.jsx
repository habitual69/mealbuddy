export const getRandomMeals = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/randomselection.php');
    const data = await response.json();
    return data.meals;
  };
  
  export const searchMeals = async (query) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    return data.meals;
  };
  
  export const getMealByCategory = async (category) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    return data.meals;
  };

  export const getMealById = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals[0];
  };