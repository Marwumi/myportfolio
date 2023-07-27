// ParticleBackground.js

import React, { useEffect } from "react";

const ParticleBackground = () => {
  useEffect(() => {
    // Make sure you use the global particlesJS object loaded from the CDN
    window.particlesJS("particles-container", {
      particles: {
        number: {
          value: 30, // Adjust the number of particles
        },
        color: {
          value: "#ffffff", // Set the color of the particles
        },
        shape: {
          type: "circle", // Set the shape of the particles (e.g., "circle", "triangle", "polygon")
        },
        opacity: {
          value: 0.5, // Adjust the opacity of the particles
        },
        size: {
          value: 3, // Adjust the size of the particles
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true, // Enable interactivity on hover
            mode: "repulse", // Change the interaction mode on hover (e.g., "grab", "bubble", "repulse")
          },
        },
      },
    });
  }, []);

  return <div id="particles-container" className="particle-background"></div>;
};

export default ParticleBackground;
