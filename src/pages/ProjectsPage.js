import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MovieState } from "./../movieState";
import Award from "../components/Award";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "./../animation";

const ProjectsPage = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyledDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <StyledHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </StyledHeadline>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                key={`${award.title}${Math.random()}`}
                title={award.title}
                description={award.description}
              />
            ))}
          </StyledAwards>
          <StyledSecondaryImage>
            <img
              src={movie.secondaryImg}
              alt={`${movie.title}-secondary`}
            ></img>
          </StyledSecondaryImage>
        </StyledDetails>
      )}
    </>
  );
};

export default ProjectsPage;

const StyledDetails = styled(motion.div)`
  color: white;
  padding: 0rem 10rem;
`;

const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative; // we use its children to move it when we want to
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 2rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledSecondaryImage = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;
