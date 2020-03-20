import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Scroll from "./Scroll";

class Header extends React.Component {
  render() {
    return (
      <header id="home" className="App-header">
        <Navbar />
        <Home />
        <Scroll />
      </header>
    );
  }
}

export default Header;
