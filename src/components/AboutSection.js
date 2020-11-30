import React from "react";
import Wave from "./Wave";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { StyledLayout, StyledDescription, StyledImage } from "./../styles";
import { motion } from "framer-motion";
import { fadeAnimation } from "../animation";

const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription>
        <motion.div className="title" variants={fadeAnimation}>
          <StyledHide>
            <motion.h2>We make your</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>
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
        <img src={home1} alt="guy with a camera" />
      </StyledImage>
      <Wave />
    </StyledLayout>
  );
};

export default AboutSection;

export const StyledHide = styled.div`
  overflow: hidden;
`;
