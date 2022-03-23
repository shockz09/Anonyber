import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "./Earth";
const Intro = () => {
  return (
    <div className="h-[90vh] w-[99vw] flex justify-center">
      <div className="text-center w-1/2 text-white ">
        <div className="flex justify-center mt-60 ">
          <img src="https://i.ibb.co/w6PWygr/anonyberimg.png" alt="Anonyber" />
        </div>
        <div className="text-center ">
          <h1 className="text-2xl inline">The Internet is like a <p className="text-2xl inline text-green-500">pool</p>  we just wanna add some  <h1 className="text-2xl inline text-green-500">Chlorine</h1> ;)</h1>
        </div>
      </div>
      <div className="w-1/2 h-[70vh] mt-20 flex align-center ">
        <Canvas>
          <OrbitControls />
          <directionalLight color="green" intensity={4} position={[5,10,4]} />
          <ambientLight color="white" intensity={4}  />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};
export default Intro;
