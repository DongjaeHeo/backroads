import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://facebook.com",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://squarespace.com",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];
export const tours = [
  {
    id: 1,
    name: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: tour1,
    cost: 2100,
    date: "august 26th, 2020",
    location: "china",
    duration: 6,
  },
  {
    id: 2,
    name: "best of java",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: tour2,
    cost: 1400,
    date: "october 1th, 2020",
    location: "indonesia",
    duration: 11,
  },
  {
    id: 3,
    name: "explore the forest",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: tour3,
    cost: 2200,
    date: "september 12th, 2020",
    location: "usa",
    duration: 3,
  },
  {
    id: 4,
    name: "best of himalayas",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    image: tour4,
    cost: 1200,
    date: "november 1th, 2020",
    location: "nepal",
    duration: 10,
  },
];
