import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Mask from "../components/Mask";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function CyberSecurity() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center lg:flex-row text-center lg:text-left">
        <div className="lg:mr-10 h-[30vh]">
          <Canvas>
            <OrbitControls />
            <ambientLight intensity="1" />
            <Suspense fallback={null}>
              <Mask />
            </Suspense>
          </Canvas>
        </div>
        <div className="text-5xl lg:ml-10 ">
          <h1 className="text-white">
            Learn!<p className="text-green-500 underline"> Ethical Hacking</p>{" "}
          </h1>
        </div>
      </div>
      <div className="mt-40">
        <div
          data-aos="fade-right"
          className="lg:flex-row flex flex-col justify-center lg:w-1/2 mt-5 ml-5 lg:mt-20 lg:ml-20 items-center border-left  border-green-500"
        >
          <img
            className="border-l-4 lg:w-[18vw] lg:h-[18vh] pl-4 border-green-500"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="lg:text-left lg:ml-8 ml-5 mt-5 text-center flex flex-col items-center justify-center  lg:items-start lg:justify-start">
            <h1 className="text-green-500 text-3xl">
              What is Ethical Hacking ?
            </h1>
            <p className="text-white text-xl ">
              Understand Ethical hacking and get started with your cybersecurity
              journey !{" "}
            </p>
            <div className="flex justify-start mt-2">
              <button className="btn btn-primary p-2 border-2 border-green-500 hover:bg-green-500 text-white">
                <Link to="/cybersecurity/what-is-ethical-hacking">Visit</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end lg:mr-10">
          <div
            data-aos="fade-left"
            className="lg:flex-row flex flex-col-reverse justify-center lg:w-1/2 mt-5 ml-5 lg:mt-20 lg:ml-20 items-center border-left  border-green-500 gap-5"
          >
            <div className="lg:text-left lg:ml-8 ml-5 mt-5 text-center flex flex-col items-center justify-center  lg:items-start lg:justify-start">
              <h1 className="text-green-500 text-3xl">
                Prequisites for Ethical Hacking
              </h1>
              <p className="text-white text-xl ">
                Know what you need to get started !{" "}
              </p>
              <div className="flex justify-start mt-2">
                <button className="btn btn-primary p-2 border-2 hover:bg-green-500 border-green-500 text-white">
                  <Link to="/cybersecurity/prequisites-for-ethical-hacking">
                    Visit
                  </Link>
                </button>
              </div>
            </div>
            <img
              className="border-l-4 lg:w-[18vw] lg:h-[18vh] pl-4 border-green-500"
              src="https://i.ibb.co/4pkF2WG/prerequisits-2.png"
              alt=""
            />
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="lg:flex-row flex flex-col justify-center lg:w-1/2 mt-8 ml-5 lg:mt-20 lg:ml-20 items-center border-left  border-green-500"
        >
          <img
            className="border-l-4 lg:w-[18vw] lg:h-[18vh] pl-4 border-green-500"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCbzPr0xpB5LrrgGWKql2I8JhjHHB6yxZGCeNKdtkSKUdbXsqKcg7WXDXtJQ16A7gLvM&usqp=CAU"
            alt=""
          />
          <div className="lg:text-left lg:ml-8  mt-5 text-center flex flex-col items-center justify-center  lg:items-start lg:justify-start">
            <h1 className="text-green-500 text-3xl">
              Resources for ethical hacking
            </h1>
            <p className="text-white text-xl ">
              Now that you are all setting up, its time to get started with the
              learning !
            </p>
            <div className="flex justify-start mt-2">
              <button className="btn btn-primary p-2 border-2 hover:bg-green-500 border-green-500 text-white">
                <Link to="/cybersecurity/learn-ethical-hacking">Visit</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div
            data-aos="fade-left"
            className="lg:flex-row flex flex-col-reverse justify-center lg:w-1/2 mt-5 ml-5 lg:mt-20 lg:ml-20 items-center border-left  border-green-500 gap-5"
          >
            <div className="lg:text-left lg:ml-8 ml-5 mt-5 text-center flex flex-col items-center justify-center  lg:items-start lg:justify-start">
              <h1 className="text-green-500 text-3xl">Top sites to refer</h1>
              <p className="text-white text-xl ">
                Hand picked websites to assist you throughout your journey to
                master CyberSecurity !{" "}
              </p>
              <div className="flex justify-end mt-2">
                <button className="btn btn-primary p-2 border-2 hover:bg-green-500 border-green-500 text-white">
                  <Link to="/cybersecurity/top-websites-to-refer">Visit</Link>
                </button>
              </div>
            </div>
            <img
              className="border-l-4 lg:w-[18vw] lg:h-[18vh] pl-4 border-green-500 lg:mr-5"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="lg:flex-row flex flex-col justify-center lg:w-1/2 mt-5 ml-5 lg:mt-20 lg:ml-20 items-center border-left  border-green-500"
        >
          <img
            className="border-l-4 w-[85vw] h-[18vh] lg:w-[18vw] lg:h-[18vh] pl-4 border-green-500 mt-5"
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200604232708/Skills-Required-to-Become-a-Ethical-Hacker.png"
            alt=""
          />
          <div className="lg:text-left lg:ml-8 mt-5 text-center flex flex-col items-center justify-center  lg:items-start lg:justify-start">
            <h1 className="text-green-500 text-3xl">Skills</h1>
            <p className="text-white text-xl ">
              Now with the basics clear, Its time to advance and learn useful
              skills which will uplift your knowledge about ethcial hacking
            </p>
            <div className="flex justify-start mt-2">
              <button className="btn btn-primary p-2 border-2 hover:bg-green-500 border-green-500 text-white">
                <Link to="/cybersecurity/skills-to-learn  ">Visit</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CyberSecurity;
