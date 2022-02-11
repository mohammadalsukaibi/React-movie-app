import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// components
import MoviesList from "../components/MoviesList";



function TopRated() {
  const [TopMovies, setTopMovies] = useState("");

  useEffect(() => {
    // get top movies
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        const movies = res.data.results;
        setTopMovies(movies);
      });
  }, []);

  return (
    <div>
      <MoviesList
        text="TOP RATED MOVIES"
        Movies={TopMovies}
      />
    </div>
  );
}

export default TopRated;
