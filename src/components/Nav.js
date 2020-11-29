import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1 id="logo">
        <a href="#">
          <span>Giorgio</span> Torre
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    a {
      span {
        color: #23d997;
      }
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;
