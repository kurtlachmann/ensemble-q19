import styled from "@emotion/styled";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "../contact/contact";
import Header from "../header/header";
import Home from "../home/home";
import Media from "../media/media";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0F1319;
  color: #dfdbcf;
  line-height: 1.8em;
  overflow-y: auto;
`;

function App() {
  return (
    <Container>
      <Router>
        <Header />

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/media">
            <Media />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <div style={{ height: "15rem" }}></div>
    </Container>
  );
}

export default App;
