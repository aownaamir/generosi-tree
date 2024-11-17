import Hayyan from "/images/Hayyan.jpeg";
import Aown from "/images/Aown.jpg";
import d1 from "/images/winterdrive.jpg";
import { IoMailOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiSquareQuestion } from "react-icons/ci";

const team = [
  { id: 0, name: "Hayyan Khan", designation: "Chemical Engr.", img: Hayyan },
  { id: 0, name: "Aown Aamir", designation: "Electrical Engr.", img: Aown },
];
const departments = [
  {
    id: 0,
    name: "Donations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
    url: "/donations",
  },
  {
    id: 1,
    name: "Petitions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
    url: "/petitions",
  },
  {
    id: 2,
    name: "Awareness",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
    url: "/awareness",
  },
  {
    id: 3,
    name: "Community Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
    url: "/communityservice",
  },
  {
    id: 4,
    name: "Team Volunteer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
    url: "/teamvolunteer",
  },
  {
    id: 5,
    name: "Miscellaneous",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
    url: "/miscellaneous",
  },
];

const donations = [
  {
    id: 0,
    title: "Winter 2024 Donation Drive",
    img: d1,
    description:
      "This winter, help the community by donationg clothes, supporting education, and spreading warmth!",
    url: "https://forms.gle/6hk8z7wfFvzaHZGr6",
  },
  {
    id: 1,
    title: "Coming Soon",
    img: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.",
  },
  {
    id: 2,
    title: "Coming Soon",
    img: "",
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
    name: "generositreeofficial @gmail.com",
    url: "",
    icon: IoMailOutline,
  },
  {
    title: "whatsapp",
    name: "GenerosiTree Official 🌳",
    url: "https://whatsapp.com/channel/0029Vax7LQvAzNbsNtags90S ",
    icon: FaWhatsapp,
  },
  {
    title: "faqs",
    name: "FAQs",
    url: "",
    icon: CiSquareQuestion,
  },
];

export { departments, donations, links, team };
