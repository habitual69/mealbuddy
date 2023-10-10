import React, { useState, useEffect } from 'react';
import { getMealByCategory, getMealById } from './apiFunction';
import MealResult from './MealResult';

const categories = [
  "Beef", "Vegetarian", "Chicken", "Dessert", "Lamb", "Miscellaneous",
  "Pork", "Pasta", "Side", "Seafood", "Vegan", "Breakfast", "Goat"
];

function MealByCategory() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      getMealByCategory(selectedCategory).then(data => {
        setMeals(data);
      });
    }
  }, [selectedCategory]);

  const handleMealClick = async (mealId) => {
    const mealDetails = await getMealById(mealId);
    setSelectedMeal(mealDetails);
  };

  return (
    <div className="p-4">
      {!selectedCategory ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(category => (
            <div 
              key={category} 
              className="bg-[#1f2430] p-4 cursor-pointer hover:bg-[#292930] transition duration text-[#fcc133]" 
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button className="mb-4 text-[#fcc133] bg-[#1f2430] p-2" onClick={() => { setSelectedCategory(null); setSelectedMeal(null); }}>Back to Categories</button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {meals.map(meal => (
              <div key={meal.idMeal} className="bg-[#1f2430] rounded-lg">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover mb-2 rounded-t-lg" />
                <h3 
                    className="font-bold text-[#fcc133] text-center cursor-pointer"
                    onClick={() => handleMealClick(meal.idMeal)}
                >
                    {meal.strMeal}
                </h3>
              </div>
            ))}
          </div>
          {selectedMeal && (
            <MealResult meal={selectedMeal} />
          )}
        </div>
      )}
    </div>
  );
}

export default MealByCategory;
