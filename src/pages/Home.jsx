import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// components
import MoviesList from "../components/MoviesList";


function Home() {
  const [popularMovies, setPopularMovies] = useState("");
  const [horrorMovies, setHorrorMovies] = useState("");

  useEffect(() => {
    console.log("use effect");
    // get popular movies
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        const movies = res.data.results;
        setPopularMovies(movies.slice(0,6));
      });
    // get horror movies
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`
      )
      .then((res) => {
        const movies = res.data.results;
        setHorrorMovies(movies.slice(0,6));
      });
  }, []);

  return (
    <div>
      <MoviesList
        text="POPULAR MOVIES"
        Movies={popularMovies}
      />
      <MoviesList
        text="HORROR MOVIES"
        Movies={horrorMovies}
      />
    </div>
  );
}

export default Home;
