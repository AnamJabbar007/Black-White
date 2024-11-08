import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const wordRef = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.to(wordRef.current, {
      y: "60vh",
    
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 3,
      },
    });
  }, []);

  return (
    <div ref={container} className="relative bg-white h-screen flex ">
      <h1
        ref={wordRef}
        className="text-[22vh] sm:text-[10vh] top-5 font-[Anzo2] uppercase font-bold text-black absolute left-10"
      >
        Soft
      </h1>
    </div>
  );
};

export default Skills;
