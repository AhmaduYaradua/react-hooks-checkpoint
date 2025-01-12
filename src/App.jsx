import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Filter from "./Filter";
import Trailer from "./pages/Trailer";
import { DETAILS } from "./movieDetails";

function App() {
  const [movieData, setMovieData] = useState(DETAILS);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Filter />} />
          <Route
            path="/movie/:id"
            element={<Trailer movieData={movieData} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
