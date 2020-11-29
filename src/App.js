import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" component={AboutPage} exact />
        <Route path="/work" component={WorkPage} exact />
        <Route path="/work/:id" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
