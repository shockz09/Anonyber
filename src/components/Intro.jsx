import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {Suspense} from "react";
import scene from "./scene.gltf"

const Intro = () => {
  const gltf = useLoader(GLTFLoader,scene);
  return (
    <>
    
      <div className="flex">
        <div className="">
          <Suspense fallback={null}>
            <primitive object={gltf.scene} />
          </Suspense>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};
export default Intro;
