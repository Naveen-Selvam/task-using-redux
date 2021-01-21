import React from "react";
import { Wrapper, Nav, Main } from "./Style";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyTask from "./components/MyTask";
import Modal from "react-modal";
Modal.setAppElement("#root");

const App = (props) => {
  return (
    <Wrapper className="container">
      <Nav>
        <Navbar />
      </Nav>
      <Main>
        <Route path="/" exact component={Home} />
        <Route path="/mytasks" exact component={MyTask} />
      </Main>
    </Wrapper>
  );
};

export default App;
