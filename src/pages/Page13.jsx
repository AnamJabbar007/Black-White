import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Page13 = () => {
  const foregroundRef = useRef(null);
  const backgroundRef = useRef(null);

  const container = useRef(null);

  useGSAP(() => {
    // Animation for the word scrolling

    // Animation for pinning the background
    gsap.to(backgroundRef.current, {
      scrollTrigger: {
        trigger: foregroundRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: backgroundRef.current,
        pinSpacing: false,
      },
    });
  });

  return (
    <div ref={container} className="relative overflow-hidden">
      {/* Background Image */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-1/2 h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg/v1/fill/w_847,h_1014,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg')",
        }}
      />

      {/* Foreground Content */}
      <div ref={foregroundRef} className="relative z-10 bg-opacity-90">
        {/* Foreground Images */}
        <img
          src="https://static.wixstatic.com/media/f1c650_710941ddfbe8422c9739a586a079bbe6~mv2.png/v1/fill/w_1895,h_1457,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/Subtract.png"
          alt="Foreground Example"
          className="w-full fill-white"
        />
      </div>
    </div>
  );
};

export default Page13;
