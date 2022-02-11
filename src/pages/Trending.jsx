import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// components
import MoviesList from "../components/MoviesList";



function Trending() {
  const [popularMovies, setPopularMovies] = useState("");

  useEffect(() => {
    // get trending movies
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        const movies = res.data.results;
        setPopularMovies(movies);
      });
  }, []);

  return (
    <div>
      <MoviesList
        text="TRENDING MOVIES"
        Movies={popularMovies}
      />
    </div>
  );
}

export default Trending;
