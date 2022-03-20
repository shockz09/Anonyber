import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "./Room";
const Intro = () => {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="w-2/3 h-2/3 mt-20 flex align-center">
        <Canvas>
          <OrbitControls />
          <directionalLight color="green" intensity={4} position={[5,10,4]} />
          {/* <ambientLight color="white" intensity={0.2}  /> */}
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
      <div className="text-center w-1/3 text-white ">
        <div className="flex justify-center mt-60">
          <img src="https://i.ibb.co/w6PWygr/anonyberimg.png" alt="Anonyber" />
        </div>
      </div>
    </div>
  );
};
export default Intro;
