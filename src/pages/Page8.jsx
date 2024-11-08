import Text from "../conponents/Text"
import circle from "../assets/clock.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { IoArrowDown } from "react-icons/io5";


const Page8 = () => {
    const clock = useRef()

    useGSAP(function(){
        gsap.to(clock.current, {
            rotate: 45,
            duration: 8,     // Increased duration for a slower animation
            repeat: -1,
            // yoyo: true,      // Creates a smooth back-and-forth effect
            ease: "bounce.out", // Smooth, slow easing function
          });
          
    })
  return (
    <div className="h-auto w-full sm:w-auto relative bg-white sm:p-2 p-5">
        <div className=" w-full sm:p-2 sm:w-auto relative p-10 overflow-hidden h-auto bg-black rounded-[30px]">
        <div className="flex justify-eve ">
            <div className="w-[40%] relative">
            <div className="flex flex-col gap-[2px]">
            <h1 className="text-[20vw] font-[Anzo2] text-white uppercase leading-[0.9]">
              Right
            </h1>
            <div className="flex ">
            <h1 className="text-[20vw] font-[Anzo2] text-customGray uppercase leading-[0.7]">
              Fit
              
            </h1>
            <span  className="w-10 h-10 sm:w-6 sm:h-6 sm:p-1 mt-32 sm:mt-6 -rotate-[132deg] flex justify-start text-center p-2 items-center  rounded-full   bg-white"><IoArrowDown className="text-4xl text-black" /></span></div>
          </div>  
          <img ref={clock} className="absolute top-[40%] w-[60vh] h-auto" src={circle} alt="" />
            </div>
            <div className="w-[60%]">
        <Text/></div>
        </div>
        <div className=" relative  bottom-0 leading-5 sm:leading-3 left-">
        <h3 className="uppercase  text-[1.3vw] font-[Anzo3] text-customGray ">SOUNDS GOOD?</h3>
        <h3 className="uppercase  text-[1.3vw] font-[Anzo3] text-customGray ">
        THEN PLEASE <span className="text-[1.3vw] font-[Anzo4]  text-white"> EMAIL ME</span></h3>
        <div id="ArrowCircle" className="w-10 h-10 sm:w-6 sm:h-6 sm:p-1 rotate-45 flex justify-start text-center p-2 items-center  rounded-full absolute sm:right-4 right-20 bottom-0 bg-white"> <IoArrowDown className="text-4xl text-black" /></div>

        </div>
        </div>
    </div>
  )
}

export default Page8