import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// components
import MoviesList from "../components/MoviesList";



function Sifi() {
  const [sifiMovies, setSifiMovies] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=9648`
      )
      .then((res) => {
        const movies = res.data.results;
        setSifiMovies(movies);
      });
  }, []);

  return (
    <div>
      <MoviesList
        text="SCI-FI MOVIES"
        Movies={sifiMovies}
      />
    </div>
  );
}

export default Sifi;
