import { IoFastFood } from 'react-icons/io5';

function Navbar() {
  return (
    <nav className="p-5 bg-white shadow-md">
      <div className="container mx-auto flex items-center">
        <a href='index.html' className="flex items-center space-x-2 text-orange-500 hover:text-orange-800 transition duration-300 ease-in-out">
          <IoFastFood className='text-6xl text-orange-500'/>
          <span className="text-4xl font-semibold text-orange-500">MealBuddy
          <p className="text-sm font-semibold text-[#362222]">Discover | Enjoy | Repeat.</p>
          </span>
          
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
