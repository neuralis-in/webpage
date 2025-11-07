import { useCallback, useMemo } from "react";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { Particles } from "react-tsparticles";
import { useTheme } from "../context/ThemeContext";

export const ParticlesBackground = () => {
  const { theme } = useTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 0
      },
      detectRetina: true,
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: ["bubble", "attract"]
          },
          resize: true
        },
        modes: {
          attract: {
            distance: 180,
            duration: 0.4,
            factor: 2
          },
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 0.8,
            size: 4
          }
        }
      },
      particles: {
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 160
        },
        color: {
          value:
            theme === "dark"
              ? ["#38bdf8", "#a855f7", "#34d399"]
              : ["#1d4ed8", "#4338ca", "#0f766e"]
        },
        links: {
          color: theme === "dark" ? "#38bdf8" : "#1d4ed8",
          distance: 160,
          enable: true,
          opacity: theme === "dark" ? 0.45 : 0.3,
          width: 1.1
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          outModes: {
            default: "bounce"
          }
        },
        opacity: {
          animation: {
            enable: true,
            minimumValue: 0.2,
            speed: 0.6
          },
          value: theme === "dark" ? { min: 0.2, max: 0.6 } : { min: 0.15, max: 0.45 }
        },
        size: {
          animation: {
            enable: true,
            minimumValue: 1,
            speed: 2
          },
          value: { min: 1, max: 3.8 }
        },
        shape: {
          type: "circle"
        }
      }
    }),
    [theme]
  );

  return (
    <Particles
      key={theme}
      id="tsparticles"
      init={particlesInit}
      className="pointer-events-none fixed inset-0 z-0"
      options={options}
    />
  );
};
