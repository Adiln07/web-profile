"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Mail, Phone, Globe } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
  {
    Icon: MapPin,
    label: "Location",
    value: "Makassar, Sulawesi Selatan",
    href: undefined,
  },
  {
    Icon: Mail,
    label: "Email",
    value: "adil.nusabakti117@gmail.com",
    href: "mailto:adil.nusabakti117@gmail.com",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+62 857 5629 7170",
    href: "tel:+6285756297170",
  },
  {
    Icon: Globe,
    label: "LinkedIn",
    value: "linkedin.com/in/muhammadadilnusabakti",
    href: "https://www.linkedin.com/in/muhammadadilnusabakti/",
  },
];

const inputBase =
  "w-full roboto-font text-sm px-4 py-2.5 border border-[#d0d0d0] rounded-xl bg-white text-[#222222] outline-none placeholder:text-[#888888] focus:border-[#222222] transition-colors duration-150";

export default function AboutPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Message from ${name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:adil.nusabakti117@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="about-me" className="flex flex-col bg-white text-[#222222]">
      <div className="flex-1 xl:max-w-[75em] lg:max-w-[55em] md:max-w-[45em] w-full mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* Top Header & Bio (Matched with WorkExperiences style) */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-12 border-b-2 border-[#D0D0D2]">
          <div className="kanit-font font-bold text-[#222222] md:w-1/2 w-full text-center md:text-left tracking-tight">
            <p className="text-3xl md:text-4xl lg:text-[2.75em] leading-none font-semibold text-[#555555]">
              Get to Know
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-[4em] leading-none mt-1">
              About Me
            </h2>
          </div>

          <div className="roboto-font md:w-1/2 w-full flex flex-col items-center md:items-start">
            <span className="inline-block rounded-full border border-[#222222] bg-[#f8f8f8] px-3.5 py-1 text-xs font-medium text-[#222222] mb-3">
              Frontend Developer
            </span>
            <p className="text-center md:text-left leading-relaxed text-[#555555] xl:text-base text-sm">
              Informatics Engineering fresh graduate of Hasanuddin University
              who is currently focusing on website development, especially
              frontend web development. As a frontend developer, I have the
              ability to create dynamic and responsive websites that are
              compatible across various technology platforms.
            </p>
          </div>
        </div>

        {/* Technical Skills (Balanced 12-column row) */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 py-10 border-b-2 border-[#D0D0D2]">
          <div className="md:col-span-4 text-center md:text-left">
            <h3 className="kanit-font font-bold text-2xl lg:text-3xl tracking-tight text-[#222222]">
              Technical Skills
            </h3>
            <p className="roboto-font text-xs md:text-sm text-[#7b7b7b] mt-1">
              Technologies &amp; tools I use to build web applications
            </p>
          </div>

          <div className="md:col-span-8 flex flex-wrap justify-center md:justify-start gap-2.5">
            {skills.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-2 px-4 py-2 bg-[#f8f8f8] hover:bg-white border border-[#d0d0d0] hover:border-[#222222] rounded-full text-xs lg:text-sm text-[#222222] roboto-font font-medium transition-all duration-150 cursor-default"
              >
                <img
                  src={s.icon}
                  alt={s.name}
                  width={16}
                  height={16}
                  className="object-contain"
                  style={s.dark ? { filter: "brightness(0.3)" } : undefined}
                />
                {s.name}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information & Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-12 items-start">
          {/* Contact List */}
          <div className="lg:col-span-5">
            <h3 className="kanit-font font-bold text-2xl lg:text-3xl tracking-tight text-[#222222]">
              Contact Information
            </h3>
            <p className="roboto-font text-sm text-[#7b7b7b] mt-1 mb-6">
              Feel free to reach out for collaborations or project inquiries.
            </p>

            <ul className="flex flex-col gap-4">
              {contacts.map(({ Icon, label, value, href }) => (
                <li
                  key={value}
                  className="flex items-center gap-3.5 text-[#222222] roboto-font group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#f8f8f8] border border-[#e0e0e0] group-hover:border-[#222222] flex items-center justify-center shrink-0 transition-colors">
                    <Icon size={18} className="text-[#222222]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[#7b7b7b] font-medium">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm lg:text-base font-medium text-[#222222] hover:text-[#555555] hover:underline transition-colors break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm lg:text-base font-medium text-[#222222]">
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Message Form Card */}
          <div className="lg:col-span-7 bg-[#f8f8f8] border border-[#e8e8e8] rounded-2xl p-6 md:p-8 shadow-2xs">
            <h3 className="kanit-font font-bold text-2xl tracking-tight text-[#222222] mb-1">
              Send Me a Message
            </h3>
            <p className="roboto-font text-xs md:text-sm text-[#7b7b7b] mb-6">
              Have a question or want to work together? Drop a message below.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <input
                  className={inputBase}
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className={inputBase}
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <input
                className={inputBase}
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                className={`${inputBase} resize-none h-28`}
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button
                type="submit"
                className="self-end inline-flex items-center gap-2 px-6 py-2.5 bg-[#222222] text-white rounded-full text-xs lg:text-sm roboto-font font-medium hover:bg-[#3a3a3a] transition-colors duration-200 cursor-pointer mt-1"
              >
                <span>Send Message</span>
                <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="bg-[#222222] px-6 py-5">
        <p className="text-white text-xs sm:text-sm tracking-[0.04em] roboto-font text-center">
          Copyright © 2025 Muhammad Adil Nusabakti M
        </p>
      </footer>
    </section>
  );
}
