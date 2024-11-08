import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skill2 = () => {
  const wordRef = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.to(wordRef.current, {
      y: "90vh",
    
      scrollTrigger: {
        trigger: container.current,
        start: "top 10%",
        end: "bottom top",
        scrub: 3,
      },
    });
  }, []);

  return (
    <div ref={container} className=" ">
      <h1
        ref={wordRef}
        className="text-[22vh] font-[Anzo2] uppercase font-bold text-black absolute left-10"
      >
        Hard
      </h1>
    </div>
  );
};

export default Skill2;
