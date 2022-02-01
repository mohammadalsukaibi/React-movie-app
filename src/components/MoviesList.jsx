import Movie from "./Movie";


function MoviesList({text, Movies}) {
  return (
    <div className="container mx-auto mt-14 bg-gray-900 p-8">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl md:text-4xl text-white font-bold">
            {text}
          </h1>
          <div className="bg-red-700 h-1 w-20 mt-2"></div>
        </div>
      </div>

      <section className="body-font">
        <div className="py-4">
          <div className="flex flex-wrap">
            {Movies.length > 0 &&
              Movies.map((movie) => (
                <Movie key={movie.id} data={movie} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MoviesList;
