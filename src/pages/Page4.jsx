import { useEffect, useRef } from "react";

const Page4 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
        if (video.currentTime >= 8) {
            video.currentTime = 0; // Restart video for loop
        }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
    };
}, []);

return (
    <div className="h-screen relative bg-white overflow-hidden sm:p-2 p-5">
      <div className="w-full h-full bg-black overflow-hidden rounded-[30px]">
      <video
            autoPlay
            loop
            muted
            className="w-full relative sm:left-0 left-72 h-full object-cover grayscale"
            src="https://videos.pexels.com/video-files/856356/856356-hd_1920_1080_25fps.mp4"
            ref={videoRef}
        ></video>

        <h1 className="font-[Anzo2] text-customGray text-[20vw]  absolute uppercase left-20 -inset-6 sm:inset-20 sm:text-9xl sm:tracking-normal tracking-wide ">
          What
        </h1>
        <h1 className="font-[Anzo2] text-white text-[20vw] absolute uppercase left-20 bottom-0 sm:top-[20%] sm:text-9xl sm:tracking-normal tracking-wide ">
          I do
        </h1>
         <div className=" absolute bottom-14 leading-5 sm:leading-normal left-20">
        <h3 className="uppercase text-[1.3vw] sm:text-xs font-[Anzo4]  text-white">I DESIGN AND DEVELOP</h3>
        <h3 className="uppercase  text-[1.3vw] sm:text-xs font-[Anzo3] text-customGray ">MODERN, IMPACTFUL AND LUXURIOUS</h3>
        <h3 className="text-[1.3vw] font-[Anzo4]  sm:text-xs sm:w-2/3 text-white">
          websites that seamlessly bridge your goals with needs of your clients.
        </h3></div>
      </div>
    </div>
  );
};

export default Page4;
