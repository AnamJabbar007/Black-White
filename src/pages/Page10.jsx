import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page10 = () => {
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
    <div className="h-screen relative bg-white overflow-hidden sm:p-2 p-5">
      <div className="w-full sm:p-2 h-full bg-black overflow-hidden rounded-[30px] relative">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="https://video.wixstatic.com/video/11062b_cb0c4d13153f4008920bb26beda8de0f/1080p/mp4/file.mp4"
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
              Intuition, Imagination, Discipline
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
              Time Management, Multitasking, Creativity
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
              3D, Animation, AI Tools
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page10;
