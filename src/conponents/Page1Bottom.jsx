import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Page1Bottom = () => {

  useGSAP(function(){
    gsap.to('#circle img',{
      rotate : 360,
      duration : 5,
      repeat: -1,
      ease : 'linear',
    })
  })
  
  return (
    <div className="absolute left-0 px-12  py-16 xl:py-4  xl:mx-8 xl:bottom-[0%] items-end flex justify-between bottom-0 w-full">
        <div className="">
            <h2 className="uppercase text-[1.3vw] font-[Anzo4]">BRAND DESIGN | WEBSITE DESIGN</h2>
            <h3 className="uppercase text-[1.3vw] font-[Anzo3] text-gray-400">ESPOKE FREELANCE</h3>
        </div>
        <div id="circle" className="">
        <img className="xl:mb-10 mb-5 sm:w-8 md:w-16" src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
        <img className=" md:w-16 sm:w-8" src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
        </div>
    </div>
  )
}

export default Page1Bottom