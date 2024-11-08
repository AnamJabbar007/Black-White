import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
  
  return (
    <div className="fixed flex items-center justify-end w-full py-20 px-8 z-30">
        <button className="xl:px-12 px-8  py-2 xl:py-3 border-4 text-base hover:bg-gray-700 bg-black rounded-full">Hire Me</button>
        <CgMenuGridO className="text-4xl text-zinc-500 ml-3"/>
        
    </div>
  )
}

export default Header