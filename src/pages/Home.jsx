import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// components
import ScrollList from "../components/ScrollList";
import SearchResults from "../components/SearchResults";

function Home({ searchValue, searchMovies }) {
  const [popularMovies, setPopularMovies] = useState("");
  const [horrorMovies, setHorrorMovies] = useState("");

  useEffect(() => {
    // get popular movies
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        const movies = res.data.results;
        setPopularMovies(movies);
      });
    // get horror movies
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`
      )
      .then((res) => {
        const movies = res.data.results;
        setHorrorMovies(movies);
      });
  }, []);

  return (
    <div>
      {searchMovies.length > 0 && (
        <SearchResults text="SEARCH RESULTS" Movies={searchMovies} />
      )}
      <ScrollList text="POPULAR MOVIES" Movies={popularMovies} />
      <ScrollList text="HORROR MOVIES" Movies={horrorMovies} />
    </div>
  );
}

export default Home;
