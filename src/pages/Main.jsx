import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Mission from "../components/Mission";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Team from "../components/Team";
import Quiz1 from "../components/quizes/quiz1";
const Main = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Mission/>
      <Features />
      <Team/> 
      <Footer />
    </div>
  );
};
export default Main;
