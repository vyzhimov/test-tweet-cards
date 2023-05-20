import { useLocation } from "react-router";
import TweetsCardsList from "../../components/TweetsCardsList/";

const Tweets = () => {
  const location = useLocation();
  return <TweetsCardsList />;
};

export default Tweets;
