import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      title: "Marine Engineering of Universitas Hasanuddin",
      date: "Nov 2022 - Feb 2023",
      position: "Front-End Developer, Bootstrap",
      techStack: ["Bootstrap", "jQuery"],
      image: "/images/portfolio/marine.png",
      description:
        "Create a layout front-end website of marine engineering. Tools using HTML, Vanilla CSS and CSS framework Bootstrap.",
      url: "https://eng.unhas.ac.id/tsp/",
    },
    {
      id: 2,
      title: "Yayasan Mall Sampah",
      date: "Sep 2023 - Mar 2024",
      position: "Full-Stack Developer, Internship",
      techStack: ["React js", "Express js"],
      image: "/images/portfolio/mallsampah.jpg",
      description:
        "Design a UI/UX website for Yayasan PT Mall Sampah Indonesia. Create a user-friendly and responsive website using ReactJS and Tailwind CSS. Develop login authentication and article CRUD features for the admin dashboard. Build backend services using ExpressJS and MySQL to support website functionality.",
      url: "",
    },
    {
      id: 3,
      title: "Daya Potensia Indonesia",
      date: "Feb 2024 - Jun 2024",
      position: "Front-End Developer, Contract",
      techStack: ["React js", "Inertia js"],
      image: "/images/portfolio/dayapotensia.jpg",
      description:
        "Design a UI/UX website for Daya Potensia Indonesia. Create a responsive and dynamic website using ReactJS, Laravel, and InertiaJS. Integrate frontend components with backend database and services. Implement website features based on project requirements and user needs.",
      url: "",
    },
    {
      id: 4,
      title: "Universitas Hasanuddin",
      date: "Aug 2024 - Oct 2024",
      position: "Front-End Developer, Contract",
      techStack: ["React js", "Tailwind css"],
      image: "/images/portfolio/ukkunhas.jpeg",
      description:
        "Create a responsive and dynamic website for laboratory equipment rental services. Develop frontend features that allow students across faculties to browse, request, and book laboratory equipment. Integrate frontend components with backend services and database. Build the user interface using ReactJS and Tailwind CSS.",
      url: "https://ukk.unhas.ac.id/",
    },
    {
      id: 5,
      title: "My Build",
      date: "Feb 2025 - Sep 2025",
      position: "Front-End Developer, Contract",
      techStack: ["React js", "Tailwind css"],
      image: "/images/portfolio/mybuild.png",
      description:
        "Work as a frontend developer for MyBuild website that connect consultant and contractor with clients in building project. Create responsive and dynamic user interface using ReactJS and Tailwind CSS. Integrate frontend components with RESTful API from backend team. Implement UI/UX design based on final design using Figma.",
      url: "",
    },
    {
      id: 6,
      title: "RS Mata Makassar Kementrian Kesehatan",
      date: "Dec 2025 - Jun 2026",
      position: "Full-Stack Developer, Internship",
      techStack: ["Next js", "Go Language"],
      image: "/images/portfolio/rsmata.png",
      description:
        "Work as a fullstack developer for a 360° room tour website at Rumah Sakit Mata Makassar that allow users to explore rooms across multiple floors. Create interactive and dynamic user interface using NextJS and integrate 360° view using Marzipano. Build backend services using Go Programming Language and provide RESTful API for managing floors, rooms, and hotspots data. Develop admin dashboard with authentication and implement CRUD features for managing all room tour data.",
      url: "https://sso.rsmatamakassar.co.id/roomtour",
    },
  ]);
}
