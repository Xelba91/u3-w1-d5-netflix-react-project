import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixFooter from "./components/NetflixFooter";
import NetflixHero from "./components/NetflixHero";
import NetflixHeroUp from "./components/NetflixHeroUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/Tvshows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NetflixNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NetflixHeroUp></NetflixHeroUp>

                <NetflixHero title={"Harry Potter"}></NetflixHero>
                <NetflixHero title={"Matrix"}></NetflixHero>
                <NetflixHero title={"Avengers"}></NetflixHero>
                <NetflixHero title={"Star Wars"}></NetflixHero>
                <NetflixHero title={"Disney"}></NetflixHero>
              </div>
            }
          />

          <Route
            path="/1"
            element={
              <div>
                <TvShows></TvShows>
              </div>
            }
          />
          <Route
            path="/details/:movieId"
            element={
              <div className="d-flex justify-content-center">
                <MovieDetails></MovieDetails>
              </div>
            }
          />
        </Routes>
        <NetflixFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
