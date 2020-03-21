import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
    </div>
  );
}

export default App;
