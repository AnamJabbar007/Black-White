import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoArrowDown } from "react-icons/io5";

const Page6 = () => {
  useGSAP(function () {
    gsap.from("#About #ArrowCircle", {
      scale: 1,
      rotate: 180,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: "#About #ArrowCircle",
        scroller: "body",
        // markers: true,
        start: "Top 90%",
        end: "Top 80%",
        scrub: 5,
      },
    });
  });
  return (
    <div id="About" className="h-screen relative bg-white sm:p-2 p-5">
      <div className="w-full overflow-hidden h-full bg-black rounded-[30px]">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/1080p/mp4/file.mp4"
        ></video>
        <h1 className="font-[Anzo2] text-white text-[40vw] absolute uppercase left-20 -bottom-36 sm:bottom-0 ">
          About
        </h1>

        <div
          id="ArrowCircle"
          className="w-12 h-12 flex justify-start text-center p-2 items-center  rounded-full absolute right-20 bottom-20 bg-white"
        >
          {" "}
          <IoArrowDown className="text-4xl text-black" />
        </div>
      </div>
    </div>
  );
};

export default Page6;
