// ThreeBackground.js

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Store the ref value in a variable
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for a transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Create a spiral shape
    const points = [];
    const numPoints = 150;
    const spiralRadius = 1.5;

    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      const x = Math.cos(angle) * (i / numPoints) * spiralRadius;
      const y = Math.sin(angle) * (i / numPoints) * spiralRadius;
      const z = i / numPoints * 5;
      points.push(new THREE.Vector3(x, y, z));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0xffff00 });
    const spiral = new THREE.Line(geometry, material);
    scene.add(spiral);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the spiral
      spiral.rotation.x += 0.005;
      spiral.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up Three.js scene when the component unmounts
    return () => {
      renderer.dispose();
      // Use the variable 'container' instead of 'containerRef.current'
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default ThreeBackground;
