import React, {Component} from "react";
import Movie from "./Movie";

class MoviesList extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }


    componentDidUpdate(){
        console.log("new props recived");
        console.log(this.props.popularMovies);
    }

  render(){

    return (
      
        <div className="container mx-auto mt-14">
            
            <div className="flex justify-between bg-black">
                <div>
                    <h1 className="text-2xl md:text-4xl text-white font-bold">{this.props.text}</h1>
                    <div className="bg-red-700 h-1 w-20 mt-2"></div>
                </div>
            </div>

            <section className="text-gray-400 body-font">
                <div className="py-4 pr-10">
                    <div className="flex flex-wrap  m-cards">
                    {this.props.popularMovies.length > 0 && this.props.popularMovies.map((movie) => <Movie key={movie.id} data={movie} />)}
                    </div>
                </div>
            </section>
        </div>
    )
  }
}

export default MoviesList;
