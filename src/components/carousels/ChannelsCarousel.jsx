import { useEffect, useRef, useState } from "react";

const channels = [
  { name: "A&E",                filename: "CANAL_AANDE.svg"               },
  { name: "Cartoon Network",    filename: "CANAL_cartoon_network.svg"     },
  { name: "Disney",             filename: "CANAL_disney.svg"              },
  { name: "ESPN",               filename: "CANAL_ESPN.svg"                },
  { name: "ESPN2",              filename: "CANAL_ESPN2.svg"               },
  { name: "ESPN3",              filename: "CANAL_ESPN3.svg"               },
  { name: "ESPN4",              filename: "CANAL_ESPN4.svg"               },
  { name: "FX",                 filename: "CANAL_fx.svg"                  },
  { name: "National Geographic",filename: "CANAL_national_geographic.svg" },
  { name: "Paramount",          filename: "CANAL_paramount.svg"           },
  { name: "Star",               filename: "CANAL_star.svg"                },
  { name: "Syfy",               filename: "CANAL_syfy.svg"                },
  { name: "TNT",                filename: "CANAL_tnt.svg"                 },
  { name: "Warner",             filename: "CANAL_warner.svg"              },
];

// Duplicamos para loop infinito
const ITEMS = [...channels, ...channels, ...channels];

export default function ChannelsCarousel() {
  const trackRef   = useRef(null);
  const rafRef     = useRef(null);
  const offsetRef  = useRef(0);
  const pausedRef  = useRef(false);
  const SPEED      = 0.5; // px por frame — sube para más velocidad

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!pausedRef.current) {
        offsetRef.current += SPEED;
        // Ancho de un set completo de canales
        const setWidth = track.scrollWidth / 3;
        if (offsetRef.current >= setWidth) {
          offsetRef.current -= setWidth;
        }
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => { pausedRef.current = true;  }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div
        ref={trackRef}
        className="flex items-center gap-6 will-change-transform"
        style={{ width: "max-content" }}
      >
        {ITEMS.map((channel, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl flex items-center justify-center p-4 transition-all duration-300 hover:scale-110"
            style={{
              boxShadow: "0 2px 12px rgba(45,66,88,0.08)",
              border:    "1px solid #e2e8f0",
            }}
          >
            <img
              src={`/channels/${channel.filename}`}
              alt={channel.name}
              className="w-full h-full object-contain"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}