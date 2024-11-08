import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Page5 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Only apply animation for screens 750px and above
    if (window.innerWidth >= 750) {
      gsap.from(".rotateText2", {
        transform: "rotateX(-80deg)",
        opacity: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".rotateText2",
          start: "top 60%",
          end: "top -250%",
          scrub: 2,
        },
      });
    }
  });

  return (
    <div id="section2" className="bg-white overflow-x-hidden text-center p-6 xl:p-10 text-black">
      <div className="rotateText2 mt-40">
        <h1 className="text-[42vw] font-[Anzo2] text-black uppercase leading-[35vw]">HELPING</h1>
      </div>
      <div className="rotateText2">
        <h1 className="text-[42vw] font-[Anzo2] lineText uppercase leading-[35vw]">MY</h1>
      </div>
      <div className="rotateText2">
        <h1 className="text-[42vw] font-[Anzo2] text-black uppercase leading-[35vw]">CLIENTS</h1>
      </div>
      <div className="rotateText2">
        <h1 className="text-[42vw] font-[Anzo2] text-black uppercase leading-[35vw]">TO ACHIEVE</h1>
      </div>
      <div className="rotateText2">
        <h1 className="text-[42vw] font-[Anzo2] lineText uppercase leading-[35vw]">THEIR</h1>
      </div>
      <div className="rotateText2">
        <h1 className="text-[42vw] font-[Anzo2] text-black uppercase leading-[35vw]">DREAMS!</h1>
      </div>
    </div>
  );
};

export default Page5;
