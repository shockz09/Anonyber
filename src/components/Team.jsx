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
        <img
          src="https://i.ibb.co/gzw87p1/ansh-anonyber.jpg"
          className=" border border-hecker h-[150px] w-[240]"
        />
        <div className="text-white">
          <h2 className="text-3xl lg:mb-4  text-green-500 ">Ansh Mamgain</h2>
          <p>
            {" "}
            Ansh Mamgain is a 15 year old boy from Delhi obsessed with tech.
            <br />
            He is fluent in many languages and has 2+ years of work experiance
            with Full Stack Web Development
            <br />
          </p>
        </div>
      </div>
      <div
        className="flex flex-col gap-10 lg:flex-row-reverse items-center justify-center text-center lg:text-right lg:items-none lg:justify-none"
        data-aos="fade-left"
      >
        <img
          src="https://cdn.discordapp.com/attachments/918520268236943400/958308145321607218/WhatsApp_Image_2022-03-28_at_8.47.47_PM-2-modified.jpeg"
          className="border border-hecker h-48 w-48"
        />
        <div className="text-white">
          <h2 className="text-3xl lg:mb-4  text-green-500 ">Vaarun Sinha</h2>
          <p>
            Vaarun Sinha is a young and enthusiastic website & python developer.{" "}
            <br /> He regularly shares his knowledge on his personal blog as he
            is passionate about teaching.
          </p>
        </div>
      </div>
      <div
        className="flex lg:flex-row flex-col gap-10 items-center justify-center text-center lg:text-left lg:items-none lg:justify-none"
        data-aos="fade-right"
      >
        <img
          src="https://i.ibb.co/QFNq3Pn/rohithacka-modified.jpg"
          className="border border-hecker h-48 w-48"
        />
        <div className="text-white">
          <h2 className="text-3xl lg:mdb-8  text-green-500 ">Rohit Mishra</h2>
          <p>
            Rohit is a 12 year old front end web developer , a tech enthusiast
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
