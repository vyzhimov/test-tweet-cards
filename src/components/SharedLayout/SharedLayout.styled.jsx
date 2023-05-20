import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding: 30px 32px;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 32px;
  padding-left: 32px;
  padding-top: 18px;
  padding-bottom: 18px;
  color: #fff;
  background: #4b2999;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavMenu = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
`;

export const HeaderLink = styled(NavLink)`
  display: inline-flex;
  width: 196px;
  height: 50px;
  gap: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 5px 30px;
  border: solid 1px #fff;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  color: ${(props) => (props.active === "true" ? "#373737" : "#fff")};

  background-color: ${(props) =>
    props.active === "true" ? "#5CD3A8" : "#transparent"};
  -webkit-box-shadow: -1px 0px 12px -3px rgba(255, 255, 255, 1);
  -moz-box-shadow: -1px 0px 12px -3px rgba(255, 255, 255, 1);
  box-shadow: -1px 0px 12px -3px rgba(255, 255, 255, 1);
  transition: all 250ms;

  &:hover,
  &:focus-visible {
    background-color: #5cd3a8;
    transform: scale(1.1);
    -webkit-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    -moz-box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
    box-shadow: -1px 0px 12px 1px rgba(255, 255, 255, 1);
  }
`;
