import {Link} from "react-router-dom"
import SearchBox from "./SearchBox"

function Header({searchValue, setSearchValue}) {
  return (
    <header className="flex justify-between p-3 mb-6 md:px-20">
        <Link to="/" className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <h2 className="text-white mt-4">Movies</h2>
        </Link>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </header>
  )
}

export default Header