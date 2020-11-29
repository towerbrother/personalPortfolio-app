import React from "react";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import styled from "styled-components";

// create a separate file with an array of projects
// map through the array and display the Project component

const WorkPage = () => {
  return (
    <StyledWork>
      <StyledProject>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="athlete" />
        </Link>
      </StyledProject>
      <StyledProject>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link>
          <img src={theracer} alt="theracer" />
        </Link>
      </StyledProject>
      <StyledProject>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </StyledProject>
    </StyledWork>
  );
};

export default WorkPage;

const StyledWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    color: white;
  }
`;

const StyledProject = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.2rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
