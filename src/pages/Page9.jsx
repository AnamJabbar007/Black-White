import Skills from "../conponents/Skills";

const Page9 = () => {
  return (
    <div className="h-screen w-full overflow-hidden relative bg-white">
      <div className="h-screen w-full absolute flex justify-center items-center">
        <h1 id="Skill" className="text-[40vw] sm:text-[22vh] z-10 font-[Anzo2]">
          Skills
        </h1>
      </div>
      <Skills />
    </div>
  );
};

export default Page9;
