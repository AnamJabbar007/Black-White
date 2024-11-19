const Page14 = () => {
  return (
    <div className="h-screen relative bg-white overflow-hidden sm:p-2 p-5">
      <div className="w-full sm:p-2 h-full bg-black overflow-hidden rounded-[30px] relative">
        <div className="w-full h-full object-cover">
          <img
            src="https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1488,h_848,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Background%20Anzo_Studio.jpg"
            alt=""
          />
        </div>
        <div className="absolute gap-12 top-0 sm:bottom-40 inset-0 left-20 flex flex-col  justify-center text-center">
          {/* one */}

          <h1 className="font-[Anzo2] sm:text-[12vh] text-start text-white text-[20vw] leading-[0.8] uppercase tracking-wide">
            Got <span className="text-customGray">An</span> <br /> Idea
          </h1>
        </div>
        <div className="absolute gap-12 inset-0 top-[45%] sm:left-0 left-[16rem] flex flex-row items-center justify-center text-center">
          <img
            className="sm:w-10 sm:h-10 "
            width={96}
            height={96}
            src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_102,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/World%20Contact.png"
            alt=""
          />
          <div className="w-[2px] sm:w-px h-24 sm:h-10 bg-white"></div>
          <div className=" relative text-start sm:leading-3 leading-5 ">
            <h3 className="uppercase  text-[1.3vw] font-[Anzo3] text-customGray ">
              WORLD SERVICE{" "}
            </h3>
            <h3 className="uppercase  text-[1.3vw] font-[Anzo4] text-white ">
              I CAN COME TO WHEREVER YOU ARE.
            </h3>
            <h3 className="text-[1.3vw] font-[Anzo3]  text-customGray">
              +32 123 456 789
            </h3>
          </div>
        </div>
        <div className=" absolute  bottom-5 leading-5 left-20">
          <h3 className="uppercase  text-[1.3vw] font-[Anzo3] text-customGray ">
            IT IS NOT JUST ABOUT SOLVING THE PROBLEM
            <br />
            BUT{" "}
            <span className="text-[1.3vw] font-[Anzo4]  text-white">
              {" "}
              OFFERING THE TRANSFORMATION!
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Page14;
