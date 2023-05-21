import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import { fetchUsersData } from "../../services/usersApi";
import IsLoading from "../IsLoading/IsLoading";
import TweetCard from "../TweetCard/TweerCard";
import FormFilter from "../Form";

import {
  FilterWrapper,
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
  const [filter, setFilter] = useState("all");
  const [filteredCards, setFilteredCards] = useState([]);

  async function getUsers() {
    try {
      setIsLoading(true);
      const users = await fetchUsersData(page).then((r) => r.data);
      setUsersList([...usersList, ...users]);
      setFilteredCards([...filteredCards, ...users]);
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

  const getFilteredCards = (filter) => {
    if (filter === "all") {
      setFilteredCards([...usersList]);
    } else if (filter === "follow") {
      const filteredFollow = usersList.filter(
        (user) => user.following === false
      );
      setFilteredCards([...filteredFollow]);
    } else if (filter === "following") {
      const filteredFollowing = usersList.filter(
        (user) => user.following === true
      );
      setFilteredCards([...filteredFollowing]);
    }
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    scroll.scrollToBottom();
    getFilteredCards(filter);
  };

  const handleSumbit = ({ cardsfilter }, actions) => {
    setFilter(cardsfilter);
    getFilteredCards(cardsfilter);
  };

  return (
    <>
      <FilterWrapper>
        <BackToHome to={"/"}>Back</BackToHome>
        <FormFilter onSubmit={handleSumbit}></FormFilter>
      </FilterWrapper>
      <TweetCardList>
        {filteredCards.map((user) => {
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
