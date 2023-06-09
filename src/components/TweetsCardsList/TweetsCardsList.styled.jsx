import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  & select {
    width: 200px;
    height: 50px;
    padding: 10px;
    border-radius: 10px;
    font-size: 18px;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border: none;
  }

  & select:after {
    margin-right: 10px;
  }
`;

export const TweetCardList = styled.ul`
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
`;

export const LoadMoreBtn = styled.button`
  display: block;
  margin: 0 auto;
  width: 196px;
  height: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  border: none;
  transition: background-color 250ms ease-in-out, transform 250ms ease-in-out;

  &:hover,
  &:focus-visible {
    background-color: #5cd3a8;
    transform: scale(1.1);
    -webkit-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    -moz-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
  }
`;

export const BackToHome = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 196px;
  height: 50px;
  border-radius: 10.3108px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background-color: #fff;
  border: none;
  transition: background-color 250ms ease-in-out, transform 250ms ease-in-out;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus-visible {
    background-color: #5cd3a8;
    transform: scale(1.1);
    -webkit-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    -moz-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
  }
`;
