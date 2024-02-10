import {
  knowYourGlow,
  sameSame,
  spooksy,
  yumYum,
} from "base/app/projects/images";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  summary: string;
  link?: string;
  github: string;
  description: string[];
  technologies: string[];
  thumbnail: StaticImageData;
  gallery: { src: StaticImageData; alt: string }[];
}

export const projects: Project[] = [
  {
    title: "Know your glow",
    summary:
      "OS app where users can save skin routines, tag irritants and find products that work for their skin.",
    github: "https://github.com/LauraAddams/KnowYourGlow",
    description: [
      "An IOS app for users who are interested in being smarter beauty consumers. Users can search skincare products, tag allergens, modify day & night routines and add products to the database.",
      "Web-scraped seed data for a CRUD Ruby on rails API with multiple parameter searching and pagination requests. Users can log in using OAuth 2.0 to access and add to a shared firebase database",
    ],
    technologies: [
      "React Native",
      "Redux",
      "Firebase",
      "OAuth 2.0",
      "Ruby on Rails",
      "PostgresSQL",
      "Heroku",
    ],
    thumbnail: knowYourGlow.thumbnail,
    gallery: knowYourGlow.gallery,
  },
  {
    title: "Same Same",
    summary:
      "An interactive and exploratory mood journal. Respond to prompts or express your own thoughts.",
    link: "https://same-same.herokuapp.com/",
    github:
      "https://github.com/LauraAddams/first-of-all-its-a-burger-not-a-hamburger",
    description: [
      "An interactive and exploratory mood journal made with a team of five. Users are given a random assortment of images and a prompt that they can transform, arrange, and save to a gallery.",
      "Agile development using a combination of pair and mob programming with Kanban workflow",
    ],
    technologies: [
      "Ruby",
      "Javascript",
      "Ruby on Rails",
      "Draggable.Js",
      "Minitest",
      "Heroku",
    ],
    thumbnail: sameSame.thumbnail,
    gallery: sameSame.gallery,
  },
  {
    title: "Yumyum",
    summary:
      "Search for new recipes. Quick suggestions are available, maybe you are feeling lucky?",
    link: "https://young-harbor-98642.herokuapp.com/",
    github: "https://github.com/LauraAddams/Yum-Yum-Api",
    description: [
      "Search for recipes using Edamam API. A clean, minimal, and colorful design to get you excited for your next cooking project.",
      "Built with Ruby on Rails, test-driven with Minitest and VCR.",
    ],
    technologies: [
      "HTML/CSS",
      "Edamam API",
      "Ruby on Rails",
      "HTTParty/VCR",
      "Minitest",
      "Heroku",
    ],
    thumbnail: yumYum.thumbnail,
    gallery: yumYum.gallery,
  },
  {
    title: "Spooksy",
    summary:
      "A spooky ecommerce site. Users can shop and review products or even open their own shop.",
    link: "https://spooksy.herokuapp.com/",
    github: "https://github.com/LauraAddams/betsy",
    description: [
      "A paranormal themed ecommerce site. Guests and merchants can shop products by category or merchant, review items, or open their own shop.",
      "In charge of team's Test-Driven Development and site's mobile-first design utilizing Foundation / Sass. Planned week long sprints, practiced pair-programming and version control with git.",
    ],
    technologies: [
      "Ruby",
      "Javascript",
      "HTML/CSS/SASS",
      "Ruby on Rails",
      "PostgreSQL",
      "SimpleCov",
      "Heroku",
    ],
    thumbnail: spooksy.thumbnail,
    gallery: spooksy.gallery,
  },
];
