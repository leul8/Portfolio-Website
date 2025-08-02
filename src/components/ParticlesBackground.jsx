import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // don't use tsparticles-engine here

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine); // make sure loadFull is from tsparticles and engine is passed
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 35 },
          color: { value: "#60a5fa" },
          shape: { type: "circle" },
          opacity: { value: 0.3, random: true },
          size: { value: 4, random: true },
          move: {
            direction: "bottom",
            speed: 0.8,
            outModes: { default: "out" },
          },
          links: {
            enable: true,
            distance: 130,
            color: "#93c5fd",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
