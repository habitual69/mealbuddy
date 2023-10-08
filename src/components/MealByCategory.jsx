import React, { useState, useEffect } from 'react';
import { getMealByCategory } from './apiFunction';

const categories = [
  "Beef", "Vegetarian", "Chicken", "Dessert", "Lamb", "Miscellaneous",
  "Pork", "Pasta", "Side", "Seafood", "Vegan", "Breakfast", "Goat"
];

function MealByCategory() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      getMealByCategory(selectedCategory).then(data => {
        setMeals(data);
      });
    }
  }, [selectedCategory]);

  return (
    <div className="p-4">
      {!selectedCategory ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(category => (
            <div 
              key={category} 
              className="bg-orange-500 p-4 cursor-pointer hover:bg-orange-900 transition duration" 
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button className="mb-4 text-white bg-orange-500 p-2" onClick={() => setSelectedCategory(null)}>Back to Categories</button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {meals.map(meal => (
              <div key={meal.idMeal} className="bg-gray-50 rounded-lg">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover mb-2 rounded-t-lg" />
                <h3 className="font-bold text-gray-950 text-center">{meal.strMeal}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MealByCategory;
