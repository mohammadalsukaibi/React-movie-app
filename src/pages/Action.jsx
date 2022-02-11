import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// components
import MoviesList from "../components/MoviesList";



function Action() {
  const [ActionMovies, setActionMovies] = useState("");

  useEffect(() => {
    // get action movies
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`
      )
      .then((res) => {
        const movies = res.data.results;
        setActionMovies(movies);
      });
  }, []);

  return (
    <div>
      <MoviesList
        text="ACTION MOVIES"
        Movies={ActionMovies}
      />
    </div>
  );
}

export default Action;
