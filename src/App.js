import React, {Component} from "react";
import reactDom from "react-dom";
import "./App.css"
import axios from "axios";
// components
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      Movies: {}
    }
  }
  
  componentDidMount(){
    console.log("did mount");
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9ec9eafb71ae45ba76400994a6778f89&language=en-US&page=1`)
      .then(res => {
        const movies = res.data.results;
        this.setState({Movies:movies})
      })
  }


  render(){
    return (

      <div>
        <Navbar />
        <MoviesList text="POPULAR MOVIES" popularMovies={this.state.Movies} />
      </div>
    )
  }
}

export default App;
