import React from "react";
import Wave from "./Wave";
import home1 from "../img/home1.png";
import styled from "styled-components";
import {
  StyledLayout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "./../styles";
import { motion } from "framer-motion";
import { fadeAnimation, photoAnimation, swipeUpAnimation } from "../animations";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div className="title">
          <StyledHide>
            <motion.h2 variants={swipeUpAnimation}>We make your</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={swipeUpAnimation}>
              <span>dreams</span> come true
            </motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography ideas you have. We have professionals
          with amazing skills.
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact Me</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with a camera"
        />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;

const StyledAbout = styled(StyledLayout)``;
