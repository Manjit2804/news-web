import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <News />
      </div>
    );
  }
}
