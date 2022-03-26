import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "./Earth";
import AOS from "aos";
import "aos/dist/aos.css";
import Typing from "react-typing-animation";
import React, { useEffect } from "react";

const Intro = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="h-[100vh] w-[99vw] lg:flex lg:flex-row-reverse justify-center items-center  lg:h-[90vh] lg:m-0"
      data-aos="fade-right"
    >
      <div className="lg:w-1/2 lg:h-[70vh] sm:h-[10vh] lg:mt-20 ">
        <Canvas>
          <OrbitControls />
          <directionalLight color="green" intensity={4} position={[5, 10, 4]} />
          <ambientLight color="white" intensity={4} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
      <div className="text-center lg:w-1/2 text-white lg:ml-10">
        <div className=" text-center flex flex-col justify-center ">
          <img src="https://i.ibb.co/w6PWygr/anonyberimg.png" alt="Anonyber" />

          <h1 className="text-4xl m-10">
            <Typing>
              The{" "}
              <span className=" text-green-500 underline text-center">
                <span>Best Free Ed-Tech</span>
              </span>
              {" "} Platform <br /> To Stay Cyber Aware. ;)
              <Typing.Backspace count={3} />
            </Typing>
          </h1>
          <div className="flex justify-center">
            <a
              href="#Mission"
              className="border border-hecker p-2 w-1/2 hover:bg-dark-hecker m-10"
              style={{
                transform: "skew(-10deg)",
              }}
            >
              <span
                style={{
                  transform: "skew(10deg)",
                }}
              >
                Checkout The Features
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
