import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Trending from "./pages/Trending"
import TopRated from "./pages/TopRated";
import Action from "./pages/Action";

function App() {

  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Trending" element={<Trending />} />
        <Route path="/TopRated" element={<TopRated />} />
        <Route path="/Action" element={<Action />} />
      </Routes>
    </div>
  );
}

export default App;
