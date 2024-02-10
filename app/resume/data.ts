const drive =
  "https://drive.google.com/file/d/152TbO2e7utou0uFZV6dvTUcATvHqmI_q/view?usp=sharing";

const summary =
  "Senior software engineer with a frontend-focus and design background. Interested in creating intuitive, accessible, and scalable applications. Has a love for ambiguous projects and building engineering cultures rich in learning, collaboration, and developer empathy.";

const technologies = {
  programming: [
    "TypeScript",
    "JavaScript",
    "React",
    "CSS",
    "HTML",
    "Python",
    "Next.Js",
    "Redux",
    "Redux Saga",
    "Ruby",
    "Ruby on Rails",
    "Draft.Js",
  ],
  tooling: [
    "Git",
    "Jira",
    "Postman",
    "CircleCI",
    "Datadog",
    "Sentry",
    "Photoshop",
    "Figma",
    "Sketch",
    "Premiere Pro",
    "Illustrator",
  ],
};
export interface Company {
  company?: string;
  title: string;
  date: string;
  description: string[];
  technologies?: string[];
  additional?: Company;
}

const experience: Company[] = [
  {
    company: "Koala",
    title: "Engineering Manager",
    date: "2023 - Present",
    description: [
      "Managed 3 Senior Engineers; maintained efficiency and professional growth during a period of organizational change.",
      "Established engineering-wide standards for code reviews, technical designs, and knowledge sharing between two teams of 10 engineers.",
    ],
    additional: {
      title: "Senior Software Engineer",
      date: "2022 - 2023",
      description: [
        "Developed architecture for implementations of dynamically-generated UI features using schema-powered JSON.",
        "Maintained a white-label restaurant web app with 1M+ weekly users.",
        "Designed and built features for internal applications including a version history tracker, XML viewer, and an AWS DNS certificate creation flow.",
        "Identified feature opportunities to assist customer support teams, reducing the need for engineering involvement on tickets by 35%.",
        "Improved developer efficiency and code quality with automated tooling.",
      ],
    },
    technologies: ["Typescript", "React", "NextJS"],
  },
  {
    company: "Textio",
    title: "Software Engineer",
    date: "2018 - 2021",
    description: [
      "Built frontend interfaces for a rich text editor available on web, mobile, tablet, and a Chrome extension.",
      "Engineer lead for a feature on detecting age bias in job postings; collaborated with NLP data scientists and designers to display complicated data on an existing platform with technical limitations.",
      "Migrated company blog from Medium to a self-hosted solution.",
      "Created a facilitated learning program for an Engineer team of 50+ improving cross-team collaboration, coaching, and knowledge sharing.",
    ],
    technologies: ["Typescript", "React", "Redux", "AWS", "JQuery", "Python"],
  },
  {
    company: "Amazon",
    title: "Software Development Engineer",
    date: "2018",
    description: [
      "Full ownership of a customer-facing detail page for a global enterprise-scale environment using Java MVC architecture and React.",
      "Led UX/UI design. Validated through user testing with interactive mocks.",
    ],
    technologies: ["Java", "Typescript", "SASS", "IntelliJ", "Axure"],
  },
];

const education: Company = {
  company: "Ada Developers Academy",
  title: "Full Stack Web Development",
  date: "2018",
  description: [
    `Ada Developers Academy is a training program located in Seattle,
  Washington for women and gender diverse people who want to become
  software developers. Ada is tuition-free and is comprised of 6
  months of full-time classroom training followed by 5 months in a
  paid industry internship. Major sponsors include Google, Amazon,
  Microsoft and Nordstrom.`,
  ],
};

export { drive, summary, technologies, experience, education };
