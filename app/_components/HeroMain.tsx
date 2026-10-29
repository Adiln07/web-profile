export function HeroMain() {
  return (
    <section className="bg-[#f8f8f8] text-[#222222] w-full min-h-[65vh] md:min-h-[calc(100vh-5em)] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-[75em] mx-auto flex flex-col items-center justify-center gap-12 md:gap-20 text-center">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <h1 className="kanit-font font-semibold flex flex-col items-center tracking-tight text-[#222222]">
            <span className="text-2xl sm:text-4xl md:text-[3.75em] lg:text-[4.75em] leading-tight">
              I&apos;m Muhammad Adil,
            </span>
            <span className="text-5xl sm:text-7xl md:text-[5.75em] lg:text-[7.5em] xl:text-[9.25em] leading-[0.95] font-bold">
              Web Developer.
            </span>
          </h1>
          <p className="roboto-font font-light text-[#555555] text-sm sm:text-base md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
            Building responsive, accessible, and visually consistent web
            interfaces.
          </p>
        </div>

        <a
          href="mailto:adil.nusabakti117@gmail.com"
          className="bg-[#222222] hover:bg-[#3a3a3a] transition-colors duration-200 w-fit text-white text-xs sm:text-sm lg:text-base xl:text-lg roboto-font rounded-full font-medium py-2 px-6 shadow-sm"
        >
          adil.nusabakti117@gmail.com
        </a>
      </div>
    </section>
  );
}
