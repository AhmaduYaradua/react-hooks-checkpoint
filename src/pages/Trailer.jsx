import { useParams } from "react-router-dom";
import { useState } from "react";
import TrailerDesc from "../components/TrailerDesc";
import { DETAILS } from "../movieDetails";

function Trailer() {
  const [movieData] = useState(DETAILS);

  const { id } = useParams();

  const selectedMovie = movieData.find((item) => item.id === parseInt(id, 10));

  if (!selectedMovie) {
    return <p>No movie found with the specified ID.</p>;
  }

  return (
    <div>
      <TrailerDesc
        key={selectedMovie.id}
        descriptions={selectedMovie.description}
        photo={selectedMovie.posterURL}
        trailer={selectedMovie.trailerUrl}
      />
    </div>
  );
}

export default Trailer;
