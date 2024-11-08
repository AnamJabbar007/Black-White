import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Text = () => {
  const textRef = useRef([]);

  useEffect(() => {
    const textElements = textRef.current;

    gsap.fromTo(
      textElements,
      { opacity: 0, y: 20 }, // Start off-screen and transparent
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: textElements[0]?.parentNode,
          start: 'top center',
          end: 'bottom center',
          // markers: true,
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="flex flex-col text-start">
      
      
      {/* Original h3 */}
      <h3 className="text-[1.3vw] font-[Anzo4]  text-white mt-10" ref={(el) => (textRef.current[0] = el)}>
      <div className='uppercase  text-[1.3vw] font-[Anzo3] text-customGray'>PERSONALITY</div>
        Business relationships build on trust and compassion vs how can I get more for less +/-
      </h3>

      {/* Additional h3 elements */}
      <h3 className="text-[1.3vw] font-[Anzo4]  text-white mt-10" ref={(el) => (textRef.current[1] = el)}>
         <div className='uppercase  text-[1.3vw] font-[Anzo3] text-customGray'>APPROACH</div>
      Full dive into personality, goals and objectives with transparency of worq process vs template and unmanageable office routine +/-
      </h3>
      <h3 className="text-[1.3vw] font-[Anzo4]  text-white mt-10" ref={(el) => (textRef.current[2] = el)}>
        <div className='uppercase  text-[1.3vw] font-[Anzo3] text-customGray'>DESIGN</div>
      Design that is actually functional and helps to achieve results is design that works +/-
      </h3>
      <h3 className="text-[1.3vw] font-[Anzo4]  text-white mt-10" ref={(el) => (textRef.current[3] = el)}>
         <div className='uppercase  text-[1.3vw] font-[Anzo3] text-customGray'>FOCUS</div>
      How can I help and what can I do solve your problem or objective vs how can I sell you more +/-
      </h3>
      <h3 className="text-[1.3vw] font-[Anzo4]  text-white mt-10" ref={(el) => (textRef.current[4] = el)}>
         <div className='uppercase  text-[1.3vw] font-[Anzo3] text-customGray'>FIT</div>
      The perfect suit is the one fits you vs the one you can fit in. Choose wisely you are investing in yourself! +/-
      </h3>
      <h3 className="text-[1.3vw] font-[Anzo4]  text-white mt-10" ref={(el) => (textRef.current[5] = el)}>
         <div className='uppercase  text-[1.3vw] font-[Anzo3] text-customGray'>CORE VALUES</div>
      Time, trust and experience are resources we can not buy, yet we are sharing them and exchange +/-
      </h3>
      <h3 className="text-[1.3vw] font-[Anzo4]  text-white mt-10" ref={(el) => (textRef.current[6] = el)}>
         <div className='uppercase  text-[1.3vw] font-[Anzo3] text-customGray'>
         TO CONSIDER</div>
      Your brand, your personal identity is the reflection of your passion and goals on your future; your first online impression matters +/-
      </h3>
    </div>
  );
};

export default Text;
