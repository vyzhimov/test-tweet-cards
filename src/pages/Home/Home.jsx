import GoItImg from "./goitlogo.png";
import Movie from "./movies.jpg";
import News from "./nyt.jpg";
import GamersShop from "./shopgamers.jpg";

import { GoIT, Title, WorkList, WorksListItem } from "./Home.styled";

const Home = () => {
  return (
    <div>
      <GoIT src={GoItImg} alt="GoIT" />
      <Title>MY WORKS</Title>
      <WorkList>
        <WorksListItem>
          <a
            href="https://vyzhimov.github.io/goit-react-hw-05-movies"
            target="_blank"
          >
            <p>MOVIES</p>
            <img src={Movie} alt="movies"></img>
          </a>
        </WorksListItem>
        <WorksListItem>
          <a
            href="https://olgamunaieva.github.io/news-project-9/"
            target="_blank"
          >
            <p>NEWS PORTAL</p>
            <img src={News} alt="movies"></img>
          </a>
        </WorksListItem>
        <WorksListItem>
          <a
            href="https://vyzhimov.github.io/project11-shopforgamers/"
            target="_blank"
          >
            <p>SHOP FOR GAMERS</p>
            <img src={GamersShop} alt="movies"></img>
          </a>
        </WorksListItem>
      </WorkList>
    </div>
  );
};

export default Home;
