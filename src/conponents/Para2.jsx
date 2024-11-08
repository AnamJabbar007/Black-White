import { useRef, useEffect } from 'react'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Para2 = () => {
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

  const phrase = "With a background in strategic marketing and acknowledged expertise in web development, I aim to minimize my client's resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency";
  const halfIndex = Math.ceil(phrase.split(" ").length / 2); // Find the midpoint of the words

  const splitWords = (phrase) => {
    return phrase.split(" ").map((word, i) => (
      <span
        key={i}
        className={`font-normal text-[1.25vw] font-[Anzo1] ${i < halfIndex ? 'text-customGray' : 'text-white'}`}
        ref={(el) => textRef.current[i] = el}
      >
        {word}
      </span>
    ));
  };
  

  return (
    <div className="text-center p-2 sm:leading-3 leading-5
     flex w-auto flex-wrap  text-gray-200">
      {splitWords(phrase)}
    </div>
  );
};

export default Para2;
