import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// components
import MoviesList from "../components/MoviesList";



function Comedy() {
  const [ComedyMovies, setComedyMovies] = useState("");

  useEffect(() => {
    // get Comedy movies
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`
      )
      .then((res) => {
        const movies = res.data.results;
        setComedyMovies(movies);
      });
  }, []);

  return (
    <div>
      <MoviesList
        text="COMEDY MOVIES"
        Movies={ComedyMovies}
      />
    </div>
  );
}

export default Comedy;
