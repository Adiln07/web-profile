import type { Metadata } from "next";
import { Roboto, Kanit } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

const fontRoboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const fontKanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Web Developer | Muhammad Adil Nusabakti M",
  description:
    "Portfolio of Muhammad Adil Nusabakti M — Frontend & Full-Stack Web Developer building responsive, accessible, and visually consistent web interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontRoboto.variable} ${fontKanit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#222222] selection:bg-[#222222] selection:text-white">
        {children}
      </body>
    </html>
  );
}
