import { Select } from "antd";
import { useState } from "react";
import { DETAILS } from "./movieDetails";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

function Filter(props) {
  const [movieData, setMovieData] = useState(DETAILS);

  function filterByTitle(value) {
    if (value === "all") {
      setMovieData(DETAILS);
    } else {
      const filteredMovies = DETAILS.filter((item) => item.title === value);
      setMovieData(filteredMovies);
    }
  }

  function filterByRating(value) {
    if (value === "all") {
      setMovieData(DETAILS);
    } else if (value === "greater") {
      const highRatedMovies = DETAILS.filter((item) => item.rating > 5);
      setMovieData(highRatedMovies);
    } else if (value === "less") {
      const lowRatedMovies = DETAILS.filter((item) => item.rating <= 5);
      setMovieData(lowRatedMovies);
    }
  }
  const handleAddNewMovie = (movie_info) => {
    setMovieData([movie_info, ...movieData]);
    console.log(movie_info);
  };
  return (
    <>
      <div className="my-3 mx-24 flex justify-end">
        {/* Filter by Title */}
        <Select
          placeholder="Filter by title"
          style={{
            width: 200,
            marginRight: 20,
          }}
          onChange={filterByTitle}
          options={[
            { value: "all", label: "All Movies" },
            { value: "Spiderman", label: "Spiderman" },
            { value: "Entergalactic", label: "Entergalactic" },
            { value: "Boondocks", label: "Boondocks" },
            { value: "Archer", label: "Archer" },
            { value: "South Park", label: "South Park" },
            { value: "Dexters Laboratory", label: "Dexters Laboratory" },
          ]}
        />

        {/* Filter by Rating */}
        <Select
          placeholder="Filter by rating"
          style={{
            width: 200,
          }}
          onChange={filterByRating}
          options={[
            { value: "all", label: "All Ratings" },
            { value: "greater", label: "High Ratings" },
            { value: "less", label: "Low Ratings" },
          ]}
        />
      </div>
      <div className="mx-24 mb-2">
        <AddMovie handleAddNewMovie={handleAddNewMovie} />
      </div>
      {/* Movie List */}
      <div>
        <MovieList movieData={movieData} />
      </div>
    </>
  );
}

export default Filter;
