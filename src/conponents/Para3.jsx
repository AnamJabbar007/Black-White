import { useRef, useEffect } from 'react'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Para3 = () => {
  const textRef = useRef([]);

  useEffect(() => {
    const textElements = textRef.current;

    gsap.fromTo(
      textElements,
      { opacity: 0.2 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: textElements[0]?.parentNode,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
        stagger: 0.05,
      }
    );

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const phrase = "My mission is to drive exceptional growth for my clients by increasing their brand appearance, defining their identity, and engaging customers through captivating black-and-white aesthetics with a modern, luxurious, and minimalistic touch.";
  const halfIndex = Math.ceil(phrase.split(" ").length / 2); // Find the midpoint of the words

  const splitWords = (phrase) => {
    return phrase.split(" ").map((word, i) => (
      <span
        key={i}
        className={`font-normal text-[1.25vw] font-[Anzo1] ${i < halfIndex ? 'text-white' : 'text-customGray'}`}
        ref={(el) => textRef.current[i] = el}
      >
        {word}
      </span>
    ));
  };
  

  return (
    <div className="text-center p-2 sm:leading-3 flex w-auto flex-wrap leading-5 text-gray-200">
      {splitWords(phrase)}
    </div>
  );
};

export default Para3;
