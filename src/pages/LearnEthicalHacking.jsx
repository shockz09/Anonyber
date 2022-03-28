import React from "react";
import Navbar from "../components/Navbar";
import ResourceCard from "../components/ResourceCard";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


function LearnEthicalHacking() {
  return (
    <div>
      <Navbar />
      <main className="text-center flex flex-col items-center justify-content gap-10 mt-10">
        <h1 className="lg:text-7xl mb-7 mt-3 underline decoration-hecker text-xl text-white">
          How to learn ethical hacking?
        </h1>
        <Link
          to="/cybersecurity"
          className="p-3 border border-hecker text-white bg-black hover:bg-dark-hecker rounded-md"
        >
          Go Back
        </Link>
        <div className="flex flex-wrap gap-10">
          <ResourceCard
            resource_img_url="https://i.udemycdn.com/course/750x422/857010_8239_2.jpg"
            resource_title="Learn Ethical Hacking From Scratch"
            resource_url="https://www.udemy.com/course/learn-ethical-hacking-from-scratch/"
          />
          <ResourceCard
            resource_img_url="https://1.bp.blogspot.com/-3yjL8hmCmu4/YS6Lxzs7OhI/AAAAAAAACNA/VSQDEZjEgQQWqFKWGBshYGycjMfvT9MrQCLcBGAsYHQ/w640-h360/Complete%2BEthical%2BHacking%2BBootcamp%2B2021%2BZero%2Bto%2BMastery.jpg"
            resource_title="Complete Ethical Hacking Bootcamp 2022: Zero to Mastery"
            resource_url="https://www.udemy.com/course/complete-ethical-hacking-bootcamp-zero-to-mastery/"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/dz7Ntp7KQGA/sddefault.jpg"
            resource_title="Ethical Hacking Full Course - Learn Ethical Hacking in 10 Hours | Ethical Hacking Tutorial | Edureka"
            resource_url="https://youtu.be/dz7Ntp7KQGA"
          />
          <ResourceCard
            resource_img_url="https://dtmvamahs40ux.cloudfront.net/gl-academy/course/course-74-ethical%20hacking.jpg"
            resource_title="Introduction to Ethical Hacking"
            resource_url="https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-ethical-hacking"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LearnEthicalHacking;
