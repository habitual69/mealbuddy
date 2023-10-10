import React from 'react';
import PropTypes from 'prop-types';  

const MealResult = ({ meal }) => {
    if (!meal) {  // Check if meal prop is null or undefined
        return <div className="flex justify-center items-center h-screen text-xl text-gray-600">No result found.</div>;
    }
    return (
        <div className="bg-[#1f2430] rounded-lg shadow-lg mt-6 mb-6 text-[#fcc133] p-10">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="mt-2 w-full sm:h-[300px] mb-4 object-cover mx-auto rounded-xl" />
            <h2 className="text-2xl font-bold mb-4 ">{meal.strMeal}</h2>
            <p className="font-semibold text-orange-500 ">Category: {meal.strCategory} | Cuisine: {meal.strArea}</p>
            <p className="mt-2 mb-4 text-[#fcc133] italic ">Tags: {meal.strTags}</p>
            <p className="mt-4 mb-2 font-semibold text-lg  text-[#fcc133]">Instructions:</p>
            <p className="text-white text-justify">{meal.strInstructions}</p>
            <p className="mt-4 mb-2 font-semibold text-lg ">Ingredients:</p>
            <table className="min-w-full  mb-5 border-collapse border border-white">
                <thead>
                    <tr className="text-gray-600">
                        <th className="px-4 py-2 border-b border-r text-[#fcc133]">Items</th>
                        <th className="px-4 py-2 border-b text-[#fcc133]">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(20).keys()].map(i => {
                        const ingredient = meal[`strIngredient${i + 1}`];
                        const measure = meal[`strMeasure${i + 1}`];
                        if (ingredient && ingredient.trim() !== "") {
                            return (
                                <tr key={i} className="text-white">
                                    <td className="px-4 py-2 border-b border-r">{ingredient}</td>
                                    <td className="px-4 py-2 border-b">{measure}</td>
                                </tr>
                            );
                        }
                        return null;  // Return null to satisfy React's map requirements
                    })}
                </tbody>
            </table>
            {meal.strYoutube &&
            <button className="mt-4 ml-10  mb-10 bg-orange-500 p-2 w-48 rounded-xl text-center hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
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
