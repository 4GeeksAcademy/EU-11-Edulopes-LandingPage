//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import { NavBar, ContainerDiv, Footer } from "./component/home.jsx";

ReactDOM.render(
    <>
      <NavBar />
      <ContainerDiv />
      <Footer />
    </>,
    document.querySelector("#app")
  );