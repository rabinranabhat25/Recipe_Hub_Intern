import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [open, setOpen] = useState(false); // Manage menu state
  const [moreOpen, setMoreOpen] = useState(false); // Manage "More" dropdown state

  return (
    <>
    
    {/* <Search/> */}
    <div className="shadow-xl shadow-purple-900">
      <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
        <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between">
              <Link to='/'>
              <a
                href="#"
                className="text-lg font-semibold tracking-widest transform hover:scale-105  duration-500 hover:text-green-600 text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                Recipe Hub
              </a></Link>
              
              
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setOpen(!open)}
              >
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  {open ? (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </button>
            </div>
            
            <nav
              className={`flex-col flex-grow ${
                open ? 'flex' : 'hidden'
              } pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
            >
               
            <Link to='/'>  <button className="text-gray-800 transform hover:scale-105  duration-500 hover:text-green-600 focus:text-green-600 font-medium px-4 py-2 rounded-md transition duration-200 bg-gray-100">
                                Home
                            </button>
            </Link>

            <Link to='/recipe'><button className="text-gray-800 transform hover:scale-105  duration-500 hover:text-green-600 focus:text-green-600 font-medium px-4 py-2 rounded-md transition duration-200 bg-gray-100">
                Recipe
            </button></Link>

            

            
              
            </nav>
          </div>
        </div>
      </div>

    </div>
    
    </>
  );
};

export default NavBar;
