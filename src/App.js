import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixFooter from "./components/NetflixFooter";
import NetflixHero from "./components/NetflixHero";
import NetflixHeroUp from "./components/NetflixHeroUp";

function App() {
  return (
    <div>
      <NetflixNavbar />
      <NetflixHeroUp></NetflixHeroUp>
      <NetflixHero title={"harry potter"}></NetflixHero>
      <NetflixHero title={"Matrix"}></NetflixHero>
      <NetflixFooter />
    </div>
  );
}

export default App;
