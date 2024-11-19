import { useRef, useState } from "react";
import Page1Bottom from "../conponents/Page1Bottom";
import TiltText from "../conponents/TiltText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        50
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 10
    );
    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  useGSAP(() => {
    // Only apply animation for screens 750px and above
    if (window.innerWidth >= 750) {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 2.5,
        ease: "elastic.out(1,0.3)",
      });
    }
  }, [xVal, yVal]);

  return (
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="h-screen sm:h-[100vh] p-5  sm:p-2  bg-white"
    >
      <div
        id="Page1-in"
        className="
    relative h-full w-full bg-cover bg-center shadow-lg rounded-3xl 
    shadow-gray-500 
    p-4 sm:p-6 md:p-12 lg:p-20 
    bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2476,h_1120,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)]
    sm:bg-fixed
  "
      >
        <div className="absolute hidden sm:block inset-0 bg-transparent bg-opacity-40 rounded-3xl"></div>

        <img
          className=" h-8 md:h-16 xl:h-20"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_132,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
          alt="logo"
        />

        <TiltText rot={tiltRef} />

        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
