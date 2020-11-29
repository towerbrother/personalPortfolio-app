import React from "react";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutPage />
    </div>
  );
}

export default App;
