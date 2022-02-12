import Movie from "./Movie";


function ScrollList({text, Movies}) {
  return (
    <div className="mt-20 px-5 relative">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl md:text-4xl text-white font-bold">
            {text}
          </h1>
          <div className="bg-red-700 h-1 w-20 mt-2"></div>
        </div>
      </div>

      <section className="body-font">
        <div className="py-4 md:pl-10">
          <div className="flex overflow-x-scroll scrollbar-hide overflow-y-hidden">
            {Movies.length > 0 &&
              Movies.map((movie) => (
                <Movie key={movie.id} data={movie} />
              ))}
          </div>
        </div>
      </section>
      <div className="absolute top-16 right-0 bg-gradient-to-l from-[#06202A] h-full w-24" />
    </div>
  );
}

export default ScrollList;
