import React from "react";
import AboutSection from "./../components/AboutSection";
import ServicesSection from "./../components/ServicesSection";
import FAQSection from "./../components/FAQSection";
import { motion } from "framer-motion";
import { pageAnimation } from "./../animations";
import ScrollTop from "../components/ScrollTop";

const AboutPage = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FAQSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutPage;
