import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import GlobalStyle from "./components/GlobalStyle";
import { AnimatePresence } from "framer-motion";

function App() {
  // added location & AnimatePresence (incl. giving location and key to Switch)
  // to allow transition in and out of pages based on their location
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={AboutPage} exact />
          <Route path="/work" component={WorkPage} exact />
          <Route path="/work/:id" component={ProjectsPage} />
          <Route path="/contact" component={ContactPage} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
