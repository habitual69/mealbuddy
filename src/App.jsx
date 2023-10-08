import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MealResult from './components/MealResult';
import SuggestedMeal from './components/SuggestedMeal';
import Footer from './components/Footer';

function App() {
    const [searchResults, setSearchResults] = useState(null); 

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Navbar />
            <div className="container mx-auto">
                <SearchBar onSearchResults={setSearchResults} />

                {searchResults === null && <SuggestedMeal />}

                {searchResults && searchResults.length === 0 && 
                    <div className="text-center py-10 text-xl font-semibold">No meal found.</div>
                }

                {searchResults && searchResults.length > 0 && searchResults.map(meal => (
                    <MealResult key={meal.idMeal} meal={meal} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;
