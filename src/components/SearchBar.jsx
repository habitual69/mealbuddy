import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import { searchMeals } from './apiFunction';

function SearchBar({ onSearchResults }) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        searchMeals(query).then((fetchedMeals) => {
            if (fetchedMeals && fetchedMeals.length === 0) {
                onSearchResults(null);
            } else {
                onSearchResults(fetchedMeals);
            }
        });
    }

    return (
        <div className="flex items-center justify-center mt-8">
            <div className="relative items-center justify-center">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-80 px-10 p-2 text-[#1f2430] bg-[#fcc133] placeholder-gray-200 rounded-full focus:outline-none focus:shadow-outline shadow-md transition border-[#1f2430] border-2"
                    placeholder="Search for meals..."
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <svg className="w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </span>
                <button 
                    className="absolute inset-y-0 right-0 transform-translate-y-1/2 px-5 p-2 text-[#fcc133] bg-[#1f2430] rounded-full hover:bg-orange-600 focus:outline-none focus:shadow-outline shadow-md transition transform hover:scale-105" 
                    onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>

    );
}

SearchBar.propTypes = {
    onSearchResults: PropTypes.func.isRequired
};

export default SearchBar;
