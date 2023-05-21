import styled from "@emotion/styled";

export const GoIT = styled.img`
  display: block;
  margin: 0 auto;
  width: 900px;
  transition: animation 500ms ease-in-out;
  animation: radar 2000ms ease infinite;

  @keyframes radar {
    0% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    50% {
      -webkit-transform: scale(1.05, 1.05);
      transform: scale(1.05, 1.05);
    }
    100% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const WorkList = styled.ul`
  margin-top: 30px;
  display: flex;
  gap: 30px;
`;

export const WorksListItem = styled.li`
  position: relative;
  width: calc((100% - 60px) / 3);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
    -webkit-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    -moz-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
  }

  & img {
    width: 100%;
    height: 100%;
  }

  & p {
    position: absolute;
    background: rgba(75, 41, 153, 0.5);
    color: #fff;
    right: 0;
    font-size: 25px;
    padding: 10px;
    border-bottom-left-radius: 5px;
  }
`;
