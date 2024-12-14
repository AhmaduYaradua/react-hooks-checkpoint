import MovieCard from "./MovieCard";

function MovieList(props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto p-2 gap-4">
      {props.movieData.map((item) => {
        return (
          <MovieCard
            key={item.id}
            titles={item.title}
            descriptions={item.description}
            ratings={item.rating}
            photo={item.posterURL}
          />
        );
      })}
    </div>
  );
}
export default MovieList;
