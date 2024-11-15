import d1 from "/images/Palastine.jpg";
import { IoMailOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

import { CiSquareQuestion } from "react-icons/ci";

const departments = [
  {
    id: 0,
    name: "Donations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
  },
  {
    id: 1,
    name: "Petitions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
  },
  {
    id: 2,
    name: "Awareness",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
  },
  {
    id: 3,
    name: "Community Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
  },
  {
    id: 4,
    name: "Team Volunteer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
  },
  {
    id: 5,
    name: "Team Volunteer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
  },
];

const donations = [
  {
    id: 0,
    title: "Help Ghaza",
    img: d1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.",
  },
  {
    id: 1,
    title: "Help Ghaza",
    img: d1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.",
  },
  {
    id: 2,
    title: "Help Ghaza",
    img: d1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.",
  },
  {
    id: 3,
    title: "Help Ghaza",
    img: d1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.",
  },
  {
    id: 4,
    title: "Help Ghaza",
    img: d1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.",
  },
  {
    id: 5,
    title: "Help Ghaza",
    img: d1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.",
  },
];
const links = [
  {
    title: "linkedin",
    name: "GenerosiTree",
    url: "https://www.linkedin.com/company/generositree/",
    icon: CiLinkedin,
  },
  {
    title: "instagram",
    name: "generositree_official",
    url: "https://www.instagram.com/generositree_official/?utm_source=ig_web_button_share_sheet",
    icon: FaInstagram,
  },
  {
    title: "gmail",
    name: "generositreeofficial@gmail.com",
    url: "",
    icon: IoMailOutline,
  },
  {
    title: "faqs",
    name: "FAQs",
    url: "",
    icon: CiSquareQuestion,
  },
];

export { departments, donations, links };
