import Link from "next/link";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion } from "./Accordion";

export function WorkExperiences() {
  return (
    <section
      id="my-experience"
      className="w-full bg-white text-[#222222] py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mx-auto xl:max-w-[75em] lg:max-w-[55em] md:max-w-[45em] px-6 md:px-8 mb-12 md:mb-16">
        <div className="kanit-font font-bold text-[#222222] md:w-3/5 w-full text-center md:text-left tracking-tight">
          <p className="text-3xl md:text-4xl lg:text-[2.75em] leading-none font-semibold text-[#555555]">
            My Work
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-[4em] leading-none mt-1">
            Experiences
          </h2>
        </div>

        <div className="roboto-font md:w-2/5 w-full text-[#222222] flex flex-col items-center md:items-start">
          <p className="text-center md:text-left mb-5 leading-relaxed text-[#555555] xl:text-base text-sm">
            Over the past three years, I have gained various experiences,
            ranging from simple projects to complex website development. Below
            are some of the work experiences I&apos;ve been involved in.
          </p>
          <Link
            href="#about-me"
            className="inline-flex items-center gap-2 cursor-pointer w-fit bg-[#f8f8f8] hover:bg-[#222222] text-[#222222] hover:text-white border border-[#222222] px-4 py-1.5 rounded-full transition-colors duration-200"
          >
            <span className="font-medium text-sm">Contact me</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-xs"
            />
          </Link>
        </div>
      </div>

      <Accordion />
    </section>
  );
}
