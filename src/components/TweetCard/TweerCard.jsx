import PropTypes from "prop-types";
import { useState } from "react";
import { updateUserData } from "../../services/usersApi";

import Logo from "./logo.png";
import main from "./main.png";
import {
  CardDiv,
  LogoImage,
  MainImg,
  AvatarWrapper,
  Avatar,
  TextWrapper,
  TweetCardText,
  FollowBtn,
} from "./TweetCard.styled";

const TweetCard = ({ userInfo }) => {
  const { id, user, tweets, avatar, followers, following } = userInfo;
  const [currentFolowers, setCurrenFollowers] = useState(followers);
  const [isFollowing, setIsFollowing] = useState(following);

  const formatNumber = (number) => number.toLocaleString("en-US");

  const handleUpdateUserData = () => {
    setIsFollowing(!isFollowing);
    const newFollowers = isFollowing
      ? currentFolowers - 1
      : currentFolowers + 1;
    setCurrenFollowers(newFollowers);
    updateUserData(id, newFollowers, !isFollowing);
  };

  return (
    <CardDiv>
      <LogoImage src={Logo} alt="logo" />
      <MainImg src={main} alt="main"></MainImg>
      <AvatarWrapper>
        <Avatar src={avatar} alt={user} />
      </AvatarWrapper>
      <TextWrapper>
        <TweetCardText>{formatNumber(tweets)} TWEETS</TweetCardText>
        <TweetCardText>{formatNumber(currentFolowers)} FOLLOWERS</TweetCardText>
      </TextWrapper>
      <FollowBtn
        type="button"
        status={isFollowing}
        onClick={handleUpdateUserData}
      >
        {!isFollowing ? "Follow" : "Following"}
      </FollowBtn>
    </CardDiv>
  );
};

export default TweetCard;

TweetCard.propTypes = {
  userInfo: PropTypes.shape({
    id: PropTypes.string,
    user: PropTypes.string,
    tweets: PropTypes.number,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.bool,
  }),
};
