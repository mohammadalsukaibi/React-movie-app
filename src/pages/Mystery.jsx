import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// components
import MoviesList from "../components/MoviesList";



function Mystery() {
  const [mysteryMovies, setMysteryMovies] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=9648`
      )
      .then((res) => {
        const movies = res.data.results;
        setMysteryMovies(movies);
      });
  }, []);

  return (
    <div>
      <MoviesList
        text="MYSTERY MOVIES"
        Movies={mysteryMovies}
      />
    </div>
  );
}

export default Mystery;
