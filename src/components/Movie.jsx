import React, {Component} from "react";

class Movie extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }



  render(){
    
    return (
      
        <div className="">
            <div className="xl:w-1/4 md:w-1/2 p-4 mx-auto">
                <div className="rounded-xl w-32 md:w-64 mx-auto">
                    <a>
                        <img className="h-full w-32 md:w-64 mx-auto rounded object-cover object-center mb-6" src={"https://image.tmdb.org/t/p/w500" + this.props.data.poster_path} alt="content"/>
                    </a>
                    <div className="flex flex-col md:flex-row space-x-4 justify-between">
                        <h2 className="h-14 text-lg text-white font-medium title-font mb-4">{this.props.data.title}</h2>

                    </div>
                    
                </div>
            </div>
        </div>
    )
  }
}

export default Movie;
