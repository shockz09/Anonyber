import React from "react";
import Navbar from "../components/Navbar";
import ResourceCard from "../components/ResourceCard";
import {Link} from "react-router-dom"
import Footer from "../components/Footer";


function WhatIsEthicalHacking() {
  return (
    <div>
      <Navbar />
      <main className="text-center flex flex-col items-center justify-content gap-10 mt-10">
        <h1 className="lg:text-7xl mb-7 mt-3 underline decoration-hecker text-xl text-white">
          What Is Ethical Hacking?
        </h1>

        <Link
          to="/cybersecurity"
          className="p-3 border border-hecker text-white bg-black hover:bg-dark-hecker rounded-md"
        >
          Go Back
        </Link>

        <div className="flex flex-wrap gap-10">
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/XLvPpirlmEs/sddefault.jpg"
            resource_title="Ethical Hacking In 8 Minutes | What Is Ethical Hacking? |  Simplilearn"
            resource_url="https://youtu.be/XLvPpirlmEs"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/RNwMeijExjg/sddefault.jpg"
            resource_title="All about Hacking | What to study, Packages, Job Opporutnities"
            resource_url="https://youtu.be/RNwMeijExjg"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/5ldG07Fk3iE/sddefault.jpg"
            resource_title="What is Ethical Hacking?"
            resource_url="https://youtu.be/5ldG07Fk3iE"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/2VSNn7UIXn8/sddefault.jpg"
            resource_title="What is Ethical Hacking? | Ethical Hacking for Beginners | Edureka"
            resource_url="https://youtu.be/2VSNn7UIXn8"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default WhatIsEthicalHacking;
