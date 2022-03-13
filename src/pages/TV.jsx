import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// components
import MoviesList from "../components/MoviesList";



function TV() {
  const [tvMovies, setTvMovies] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10770`
      )
      .then((res) => {
        const movies = res.data.results;
        setTvMovies(movies);
      });
  }, []);

  return (
    <div>
      <MoviesList
        text="TV MOVIES"
        Movies={tvMovies}
      />
    </div>
  );
}

export default TV;
