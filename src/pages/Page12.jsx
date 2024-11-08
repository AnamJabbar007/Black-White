import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page12 = () => {
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
          start: "top center",
          end: "bottom center",
        //   markers: true,
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return (
    <div className="h-screen relative bg-white sm:p-2 overflow-hidden p-5">
    <div className="w-full h-full sm:p-2 bg-black overflow-hidden rounded-[30px] relative">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        src="https://video.wixstatic.com/video/11062b_fc7c8b8125a94b69ad7cad3b24a8093a/1080p/mp4/file.mp4"
        // 
      ></video>

      {/* Overlay Text */}
      <div className="absolute gap-12 inset-0 flex flex-col items-center justify-center text-center">
        {/* one */}
        <div className="">
        <h1 className="font-[Anzo2] text-white text-[12vw] leading-[0.7] uppercase tracking-wide">
          Personal
        </h1>
        <h3
          className="text-[1.5vw] tracking-tighter font-[Anzo4] lowercase text-customGray mt-"
          ref={(el) => (textRef.current[0] = el)}
        >
          
Honesty, Communication, Punctuality
        </h3>
        </div>
        {/* two */}
        <div className="">
        <h1 className="font-[Anzo2] text-white text-[12vw] leading-[0.7] uppercase tracking-wide">
        PROFESSIONAL
        </h1>
        <h3
          className="text-[1.5vw] tracking-tighter font-[Anzo4] lowercase text-customGray mt-"
          ref={(el) => (textRef.current[0] = el)}
        >
         
         Photoshop, Wix Studio, Figma
        </h3>
        </div>
        {/* three */}
        <div className="">
        <h1 className="font-[Anzo2] text-white text-[12vw] leading-[0.7] uppercase tracking-wide">
          
ADDITIONAL
        </h1>
        <h3
          className="text-[1.5vw] tracking-tighter font-[Anzo4] lowercase text-customGray mt-"
          ref={(el) => (textRef.current[0] = el)}
        >

Business Development, Branding, SEO
        </h3>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Page12;
