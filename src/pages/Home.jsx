import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// components
import Navbar from "../components/Navbar";
import MoviesList from "../components/MoviesList";


function Home() {
  const [popularMovies, setPopularMovies] = useState("");
  const [horrorMovies, setHorrorMovies] = useState("");

  useEffect(() => {
    console.log("use effect");
    // get popular movies
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=9ec9eafb71ae45ba76400994a6778f89&language=en-US&page=1`
      )
      .then((res) => {
        const movies = res.data.results;
        setPopularMovies(movies.slice(0,5));
      });
    // get horror movies
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=9ec9eafb71ae45ba76400994a6778f89&with_genres=27`
      )
      .then((res) => {
        const movies = res.data.results;
        setHorrorMovies(movies.slice(0,5));
      });
  }, []);

  return (
    <div>
      <Navbar />
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
