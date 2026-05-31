export function HeroMain() {
  return (
    <div className="bg-[#f8f8f8] w-full h-[50vh] md:h-screen">
      <div className=" w-full h-full flex items-center flex-col justify-center gap-24">
        <div className="flex flex-col items-center ">
          <div className="kanit-font font-semibold flex flex-col items-center ">
            <p className="md:text-[4em] lg:text-[5em] text-[1.5em]">
              I'm Muhammad Adil,
            </p>
            <p className="md:text-[6em] lg:text-[8em] xl:text-[10em] text-[3em] mt-[-0.45em] ">
              Web Developer.
            </p>
          </div>
          <p className="roboto-font font-extralight xl:text-3xl lg:text-2xl md:text-xl text-[10px]">
            Building responsive, accessible, and visually consistent web
            interfaces.
          </p>
        </div>
        <p className="bg-[#222222] w-fit text-white xl:text-lg text-xs lg:text-base roboto-font rounded-full font-semibold py-1 px-4">
          adil.nusabakti117@gmail.com
        </p>
      </div>
    </div>
  );
}
