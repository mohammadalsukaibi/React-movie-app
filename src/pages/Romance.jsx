import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// components
import MoviesList from "../components/MoviesList";



function Romance() {
  const [romanceMovies, setRomanceMovies] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`
      )
      .then((res) => {
        const movies = res.data.results;
        setRomanceMovies(movies);
      });
  }, []);

  return (
    <div>
      <MoviesList
        text="ROMANCE MOVIES"
        Movies={romanceMovies}
      />
    </div>
  );
}

export default Romance;
