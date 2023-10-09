import React from 'react';

function Footer() {
    return (
        <footer className="bg-[#333333] text-[#fcc133] py-6">
            <div className="container mx-auto text-center">
                <h1 className="text-2xl font-bold mb-2">MealBuddy</h1>
                <p className="mb-2">Discover, Enjoy, Repeat.</p>
                {/* <div className="flex justify-center space-x-4">
                    <a href="#" className="hover:text-orange-500">About Us</a>
                    <a href="#" className="hover:text-orange-500">Contact</a>
                    <a href="#" className="hover:text-orange-500">Privacy Policy</a>
                    <a href="#" className="hover:text-orange-500">Terms of Service</a>
                </div> */}
                <div className="mt-4">
                    <p>&copy; {new Date().getFullYear()} MealBuddy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
