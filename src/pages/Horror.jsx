import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// components
import MoviesList from "../components/MoviesList";



function Horror() {
  const [horrorMovies, setHorrorMovies] = useState("");

  useEffect(() => {
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
      <MoviesList
        text="HORROR MOVIES"
        Movies={horrorMovies}
      />
    </div>
  );
}

export default Horror;
