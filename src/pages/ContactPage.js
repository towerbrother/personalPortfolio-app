import React from "react";
import styled from "styled-components";
import { StyledHide } from "../styles";
import { motion } from "framer-motion";
import { pageAnimation, swipeUpAnimation } from "./../animations";
import ScrollTop from "../components/ScrollTop";

const ContactPage = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={swipeUpAnimation}>Get in touch!</motion.h2>
        </StyledHide>
      </StyledTitle>
      <div>
        <StyledHide>
          <StyledSocial variants={swipeUpAnimation}>
            <StyledCircle />
            <h2>LinkedIn</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={swipeUpAnimation}>
            <StyledCircle />
            <h2>Github</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={swipeUpAnimation}>
            <StyledCircle />
            <h2>Email</h2>
          </StyledSocial>
        </StyledHide>
      </div>
      <ScrollTop />
    </StyledContact>
  );
};

export default ContactPage;

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  background: #fff;
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
