import React from 'react';
import PropTypes from 'prop-types';  

const MealResult = ({ meal }) => {
    if (!meal) {  // Check if meal prop is null or undefined
        return <div className="flex justify-center items-center h-screen text-xl text-gray-600">No result found.</div>;
    }
    return (
        <div className="bg-white rounded-lg shadow-lg mt-6 mb-6 text-black">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-[500px] rounded-t-lg mb-4 object-cover" />
            <h2 className="text-2xl font-bold mb-4 ml-10 mr-20">{meal.strMeal}</h2>
            <p className="font-semibold text-orange-500 ml-10 mr-20">Category: {meal.strCategory} | Cuisine: {meal.strArea}</p>
            <p className="mt-2 mb-4 text-gray-700 italic ml-10 mr-20">Tags: {meal.strTags}</p>
            <p className="mt-4 mb-2 font-semibold text-lg ml-10 mr-20">Instructions:</p>
            <p className="text-gray-600 ml-10 mr-20">{meal.strInstructions}</p>
            <p className="mt-4 mb-2 font-semibold text-lg ml-10 mr-20">Ingredients:</p>
            <ul className="list-disc list-inside text-gray-600 ml-10 mr-20 mb-5">
                {[...Array(20).keys()].map(i => {
                    const ingredient = meal[`strIngredient${i + 1}`];
                    const measure = meal[`strMeasure${i + 1}`];
                    if (ingredient && ingredient.trim() !== "") {
                        return (
                            <li key={i} className="mb-1">
                                {ingredient}: {measure}
                            </li>
                        );
                    }
                    return null;  // Return null to satisfy React's map requirements
                })}
            </ul>
            {meal.strYoutube &&
            <button className="mt-4 ml-10 mr-20 mb-10 bg-orange-500 p-2 w-48 rounded-xl text-center hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                <a href={meal.strYoutube} target="_blank" rel="noreferrer" className="text-white">Watch Recipe Video</a>
            </button>}
        </div>
    );
}

// Add propTypes validation for the props
MealResult.propTypes = {
    meal: PropTypes.shape({
        strMeal: PropTypes.string.isRequired,
        strMealThumb: PropTypes.string.isRequired,
        strCategory: PropTypes.string,
        strArea: PropTypes.string,
        strInstructions: PropTypes.string.isRequired,
        strTags: PropTypes.string,
        strYoutube: PropTypes.string,
    })
};

export default MealResult;
