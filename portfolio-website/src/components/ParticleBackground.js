import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = ({ children }) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        }).then(() => {
          setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            fullScreen: 
            {
                enable: true,
                zIndex: 0
            },
          background: {
            color: {
              value: "#0C0C0C",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: ["repulse", "bubble"],
              },
            },
            modes: {
                bubble: {
                    opacity: 0.8,
                    size: 10,
                    color: {
                        value: "#240750",
                    }
                },
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
          },
          particles: {
            color: {
              value: "#9B3922",
              animation: {
                enable: true,
                speed: 20,
                sync: true,
                }
            },
            links: {
              color: "#F2613F",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
              limit: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: ["polygon", "circle"],
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }),
        [],
      );

    if (init) {
        return (
            <div>
                <Particles 
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
                <div style={{ position: 'relative' }}>
                    {children}
                </div>
            </div>
        );
    }
    
    return <></>
}

export default ParticleBackground;