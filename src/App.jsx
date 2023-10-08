import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MealResult from './components/MealResult';
import SuggestedMeal from './components/SuggestedMeal';
import MealByCategory from './components/MealByCategory'; // Import the new component
import Footer from './components/Footer';

function App() {
    const [searchResults, setSearchResults] = useState(null); 
    const [isCategoryView, setIsCategoryView] = useState(false); // State to track if the category view is active

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Navbar />
            <div className="container mx-auto">
                <SearchBar onSearchResults={setSearchResults} />

                {/* Button to switch to category view */}
                <button className="mb-4 bg-orange-500 text-white p-2 ml-4" onClick={() => setIsCategoryView(!isCategoryView)}>
                    {isCategoryView ? 'Search by Name' : 'Browse by Category'}
                </button>

                {/* Render components based on the state */}
                {!isCategoryView && searchResults === null && <SuggestedMeal />}
                {!isCategoryView && searchResults && searchResults.length === 0 && 
                    <div className="text-center py-10 text-xl font-semibold">No meal found.</div>
                }
                {!isCategoryView && searchResults && searchResults.length > 0 && searchResults.map(meal => (
                    <MealResult key={meal.idMeal} meal={meal} />
                ))}
                {isCategoryView && <MealByCategory />} 
            </div>
            <Footer />
        </div>
    );
}

export default App;
