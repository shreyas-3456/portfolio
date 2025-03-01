'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Dots = () => {
  const groupRef = useRef(null)
  const count = 1000 // Number of dots

  // Create a circular texture so that the points appear as round dots
  const circleTexture = useMemo(() => {
    const size = 128
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const context = canvas.getContext('2d')
    if (context) {
      context.fillStyle = '#ffffff'
      context.beginPath()
      context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
      context.fill()
    }
    return new THREE.CanvasTexture(canvas)
  }, [])

  // Generate random positions for each dot within a cube of side length 10 centered at the origin
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10 // x coordinate
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10 // y coordinate
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 // z coordinate
    }
    return positions
  }, [count])

  // Rotate the dots group continuously for a dynamic backdrop effect
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1 // Slow rotation on Y axis
      groupRef.current.rotation.x += delta * 0.05 // Slow rotation on X axis
    }
  })

  return (
    <points ref={groupRef}>
      <bufferGeometry attach='geometry'>
        <bufferAttribute
          attach='attributes-position'
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={circleTexture} // Use the circular texture
        alphaTest={0.5} // Makes the edges smooth by discarding pixels below the threshold\n        color="white"
        size={0.009} // Small dots
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  )
}

const DotsBackdrop = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <ambientLight intensity={0.5} />
      <Dots />
    </Canvas>
  )
}

export default DotsBackdrop
