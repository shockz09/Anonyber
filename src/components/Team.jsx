import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Team() {
  return (
    <section
      className="p-10 flex flex-col items-center justify-center gap-10 text-center"
      id="team"
    >
      <h2 className="underline decoration-hecker text-5xl mb-5 text-white">
        Our Team
      </h2>
     
      <div
        className="flex lg:flex-row flex-col gap-10 items-center justify-center text-center lg:text-left lg:items-none lg:justify-none"
        data-aos="fade-right"
      >
       
        <div className="text-white">
          <h2 className="text-3xl lg:mdb-8  text-green-500 ">Rohit Mishra</h2>
          <p>
            Rohit is a 15 year old front end web developer , a tech enthusiast
            and a aspiring engineer,
            <br /> he has 1 year of experience in programming. He is passionate
            about blockchain and Web3.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;
