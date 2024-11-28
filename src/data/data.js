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
import MapMark from "../svgs/MapMark";
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
      "GenerosiTree is a community-driven platform focused on fostering positive change through collaborative volunteer efforts and impactful projects. It empowers individuals and teams to give back to their communities, addressing social challenges and promoting sustainable development through collective action.",
    svg: QMark,
    inverted: false,
  },
  {
    id: 1,
    title: "Our Goal",
    description:
      "Our goal at GenerosiTree is to create a vibrant network of individuals united by the spirit of giving and service. We aim to empower communities by addressing key social challenges, fostering sustainability, and promoting compassion. Through impactful initiatives, we strive to inspire collaboration and create meaningful, lasting change for a brighter, more inclusive future.",
    svg: Goal,
    inverted: true,
  },
  {
    id: 2,
    title: "Your Contribution",
    description:
      "Your contribution to GenerosiTree is the lifeblood of our mission to uplift and empower communities. Whether through donations, volunteering your time, or sharing our cause with others, every act of generosity helps us branch out further and make a lasting impact. Join us in building a network of kindness and hope, where your involvement plants seeds of change that grow into a better future for those in need. Together, we can make a difference!",
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
    svg: MapMark,
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
      "This winter, help the community by donating clothes, supporting education, and spreading warmth!",
    url: "https://forms.gle/6hk8z7wfFvzaHZGr6",
    verified: true,
    amount: 100000,
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
    id: 0,
    title: "linkedin",
    name: "GenerosiTree",
    url: "https://www.linkedin.com/company/generositree/",
    icon: CiLinkedin,
  },
  {
    id: 1,
    title: "instagram",
    name: "generositree _official",
    url: "https://www.instagram.com/generositree_official/?utm_source=ig_web_button_share_sheet",
    icon: FaInstagram,
  },
  {
    id: 2,
    title: "gmail",
    name: "generositree official@gmail.com",
    url: "",
    icon: IoMailOutline,
  },
  {
    id: 3,
    title: "whatsapp",
    name: "GenerosiTree Official",
    url: "https://whatsapp.com/channel/0029Vax7LQvAzNbsNtags90S ",
    icon: FaWhatsapp,
  },
  { id: 4, title: "faqs", name: "FAQs", url: "", icon: CiSquareQuestion },
];
const steps = [
  {
    number: "1",
    title: "Identify Cases",
    description:
      "We find cases around the internet, searching for people facing some kind of emergency situation.",
    icon: "🔍",
  },
  {
    number: "2",
    title: "Verification",
    description:
      "We verify the cases through documents or by contacting relevant people.",
    icon: "✅",
  },
  {
    number: "3",
    title: "Campaign",
    description:
      "We publish verified cases on our website and social media to raise awareness and gather help.",
    icon: "📢",
  },
  {
    number: "4",
    title: "Acknowledge",
    description:
      "We appreciate donors and recipients by providing certificates and updates.",
    icon: "🏆",
  },
];
const volunteers = [
  {
    id: 0,
    name: "Awais Kamran",
    img: Aown,
    post: "Community Organizer",
    review:
      "Volunteering with this community has been life-changing. I feel so connected!",
    story:
      "Volunteering has changed my life. It’s amazing to see the difference we can make together.",
  },
  {
    id: 1,
    name: "Abdullah Raza",
    img: Hayyan,
    post: "Volunteer Coordinator",
    review:
      "They’ve made such a difference in my life. Thank you for everything!",
    story:
      "Being part of this team has been an incredible journey of growth and giving back.",
  },
  {
    id: 2,
    name: "Kumail Khan",
    img: Aown,
    post: "Community Organizer",
    review:
      "A truly inspiring organization that’s transforming lives every day.",
    story:
      "Volunteering has changed my life. It’s amazing to see the difference we can make together.",
  },
  {
    id: 3,
    name: "Naima Ilyas",
    img: Hayyan,
    post: "Community Organizer",
    review:
      "Volunteering with this community has been life-changing. I feel so connected!",
    story:
      "Volunteering has changed my life. It’s amazing to see the difference we can make together.",
  },
  {
    id: 4,
    name: "Awais Kamran",
    img: Aown,
    post: "Community Organizer",
    review:
      "Volunteering with this community has been life-changing. I feel so connected!",
    story:
      "Volunteering has changed my life. It’s amazing to see the difference we can make together.",
  },
  {
    id: 5,
    name: "Abdullah Raza",
    img: Hayyan,
    post: "Community Organizer",
    review:
      "Volunteering with this community has been life-changing. I feel so connected!",
    story:
      "Volunteering has changed my life. It’s amazing to see the difference we can make together.",
  },
  {
    id: 6,
    name: "Kumail Khan",
    img: Aown,
    post: "Community Organizer",
    review:
      "Volunteering with this community has been life-changing. I feel so connected!",
    story:
      "Volunteering has changed my life. It’s amazing to see the difference we can make together.",
  },
  {
    id: 7,
    name: "Naima Ilyas",
    img: Hayyan,
    post: "Community Organizer",
    review:
      "Volunteering with this community has been life-changing. I feel so connected!",
    story:
      "Volunteering has changed my life. It’s amazing to see the difference we can make together.",
  },
];

export { departments, donations, links, team, aboutUs, steps, volunteers };
