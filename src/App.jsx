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
        <div className="bg-[#292930] text-white min-h-screen">
            <Navbar />
            <div className="container mx-auto bg-[#fcc133] mb-5 mt-5 pt-5 rounded-xl shadow-xl">
                <SearchBar onSearchResults={setSearchResults} />

                {/* Button to switch to category view */}
                <div className="text-center py-10 text-xl font-semibold">
                <button className="mx-auto bg-[#1f2430] text-[#fcc133] p-2 items-center text-center rounded-md" onClick={() => setIsCategoryView(!isCategoryView)}>
                    {isCategoryView ? 'Search by Name' : 'Browse by Category'}
                </button></div>
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
