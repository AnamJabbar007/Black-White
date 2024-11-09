

const TiltText = ({rot}) => {
  return (
    <div  ref={rot} id="tiltDev" className="xl:mt-28 md:mt-24 mt-20 sm:mt-52">
        <h1 className="text-[4.2vw] sm:text-7xl leading-[4vw] sm:leading-none  sm:font-[Anzo2] font-[Anzo1]">I AM <span className="text-black sm:hidden">
        DARK MODE</span>™</h1>
        <h1 className="text-[8.2vw] sm:text-9xl leading-[7vw] sm:leading-none sm:font-[Anzo2] font-[Anzo1]">DESIGNER</h1>
        <h1 className="text-[4.2vw] sm:text-7xl leading-[4vw] sm:leading-none  sm:font-[Anzo2] font-[Anzo1]">TO HIRE</h1>
       

    </div>
  )
}

export default TiltText