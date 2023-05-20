import GoItImg from "./goitlogo.png";
import Movie from "./movies.jpg";
import News from "./nyt.jpg";
import GamersShop from "./shopgamers.jpg";

import { GoIT } from "./Home.styled";

const Home = () => {
  return (
    <div>
      <GoIT src={GoItImg} alt="GoIT" />
      <div>
        <h1>My works:</h1>
        <a href="https://vyzhimov.github.io/goit-react-hw-05-movies/movies">
          <p>MOVIES</p>
          <img src={Movie} alt="movies"></img>
        </a>
        <a href="https://vyzhimov.github.io/goit-react-hw-05-movies/movies">
          <p>NEWS PORTAL</p>
          <img src={News} alt="movies"></img>
        </a>
        <a href="https://vyzhimov.github.io/goit-react-hw-05-movies/movies">
          <p>SHOP FOR GAMERS</p>
          <img src={GamersShop} alt="movies"></img>
        </a>
      </div>
    </div>
  );
};

export default Home;
