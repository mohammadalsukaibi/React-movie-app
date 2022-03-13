import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// components
import MoviesList from "../components/MoviesList";



function Western() {
  const [westernMovies, setWesternMovies] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=37`
      )
      .then((res) => {
        const movies = res.data.results;
        setWesternMovies(movies);
      });
  }, []);

  return (
    <div>
      <MoviesList
        text="WESTREN MOVIES"
        Movies={westernMovies}
      />
    </div>
  );
}

export default Western;
