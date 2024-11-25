import Hayyan from "/images/Hayyan.jpeg";
import Aown from "/images/Aown.jpg";
import d1 from "/images/winterdrive.jpg";
import Donations from "../svgs/Donations";
import Petitions from "../svgs/Petitions";
import Awareness from "../svgs/Awareness";
import CommunityService from "../svgs/CommunityService";
import TeamVolunteer from "../svgs/TeamVolunteer";
import House from "../svgs/House";
import { IoMailOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiSquareQuestion } from "react-icons/ci";
import QMark from "../svgs/QMark";
import Goal from "../svgs/Goal";
import Handshake from "../svgs/Handshake";
import Megaphone from "../svgs/Megaphone2";
import Clipboard from "../svgs/Clipboard3";
import Charity from "../svgs/Charity1";
import Volunteer from "../svgs/Volunteer";
import Miscellaneous from "../svgs/Miscellaneous";

const team = [
  { id: 0, name: "Hayyan Khan", designation: "Chemical Engr.", img: Hayyan },
  { id: 0, name: "Aown Aamir", designation: "Electrical Engr.", img: Aown },
];
const aboutUs = [
  {
    id: 0,
    title: "What's GenerosiTree?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin nulla ac ligula feugiat consequat. Curabitur et enim iaculis nunc egestas lobortis quis eget sem. Mauris ultrices ac felis quis ornare.Cras venenatis sapien vitae tempus vehicula. Mauris sollicitudin ante at libero lobortis, id lobortis metus ultrices. Sed sed elit mollis mi dictum volutpat.",
    svg: QMark,
    inverted: false,
  },
  {
    id: 1,
    title: "Our Goal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin nulla ac ligula feugiat consequat. Curabitur et enim iaculis nunc egestas lobortis quis eget sem. Mauris ultrices ac felis quis ornare.Cras venenatis sapien vitae tempus vehicula. Mauris sollicitudin ante at libero lobortis, id lobortis metus ultrices. Sed sed elit mollis mi dictum volutpat.",
    svg: Goal,
    inverted: true,
  },
  {
    id: 2,
    title: "Your Contribution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin nulla ac ligula feugiat consequat. Curabitur et enim iaculis nunc egestas lobortis quis eget sem. Mauris ultrices ac felis quis ornare.Cras venenatis sapien vitae tempus vehicula. Mauris sollicitudin ante at libero lobortis, id lobortis metus ultrices. Sed sed elit mollis mi dictum volutpat.",
    svg: Handshake,
    inverted: false,
  },
];
const departments = [
  {
    id: 0,
    name: "Donations",
    svg: Charity,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
    url: "/donations",
  },
  {
    id: 1,
    name: "Petitions",
    svg: Clipboard,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
    url: "/petitions",
  },
  {
    id: 2,
    name: "Awareness",
    svg: Megaphone,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
    url: "/awareness",
  },
  {
    id: 3,
    name: "Community Service",
    svg: CommunityService,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
    url: "/communityservice",
  },
  {
    id: 4,
    name: "Team Volunteer",
    svg: Volunteer,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla.",
    url: "/teamvolunteer",
  },
  {
    id: 5,
    name: "Miscellaneous",
    svg: Miscellaneous,
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
    verified: true,
    amount: 10000,
    startDate: "Nov 2024",
    endDate: "Dec 2024",
    location: "Islamabad",
    type: "Regular",
  },
  {
    id: 1,
    title: "Coming Soon",
    img: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.",
    verified: false,
    amount: "N/A",
    startDate: "N/A",
    endDate: "N/A",
    location: "N/A",
    type: "N/A",
  },
  {
    id: 2,
    title: "Coming Soon",
    img: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.",
    verified: false,
    amount: "N/A",
    startDate: "N/A",
    endDate: "N/A",
    location: "N/A",
    type: "N/A",
  },
  {
    id: 2,
    title: "Coming Soon",
    img: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.",
    verified: false,
    amount: "N/A",
    startDate: "N/A",
    endDate: "N/A",
    location: "N/A",
    type: "N/A",
  },
  {
    id: 2,
    title: "Coming Soon",
    img: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.",
    verified: false,
    amount: "N/A",
    startDate: "N/A",
    endDate: "N/A",
    location: "N/A",
    type: "N/A",
  },
  {
    id: 2,
    title: "Coming Soon",
    img: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie tortor ut faucibus fringilla. Vivamus quis efficitur elit.",
    verified: false,
    amount: "N/A",
    startDate: "N/A",
    endDate: "N/A",
    location: "N/A",
    type: "N/A",
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
    name: "generositree _official",
    url: "https://www.instagram.com/generositree_official/?utm_source=ig_web_button_share_sheet",
    icon: FaInstagram,
  },
  {
    title: "gmail",
    name: "generositree official@gmail.com",
    url: "",
    icon: IoMailOutline,
  },
  {
    title: "whatsapp",
    name: "GenerosiTree Official",
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

export { departments, donations, links, team, aboutUs };
