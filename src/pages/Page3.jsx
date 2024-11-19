const Page3 = () => {
  return (
    <div className="h-screen relative flex items-center justify-center bg-white">
      <img
        className="absolute  overflow-hidden z-20 lg:h-[80vh] md:[60vh] sm:h-auto"
        src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_918,h_528,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png"
        alt="jh"
      />
      <video
        autoPlay
        loop
        muted
        className=" relative z-10 object-cover lg:h-[68vh] xl:w-[100vh] lg:w-[50vh] sm:h-auto md:w-[72%] md:h-[33vh] sm:w-[75%] w-[48vh]"
        src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"
      ></video>
      <div className="h-0.5 w-3/5 sm:w-5/6 top-[40%] absolute z-0 line"></div>
      <div className="h-0.5 w-4/5 sm:w-11/12 top-[58%] sm:top-[50%] absolute z-0 line"></div>
      <div className="h-0.5 w-full top-[76%] sm:top-[60%] absolute z-0 line"></div>
    </div>
  );
};

export default Page3;
