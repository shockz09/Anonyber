import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Earth.gltf')
  const { actions } = useAnimations(animations, group)
  useFrame(() => group.current.rotation.y += 0.002)
  // useFrame(() => group.current.rotation.x += 0.01)
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.77}>
          <group>
            <group scale={3.27}>
              <mesh geometry={nodes.TERRE1_0.geometry} material={materials['Material.005']} />
            </group>
            <group rotation={[0, 0, -3.01]} scale={0.97}>
              <mesh geometry={nodes.Sphere002_0.geometry} material={materials['Material.006']} />
            </group>
            <group scale={4.79}>
              {/* <mesh geometry={nodes.Circle643_0.geometry} material={materials['Material.004']} /> */}
            </group>
            <group scale={0.18}>
              <mesh name="Circle455_0" geometry={nodes.Circle455_0.geometry} material={materials['Material.007']} morphTargetDictionary={nodes.Circle455_0.morphTargetDictionary} morphTargetInfluences={nodes.Circle455_0.morphTargetInfluences} />
            </group>
            <group scale={6.13}>
              <group position={[1, 0, 0]} scale={0.06}>
                {/* <mesh geometry={nodes.Icosphere002_0.geometry} material={materials['Material.008']} /> */}
              </group>
              {/* <mesh geometry={nodes.Circle_0.geometry} material={materials['Material.010']} /> */}
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Earth.gltf')