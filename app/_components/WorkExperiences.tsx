import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion } from "./Accordion";

export function WorkExperiences() {
  return (
    <div id="my-experience" className="w-full h-full ">
      <div className="flex md:justify-between flex-col md:flex-row justify-center  m-auto xl:max-w-[75em] lg:max-w-[55em] md:max-w-[45em] md:my-14 my-8">
        <div className="kanit-font font-semibold text-[#222222] md:w-2/3 w-full">
          <p className="lg:text-[2.5em] md:text-[2em] text-center md:text-left text-[2.5em]">
            My Work
          </p>
          <p className="lg:text-[3.5em] md:text-[3em] mt-[-.3em] text-center md:text-left text-[3em]">
            Experiences
          </p>
        </div>
        <div className="roboto-font md:w-1/3 w-full text-[#222222]">
          <p className=" text-justify px-3 md:px-0 md:text-left my-5 tracking-wide xl:text-base text-sm">
            Over the past three years, I have gained various experiences,
            ranging from simple projects to complex website development. Below
            are some of the work experiences I’ve been involved in.
          </p>
          <button className="flex items-center gap-2 cursor-pointer w-fit bg-[#f8f8f8] border border-[#222222] px-2 py-0.5 rounded-full m-auto md:m-0">
            <span className="font-medium lg:text-base text-sm">Contact me</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="lg:text-sm text-xs "
            />
          </button>
        </div>
      </div>
      <Accordion />
    </div>
  );
}
