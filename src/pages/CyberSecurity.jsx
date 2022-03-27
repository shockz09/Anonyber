import React from 'react';
import Mask from '../components/Mask'
import {Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {Suspense} from "react";
function CyberSecurity() {
  return (
    <div className="w-[100vw] h-[50vh]" >
    <Canvas>
    <OrbitControls />   
        <ambientLight intensity="1" />
        <Suspense fallback={null}>
            <Mask />
        </Suspense>
    </Canvas>
    </div>
  )
}

export default CyberSecurity