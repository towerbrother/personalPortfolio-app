import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, swipeUpAnimation } from "./../animations";

const ContactPage = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1 style={{ color: "white" }}>Contact Page</h1>
    </motion.div>
  );
};

export default ContactPage;
