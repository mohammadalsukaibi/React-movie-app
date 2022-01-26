import React, {Component} from "react";

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }


  render(){

    return (
      
        <nav className="navbar bg-black bg-opacity-75 text-white  z-40 inset-x-0">
        <div className="container px-6 py-3 mx-auto md:flex">
            <div className="flex items-center justify-between">
                <div className="md:hidden">
                    <a className="text-2xl font-bold lg:text-3xl" href="#">Movies</a>
                </div>

                <div className="flex md:hidden">
                    <button type="button" className=" navBtn text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="navInfo w-full md:flex md:items-center md:justify-between hidden">
                <a className="hidden md:inline-block text-2xl font-bold lg:text-3xl" href="index.html">Movies</a>
                <div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0 items-center space-y-8 md:space-y-0">
                    <a href="favorites.html" className="px-2 py-1 text-sm font-medium transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Favorites</a>
                    <a href="popular.html" className="px-2 py-1 text-sm font-medium transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Popular</a>
                    <a href="top.html" className="px-2 py-1 text-sm font-medium transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Top</a>
                    <a href="horror.html" className="px-2 py-1 text-sm font-medium transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Horror</a>
                </div>
                
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                    <input type="text" className="searchBtn w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search"/>
                </div>
            </div>
        </div>
    </nav>
    )
  }
}

export default Navbar;
