import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";
import Footer from "./components/footer/footer";
import "./App.css";
import { Navbar } from "./components/navbar";
import Hero from "./components/hero";
import ScrollTop from './components/scrollTop';
import About from './components/about/about';

const loadercss = css`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <GridLoader
      color={"#fdd831"}
      loading={loading}
      css={loadercss}
      size={20}
      speedMultiplier={0.5}
    />
  ) : (
    <div className="App">
      <Navbar />
      <div>
        <div className="hero" id="back-to-top-anchor">
          <Hero />
        </div>
        <About/>
        <ScrollTop/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
