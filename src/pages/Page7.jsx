import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Para1 from "../conponents/Para1";
import Para2 from "../conponents/Para2";
import Para3 from "../conponents/Para3";
import { useGSAP } from "@gsap/react";
import { IoArrowDown } from "react-icons/io5";



const Page7 = () => {
  const paraRefs = useRef([]);
  const triangle = useRef();
  const sun = useRef();
  const devcircle = useRef();
  const rocket = useRef()

  useGSAP(function(){
    gsap.to(rocket.current, {
      y: -5,          // Move 20 pixels upward
      duration: 1,   // Duration of the upward movement
      repeat: -1,      // Infinite repeat
      yoyo: true,      // Returns to the original position
      ease: "bounce.out", // Smooth easing
    });
  })

  useGSAP(function(){
    gsap.to(devcircle.current,{
      rotateY : 360,
      duration : 5,
      repeat: -1,
      ease : 'linear',
    })
  })

  useGSAP(function(){
    gsap.to(sun.current,{
      rotate : 360,
      duration : 5,
      repeat: -1,
      ease : 'linear',
    })
  })

  useGSAP(function() {
    gsap.from(triangle.current,{
      scale:1,
      rotate:90,
      duration:2,
      delay:1,
      scrollTrigger:{
        trigger: triangle.current,
        scroller:"body",
        // markers: true,
        start:"Top 10%",
        end:"Top 50%",
        scrub: 5,
    }
  })
  })

  useEffect(() => {
    gsap.fromTo(
      paraRefs.current,
      { opacity: 0.5 },
      {
        opacity: 1,
        stagger: 5,
        duration: 3,
        scrollTrigger: {
          trigger: paraRefs.current[0].parentNode,
          start: "top center",
          end: "bottom center",

          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="h-auto sm:h-screen w-full relative bg-white sm:p-2 p-5">
      <div className="sm:h-screen sm:p-2 w-full relative p-5 overflow-hidden h-auto bg-black rounded-[30px]  ">
        <img ref={triangle}
          className="object-cover left-1/2 transform -translate-x-1/2 opacity-70 h-3/4 sm:h-1/2 relative"
          src="https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_auto/triangle%203.png"
          alt=""
        />
        <div className="flex p-8 justify-between w-full flex-row absolute top-0">
          <div className="flex flex-col gap-[2px]">
            <h1 className="text-[20vw] font-[Anzo2] text-customGray uppercase leading-[0.9]">
              How
            </h1>
            <h1 className="text-[20vw] font-[Anzo2] text-white uppercase leading-[0.7]">
              can
            </h1>
          </div>
          <div className="flex flex-col items-end pr-10 gap-[2px]">
            <h1 className="text-[20vw] font-[Anzo2] text-white uppercase leading-[0.9]">
              I help
            </h1>
            <h1 className="text-[20vw] font-[Anzo2] text-white uppercase leading-[0.7]">
              you
            </h1>
          </div>
        </div>

        <div className="absolute top-[60%]  flex lg:gap-x-16 gap-x-6 left-1/2 transform -translate-x-1/2 w-11/12 justify-center items-center">
          <div className=" " ref={(el) => (paraRefs.current[0] = el)}>
            <Para1 />
          </div>

          <div className="" ref={(el) => (paraRefs.current[1] = el)}>
            <Para2 />
          </div>
          <div className="" ref={(el) => (paraRefs.current[2] = el)}>
            <Para3 />
          </div>
        </div>
        <div className="flex justify-between relative bottom-5 sm:top-14 pt-0 sm:mx-2 mx-10 w-10/12 left-1/2 transform -translate-x-[60%]  items-center ">
          <div className="flex gap-5 sm:gap-1">
            <img ref={sun} className="w-[4vw] mt-4 h-[4vw]" src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_86,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SUN.png" alt="" />
            <h4 className="text-[5vw] font-[Anzo2] text-white uppercase">
              Design <span className="text-[1.3vw] font-[Anzo1] ">01</span>
            </h4>
          </div>
          <div className="flex gap-5 sm:gap-1">
          <img ref={devcircle} className="w-[4vw] mt-4 h-[4vw]" src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EARTH.png" alt="" />
            <h4 className="text-[5vw] font-[Anzo2] text-white uppercase">
              Development <span className="text-[1.3vw] font-[Anzo1] ">02</span>
            </h4>
          </div>
          <div className="flex -ml-6 gap-5 sm:gap-1">
          <img ref={rocket} className="w-[4.25vw]  mt-4 h-[4.25vw]" src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_83,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/START%20UP.png" alt="" />
            <h4 className="text-[5vw] font-[Anzo2] text-white uppercase">
              Branding <span className="text-[1.3vw] font-[Anzo1] ">03</span>
            </h4>
          </div>
        </div>
        <div className="relative sm:top-80">
        <div className=" relative  bottom-0 leading-5 sm:leading-3 left-10">
        <h3 className="uppercase  text-[1.3vw] font-[Anzo3] text-customGray ">GOT A PROJECT?        </h3>
        <h3 className="uppercase  text-[1.3vw] font-[Anzo3] text-customGray ">
        THEN PLEASE <span className="text-[1.3vw] font-[Anzo4]  text-white"> CONTACT ME</span></h3>
        <div id="ArrowCircle" className="w-10 sm:w-6 h-10 sm:h-6 rotate-45 flex justify-start text-center p-2 sm:p-1 items-center  rounded-full absolute right-20 bottom-0 bg-white"> <IoArrowDown className="text-4xl text-black" /></div>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
