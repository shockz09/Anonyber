import React from "react";
import Navbar from "../components/Navbar";
import ResourceCard from "../components/ResourceCard";
import {Link} from "react-router-dom"
import Footer from "../components/Footer";


function Skills() {
  return (
    <div>
      <Navbar />
      <main className="text-center flex flex-col items-center justify-content gap-10 mt-10">
        <h1 className="lg:text-7xl mb-7 mt-3 underline decoration-hecker text-xl text-white">
          What Are The Skills Required For Ethical Hacking?
        </h1>

        <Link
          to="/cybersecurity"
          className="p-3 border border-hecker text-white bg-black hover:bg-dark-hecker rounded-md"
        >
          Go Back
        </Link>

        <div className="flex flex-wrap gap-10 items-center justify-center">
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/qiQR5rTSshw/sddefault.jpg"
            resource_title="Computer Networking Course - Network Engineering [CompTIA Network+ Exam Prep]"
            resource_url="https://youtu.be/qiQR5rTSshw"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/ROjZy1WbCIA/sddefault.jpg"
            resource_title="Linux Operating System - Crash Course for Beginners"
            resource_url="https://youtu.be/ROjZy1WbCIA"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/8DvywoWv6fI/sddefault.jpg"
            resource_title="Python for Everybody - Full University Python Course"
            resource_url="https://youtu.be/8DvywoWv6fI"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/HXV3zeQKqGY/sddefault.jpg"
            resource_title="SQL Tutorial - Full Database Course for Beginners"
            resource_url="https://youtu.be/HXV3zeQKqGY"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/KJgsSFOSQv0/sddefault.jpg"
            resource_title="C Programming Tutorial for Beginners"
            resource_url="https://youtu.be/KJgsSFOSQv0"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/PkZNo7MFNFg/sddefault.jpg"
            resource_title="Learn JavaScript - Full Course for Beginners"
            resource_url="https://youtu.be/PkZNo7MFNFg"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/OK_JCtrrv-c/sddefault.jpg"
            resource_title="PHP Programming Language Tutorial - Full Course"
            resource_url="https://youtu.be/OK_JCtrrv-c"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/8jLOx1hD3_o/sddefault.jpg"
            resource_title="C++ Programming Course - Beginner to Advanced"
            resource_url="https://youtu.be/8jLOx1hD3_o"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/grEKMHGYyns/sddefault.jpg"
            resource_title="Learn Java 8 - Full Tutorial for Beginners"
            resource_url="https://youtu.be/grEKMHGYyns"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/t_ispmWmdjY/sddefault.jpg"
            resource_title="Ruby Programming Language - Full Course"
            resource_url="https://youtu.be/t_ispmWmdjY"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/cZs6kh0WFRY/sddefault.jpg"
            resource_title="Computer Components For Dummies"
            resource_url="https://youtu.be/cZs6kh0WFRY"
          />
          <ResourceCard
            resource_img_url="https://media.geeksforgeeks.org/wp-content/uploads/20190429180911/Untitled-Diagram21.jpg"
            resource_title="Reverse Engineering"
            resource_url="https://www.geeksforgeeks.org/software-engineering-reverse-engineering/"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/C7vmouDOJYM/sddefault.jpg"
            resource_title="Cryptography Full Course | Cryptography And Network Security | Cryptography | Simplilearn"
            resource_url="https://youtu.be/C7vmouDOJYM"
          />
          <ResourceCard
            resource_img_url="https://miro.medium.com/max/597/1*yVGOe8wj3DGrxud5DzX51A.png"
            resource_title="Database Management System (DBMS)"
            resource_url="https://www.geeksforgeeks.org/dbms/"
          />
          <ResourceCard
            resource_img_url="https://img.youtube.com/vi/UFc-RPbq8kg/sddefault.jpg"
            resource_title="Problem-Solving for Developers - A Beginner's Guide"
            resource_url="https://youtu.be/UFc-RPbq8kg "
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Skills;
