import React from 'react';
import Mask from '../components/Mask'
import {Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {Suspense} from "react";
function CyberSecurity() {
  return (
    <>
    <div className="flex justify-center items-center ">
    <div className="lg:mr-10 h-[30vh]" >
    <Canvas>
    <OrbitControls />   
        <ambientLight intensity="1" />
        <Suspense fallback={null}>
            <Mask />
        </Suspense>
    </Canvas>
    </div>
    <div className="text-5xl lg:ml-10 ">
      <h1 className="text-white">Learn!<p className='text-green-500 underline' > Ethical Hacking</p> </h1>
    </div>
    </div>
    <div className="">
          
    </div>
    </>

  )
}

export default CyberSecurity