import React from "react";
import home1 from "../img/home1.png";
// import styled from "styled-components";
import {
  StyledLayout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "./../styles";

const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography ideas you have. We have professionals
          with amazing skills.
        </p>
        <button>Contact Me</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with a camera" />
      </StyledImage>
    </StyledLayout>
  );
};

export default AboutSection;
