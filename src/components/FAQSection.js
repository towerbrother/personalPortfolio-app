import React from "react";
import Toggle from "./Toggle";
import styled from "styled-components";
import { StyledLayout } from "./../styles";
import { AnimateSharedLayout } from "framer-motion";
import { fadeAnimation } from "./../animations";
import { useScroll } from "./useScroll";

const FAQSection = () => {
  const [element, controls] = useScroll();
  return (
    <FAQ
      ref={element}
      variants={fadeAnimation}
      initial="hidden"
      animate={controls}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quidem aut consequatur adipisci dolore non
              voluptatum repellat.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quidem aut consequatur adipisci dolore non
              voluptatum repellat.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Method">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quidem aut consequatur adipisci dolore non
              voluptatum repellat.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quidem aut consequatur adipisci dolore non
              voluptatum repellat.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FAQ>
  );
};

export default FAQSection;

const FAQ = styled(StyledLayout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
