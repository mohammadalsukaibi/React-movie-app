import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// components
import MoviesList from "../components/MoviesList";



function Animation() {
  const [animationMovies, setAnimationMovies] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`
      )
      .then((res) => {
        const movies = res.data.results;
        setAnimationMovies(movies);
      });
  }, []);

  return (
    <div>
      <MoviesList
        text="ANIMATION MOVIES"
        Movies={animationMovies}
      />
    </div>
  );
}

export default Animation;
