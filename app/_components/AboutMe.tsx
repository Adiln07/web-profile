// app/about/page.tsx
// Requires: Playfair Display dari Google Fonts (tambahkan di layout.tsx atau next/font)
// Tailwind CSS sudah terkonfigurasi di project Next.js kamu

import type { Metadata } from "next";
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  //   Facebook,
  //   Instagram,
  //   Linkedin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Me — Muhammad Adil Nusabakti M",
  description: "Frontend Developer | Hasanuddin University",
};

const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    dark: true,
  },
  {
    name: "Golang",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    dark: true,
  },
];

const contacts = [
  { Icon: MapPin, value: "Makassar, Sulawesi Selatan" },
  { Icon: Mail, value: "adil.nusabakti117@gmail.com" },
  { Icon: Phone, value: "+62 857 5629 7170" },
  { Icon: Globe, value: "www.linkedin.com/in/muhammadadilnusabakti/" },
];

const inputBase =
  "w-full roboto-font px-3 py-[9px] border border-[#d0d0d0] rounded-md bg-[#fff] text-[#222222] outline-none placeholder:text-[#222222] focus:border-[#999] transition-colors duration-150";

export default function AboutPage() {
  return (
    <div
      id="about-me"
      className="min-h-screen flex flex-col bg-[#ededed] text-[#222222]"
    >
      <main className="flex-1 xl:max-w-[75em] lg:max-w-[55em] md:max-w-[45em] w-full mx-auto px-8 pt-16 pb-14 ">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end pb-10 border-b-4 border-[#D0D0D2] mb-10">
          <div>
            <h1 className="xl:text-[4em] text-[3em] font-bold leading-none tracking-tight kanit-font">
              About Me
            </h1>
            <p className="mt-3 text-[1em] font-semibold tracking-widest uppercase kanit-font text-[#222222]">
              Frontend Developer
            </p>
          </div>
          <p className="leading-relaxed text-[#222222] roboto-font xl:text-base text-base md:text-xs md:text-right">
            Informatics Engineering fresh graduate of Hasanuddin University who
            is currently focusing on website development, especially frontend
            web developer. As a frontend developer, I have the ability to create
            dynamic and responsive websites that are compatible across various
            technology platforms.
          </p>
        </section>

        <section className="mb-10">
          <p className=" tracking-[0.14em] text-[1em] kanit-font font-semibold uppercase text-[#222222]  mb-4">
            Technical Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-1.75 px-3.5 py-1.5 bg-white border border-[#d0d0d0] rounded-full text-[#222222] roboto-font font-medium hover:border-[#aaa] hover:text-[#222222] transition-colors duration-150 cursor-default"
              >
                <img
                  src={s.icon}
                  alt={s.name}
                  width={15}
                  height={15}
                  className="object-contain"
                  style={s.dark ? { filter: "brightness(0.3)" } : undefined}
                />
                {s.name}
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t-4 border-[#D0D0D2] pt-10">
          <div>
            <p className="tracking-[0.14em] uppercase text-[#222222] mb-4 kanit-font font-semibold">
              Contact Information
            </p>
            <ul className="flex flex-col gap-3">
              {contacts.map(({ Icon, value }) => (
                <li
                  key={value}
                  className="flex items-center gap-2.25 text-[#222222] roboto-font md:text-sm lg:text-base text-xs"
                >
                  <Icon size={25} className="text-[#222222] shrink-0 " />
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="tracking-[0.14em] kanit-font font-semibold uppercase text-[#222222]  mb-4">
              Send me a message
            </p>
            <div className="flex flex-col gap-2.25">
              <div className="grid grid-cols-2 gap-2.25">
                <input className={inputBase} type="text" placeholder="name" />
                <input className={inputBase} type="text" placeholder="phone" />
              </div>
              <input className={inputBase} type="email" placeholder="email" />
              <textarea
                className={`${inputBase} resize-none h-21.5`}
                placeholder="Your Message"
              />
              <button
                type="submit"
                className="self-end px-6 py-2.25 bg-[#222222] text-white rounded-full text-sm roboto-font tracking-wider hover:opacity-75 transition-opacity duration-150 cursor-pointer"
              >
                Kirim
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#222222] px-8 py-5">
        <p className="text-white tracking-[0.04em] roboto-font text-center">
          Copyright © 2025 Muhammad Adil Nusabakti M
        </p>
      </footer>
    </div>
  );
}
