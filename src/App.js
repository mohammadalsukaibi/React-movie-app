import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Trending from "./pages/Trending"
import TopRated from "./pages/TopRated";
import Action from "./pages/Action";
import Comedy from "./pages/Comedy";
import Horror from "./pages/Horror";
import Romance from "./pages/Romance";
import Mystery from "./pages/Mystery";
import Sifi from "./pages/Sifi";
import Western from "./pages/Western";
import Animation from "./pages/Animation";
import TV from "./pages/TV";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchMovies, setSearchMovies] = useState("");

  useEffect(() => {
    if(searchValue.length > 1){
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchValue}&page=1`)
      .then((res) => {
        const movies = res.data.results;
        setSearchMovies(movies);
      });
    }
    
  }, [searchValue]);

  return (
    <div>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home searchValue={searchValue} searchMovies={searchMovies} />} />
        <Route path="/about" element={<About />} />
        <Route path="/Trending" element={<Trending />} />
        <Route path="/TopRated" element={<TopRated />} />
        <Route path="/Action" element={<Action />} />
        <Route path="/Comedy" element={<Comedy />} />
        <Route path="/Horror" element={<Horror />} />
        <Route path="/Romance" element={<Romance />} />
        <Route path="/Mystery" element={<Mystery />} />
        <Route path="/Sci-Fi" element={<Sifi />} />
        <Route path="/western" element={<Western />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/TV%20Movie" element={<TV />} />
      </Routes>
    </div>
  );
}

export default App;
