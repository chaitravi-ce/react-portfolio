import React from "react";
import Navbar from "./Navbar";
import "../styles/Hero.css"

const HeroCommon = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="main-text">
        <h1>Hi, I'm Chaitravi Chalke</h1>
        <p>I am a polymath who likes to learn new things in my free time. 
          I have tried my hands on AI/ML, Application Development and Web Development in the process of 
          developing cool some cool projects.</p>
      </div>
    </div>
  );
};

export default HeroCommon;