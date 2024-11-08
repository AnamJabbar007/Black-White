import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Page11 = () => {
  const foregroundRef = useRef(null);
  const backgroundRef = useRef(null);
  const wordRef = useRef(null);
  const container = useRef(null);

  useGSAP(() => {
    // Animation for the word scrolling
    gsap.to(wordRef.current, {
      y: 1000,
    
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: 5,
      },
    });

    // Animation for pinning the background
    gsap.to(backgroundRef.current, {
      scrollTrigger: {
        trigger: foregroundRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: backgroundRef.current,
        pinSpacing: false
      }
    });
  });

  return (
    <div ref={container} className="relative overflow-hidden">
      {/* Background Image */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-1/2 h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://static.wixstatic.com/media/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg/v1/fill/w_847,h_1014,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg')"
        }}
      />

      {/* Foreground Content */}
      <div ref={foregroundRef} className="relative z-10 bg-opacity-90">
        <h1
          ref={wordRef}
          className="text-[22vh] sm:text-[7vh] font-[Anzo2] uppercase font-bold text-black absolute right-10"
        >
          Hard
        </h1>
        {/* Foreground Images */}
        <img 
          src="https://static.wixstatic.com/media/f1c650_360814da288f418991547fa9d5e08904~mv2.png/v1/fill/w_1271,h_977,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Subtract.png" 
          alt="Foreground Example" 
          className="w-full fill-white"
        />
        <div className="flex bg-white justify-center items-center w-full h-full">
          <img
            src="https://static.wixstatic.com/media/f1c650_50b3eb1a161343a6a87b1fe48cb27f9a~mv2.png/v1/fill/w_765,h_1143,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Astro%20Me.png"
            alt="Astronaut"
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Page11;
