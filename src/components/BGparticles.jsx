import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundParticles() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesLoaded = async (container) => {
    // console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="fixed top-0 left-0 z-[-1]"
      options={{
        fullScreen: { enable: false }, // false since we use fixed position
        background: { color: "#0D1117" },
        particles: {
          color: { value: "#00E5FF" },
          links: {
            enable: true,
            color: "#03FF66",
            distance: 120,
            opacity: 0.6,
          },
          move: { enable: true, speed: 1 },
          number: { value: 80, density: { enable: true, area: 800 } },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
}
