import React from "react";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { StyledHide } from "../styles";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fadeAnimation,
  photoAnimation,
  lineAnimation,
} from "../animations";
import { useScroll } from "./../components/useScroll";

// create a separate file with an array of projects
// map through the array and display the Project component

const WorkPage = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "white" }}
    >
      <StyledProject>
        <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyledHide>
            <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
          </StyledHide>
        </Link>
      </StyledProject>
      <StyledProject
        ref={element}
        variants={fadeAnimation}
        initial="hidden"
        animate={controls}
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <StyledHide>
            <img src={theracer} alt="theracer" />
          </StyledHide>
        </Link>
      </StyledProject>
      <StyledProject
        ref={element2}
        variants={fadeAnimation}
        initial="hidden"
        animate={controls2}
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/good-times">
          <StyledHide>
            <img src={goodtimes} alt="goodtimes" />
          </StyledHide>
        </Link>
      </StyledProject>
    </StyledWork>
  );
};

export default WorkPage;

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const StyledProject = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.3rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
