import React, { useState, useEffect } from 'react';
import { searchMeals } from './apiFunction';
import { IoCloseCircle } from 'react-icons/io5';

const topTenMeals = [
  "Bread omelette",
  "Tortang Talong",
  "Beef Caldereta",
  "Chicken Handi",
  "Pierogi",
  "Moussaka",
  "Matar Paneer",
  "Baingan Bharta",
  "Potato Gratin with Chicken",
  "Spaghetti alla Carbonara"
];

const mealOfTheMonth = [
  "Bigos (Hunters Stew)",
  "Japanese Katsudon",
  "Beef Caldereta",
  "Grilled",
  "Chicken Alfredo Primavera",
  "Kentucky Fried Chicken",
  "Thai Green Curry",
  "Chicken & mushroom Hotpot",
  "Honey Teriyaki Salmon",
  "Teriyaki Chicken Casserole",
  "Katsu Chicken curry",
  "Chelsea Buns",
];

function SuggestedMeal() {
  const [meals, setMeals] = useState([]);
  const [monthMeals, setMonthMeals] = useState([]);
  const [activeMeal, setActiveMeal] = useState(null);

  useEffect(() => {
    Promise.all(topTenMeals.map(meal => searchMeals(meal)))
      .then(results => {
        const fetchedMeals = results.filter(result => result && result.length > 0).map(result => result[0]);
        setMeals(fetchedMeals);
      })
      .catch(error => {
        console.error("Error fetching top 10 meals:", error);
      });

    Promise.all(mealOfTheMonth.map(meal => searchMeals(meal)))
      .then(results => {
        const fetchedMonthMeals = results.filter(result => result && result.length > 0).map(result => result[0]);
        setMonthMeals(fetchedMonthMeals);
      })
      .catch(error => {
        console.error("Error fetching meals of the month:", error);
      });
  }, []);

  return (
    <div className="p-4 relative text-gray-900">
      <h2 className="text-2xl font-bold mb-4 bg-gray-50 p-2 rounded-xl text-center">Top 10 Meals</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {meals.map(meal => (
          <div key={meal.idMeal} onClick={() => setActiveMeal(meal)} className="rounded overflow-hidden shadow-md bg-slate-50 hover:scale-105 cursor-pointer transition-transform duration-300">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover" />
            <div className="px-4 py-2">
              <h3 className="font-bold text-xl mb-2 text-center">{meal.strMeal}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold mb-4 bg-gray-50 p-2 rounded-xl text-center my-8">Meal of the Month</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {monthMeals.map(meal => (
          <div key={meal.idMeal} onClick={() => setActiveMeal(meal)} className='relative rounded-xl transition-transform scroll-smooth duration-300 cursor-pointer'>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-64 object-cover rounded-xl shadow-md" />
            <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>
            <h3 className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 font-bold text-xl text-center text-gray-50 p-2 uppercase">{meal.strMeal}</h3>
          </div>
        ))}
      </div> 

      {activeMeal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-10">
          <div className="relative bg-white rounded-lg p-6 w-3/4 h-3/4 overflow-y-auto no-scrollbar">
            <img src={activeMeal.strMealThumb} alt={activeMeal.strMeal} className="w-full h-64 object-cover rounded mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-orange-500">{activeMeal.strMeal}</h2>
            <h3 className="font-bold mb-2 text-orange-500">Ingredients:</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2 text-orange-500">Item(s)</th>
                  <th className="border border-gray-400 px-4 py-2 text-orange-500">Quantities</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(20).keys()].map(i => {
                  const ingredient = activeMeal[`strIngredient${i + 1}`];
                  const measure = activeMeal[`strMeasure${i + 1}`];
                  if (ingredient && ingredient.trim() !== "") {
                    return (
                      <tr key={i}>
                        <td className="border border-gray-400 px-4 py-2">{ingredient}</td>
                        <td className="border border-gray-400 px-4 py-2">{measure}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
            <h3 className="font-bold mt-4 mb-2 text-orange-500">Instructions:</h3>
            <p>{activeMeal.strInstructions}</p>
            <button className="absolute top-0 right-0 p-2 text-orange-500 hover:text-orange-700" onClick={() => setActiveMeal(null)}>
                <IoCloseCircle className="text-4xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SuggestedMeal;
