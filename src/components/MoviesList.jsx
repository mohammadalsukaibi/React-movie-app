import React, {Component} from "react";
import Movie from "./Movie";

class MoviesList extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  

  componentDidMount(){
    this.props.setloaded()
  }

  render(){
    console.log("movie list rendered");
    return (
        <div className="container mx-auto mt-14 bg-gray-900 p-8">
            
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl md:text-4xl text-white font-bold">{this.props.text}</h1>
                    <div className="bg-red-700 h-1 w-20 mt-2"></div>
                </div>
            </div>

            <section className="body-font">
                <div className="py-4">
                    <div className="flex flex-wrap">
                    {this.props.Movies.length > 0 && this.props.Movies.map((movie) => <Movie key={movie.id} data={movie} />)}
                    </div>
                </div>
            </section>
        </div>
    )
  }
}

export default MoviesList;
