function SearchBox({ searchValue, setSearchValue }) {
  return (
    <div className="flex">
      <input
        type="text"
        onChange={(event) => setSearchValue(event.target.value)}
        className=" pl-5 pr-4 h-full text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        placeholder="Search"
      ></input>
    </div>
  );
}

export default SearchBox;
