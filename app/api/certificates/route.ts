import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      title: "Belajar Dasar Artificial intelligence",
      company: "Dicoding Indonesia",
      logo: "/images/logo/dicoding.jpg",
      certificate:
        "https://drive.google.com/file/d/1mY60qJP4Tdb_iQUeHioT5ouqiLtg-TH7/view?usp=drive_link",
      isRounded: true,
    },
    {
      id: 2,
      title: "Belajar Dasar Pemrograman JavaScript",
      company: "Dicoding Indonesia",
      logo: "/images/logo/dicoding.jpg",
      certificate:
        "https://drive.google.com/file/d/1plaLiIbHKp-hq1qzsPTpTr-5dWxOOzoZ/view?usp=sharing",
      isRounded: true,
    },
    {
      id: 3,
      title: "Belajar Membuat Front-End Web untuk Pemula",
      company: "Dicoding Indonesia",
      logo: "/images/logo/dicoding.jpg",
      certificate:
        "https://drive.google.com/file/d/11J4mWMCNVgQupf1yvgDnu5n9KrAlvYDm/view?usp=sharing",
      isRounded: true,
    },
    {
      id: 4,
      title: "Belajar Dasar Pemrograman Website",
      company: "Dicoding Indonesia",
      logo: "/images/logo/dicoding.jpg",
      certificate:
        "https://drive.google.com/file/d/1xUgrI92Qg9gIHrippLV4uRddW_irf6z9/view?usp=sharing",
      isRounded: true,
    },
    {
      id: 5,
      title: "Belajar Membuat Aplikasi Web dengan React",
      company: "Dicoding Indonesia",
      logo: "/images/logo/dicoding.jpg",
      certificate:
        "https://drive.google.com/file/d/1hhY__hlKr1oRAwZB2jvTWX7kWMW-ea3-/view?usp=sharing",
      isRounded: true,
    },
    {
      id: 6,
      title: "CyberOps Associate Learning from Cisco",
      company: "Cisco Academy Networking",
      logo: "/images/logo/cisco.png",
      certificate:
        "https://drive.google.com/file/d/1ubRYXthWKJU1oI4KQ2MXxUml7ntmEY0V/view?usp=sharing",
      isRounded: false,
    },
    {
      id: 7,
      title: "Partner: PCAP - Programming Essentials in Python",
      company: "Cisco Academy Networking",
      logo: "/images/logo/cisco.png",
      certificate:
        "https://drive.google.com/file/d/1OFVMlD8SnZbF3dGbDe2esL-jw_qyYGva/view?usp=sharing",
      isRounded: false,
    },
    {
      id: 8,
      title: "Sertifikat Magang RS Mata Makassar Programmer",
      company: "Kementrian Kesehatan",
      logo: "/images/logo/kemenkes2.png",
      certificate:
        "https://drive.google.com/file/d/1qEzyM29-4F1sPS8TxXqLXl9fVlUwqBbY/view?usp=sharing",
      isRounded: false,
    },
    {
      id: 9,
      title: "Sertifikat Magang Mall Sampah Web Developer",
      company: "Mall Sampah",
      logo: "/images/logo/mslogo.svg",
      certificate:
        "https://drive.google.com/file/d/1MC_5OgFlWcoQmHG-Rx3Xy-ouyZGt6Goy/view?usp=sharing",
      isRounded: false,
    },
  ]);
}
