import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Room.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-14.29, 85.71, -14.29]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Plane_Material010_0.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Plane_Material001_0.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Plane_Material003_0.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.Plane_Screen_0.geometry} material={materials.Screen} />
            <mesh geometry={nodes.Plane_Material004_0.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Plane_Screen001_0.geometry} material={materials['Screen.001']} />
            <mesh geometry={nodes.Plane_Material005_0.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.Plane_Screen002_0.geometry} material={materials['Screen.002']} />
            <mesh geometry={nodes.Plane_Material006_0.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Plane_Screen003_0.geometry} material={materials['Screen.003']} />
            <mesh geometry={nodes.Plane_Material007_0.geometry} material={materials['Material.007']} />
            <mesh geometry={nodes.Plane_Screen004_0.geometry} material={materials['Screen.004']} />
            <mesh geometry={nodes.Plane_Material009_0.geometry} material={materials['Material.009']} />
            <mesh geometry={nodes.Plane_Screen006_0.geometry} material={materials['Screen.006']} />
            <mesh geometry={nodes.Plane_Material012_0.geometry} material={materials['Material.012']} />
            <mesh geometry={nodes.Plane_Material011_0.geometry} material={materials['Material.011']} />
            <mesh geometry={nodes.Plane_Material014_0.geometry} material={materials['Material.014']} />
            <mesh geometry={nodes.Plane_Material015_0.geometry} material={materials['Material.015']} />
            <mesh geometry={nodes.Plane_Material017_0.geometry} material={materials['Material.017']} />
            <mesh geometry={nodes.Plane_Material016_0.geometry} material={materials['Material.016']} />
            <mesh geometry={nodes.Plane_Material019_0.geometry} material={materials['Material.019']} />
            <mesh geometry={nodes.Plane_Material020_0.geometry} material={materials['Material.020']} />
            <mesh geometry={nodes.Plane_Material021_0.geometry} material={materials['Material.021']} />
            <mesh geometry={nodes.Plane_Material022_0.geometry} material={materials['Material.022']} />
            <mesh geometry={nodes.Plane_Material024_0.geometry} material={materials['Material.024']} />
            <mesh geometry={nodes.Plane_Material025_0.geometry} material={materials['Material.025']} />
            <mesh geometry={nodes.Plane_Screen007_0.geometry} material={materials['Screen.007']} />
            <mesh geometry={nodes.Plane_Material030_0.geometry} material={materials['Material.030']} />
            <mesh geometry={nodes.Plane_Material031_0.geometry} material={materials['Material.031']} />
            <mesh geometry={nodes.Plane_Material033_0.geometry} material={materials['Material.033']} />
            <mesh geometry={nodes.Plane_Material032_0.geometry} material={materials['Material.032']} />
            <mesh geometry={nodes.Plane_Material035_0.geometry} material={materials['Material.035']} />
            <mesh geometry={nodes.Plane_Material034_0.geometry} material={materials['Material.034']} />
            <mesh geometry={nodes.Plane_Material037_0.geometry} material={materials['Material.037']} />
            <mesh geometry={nodes.Plane_Material036_0.geometry} material={materials['Material.036']} />
            <mesh geometry={nodes.Plane_Material039_0.geometry} material={materials['Material.039']} />
            <mesh geometry={nodes.Plane_Material038_0.geometry} material={materials['Material.038']} />
            <mesh geometry={nodes.Plane_Sticker_0.geometry} material={materials.Sticker} />
            <mesh geometry={nodes.Plane_Material069_0.geometry} material={materials['Material.069']} />
            <mesh geometry={nodes.Plane_Material070_0.geometry} material={materials['Material.070']} />
            <mesh geometry={nodes.Plane_Material073_0.geometry} material={materials['Material.073']} />
            <mesh geometry={nodes.Plane_Material075_0.geometry} material={materials['Material.075']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Room.gltf')
