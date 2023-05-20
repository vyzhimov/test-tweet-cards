import { useEffect, useState } from "react";

import { animateScroll as scroll } from "react-scroll";
import { fetchUsersData } from "../../services/usersApi";
import IsLoading from "../IsLoading/IsLoading";
import TweetCard from "../TweetCard/TweerCard";

import {
  TweetCardList,
  LoadMoreBtn,
  BackToHome,
} from "./TweetsCardsList.styled";

const TweetsCardsList = () => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);

  async function getUsers() {
    try {
      setIsLoading(true);
      const users = await fetchUsersData(page).then((r) => r.data);
      setUsersList([...usersList, ...users]);
      users.length < 6 ? setShowLoadMore(false) : setShowLoadMore(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    scroll.scrollToBottom();
  };

  return (
    <>
      <div>
        <BackToHome to={"/"}>Back</BackToHome>
      </div>
      <TweetCardList>
        {usersList.map((user) => {
          return (
            <li key={user.id}>
              <TweetCard userInfo={user} />
            </li>
          );
        })}
      </TweetCardList>
      {isLoading && <IsLoading />}
      {error && <Error message={error} />}
      {showLoadMore && (
        <LoadMoreBtn type="button" onClick={handleLoadMore}>
          Load More
        </LoadMoreBtn>
      )}
    </>
  );
};

export default TweetsCardsList;
