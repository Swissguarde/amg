import { ProjectDetailProps } from "@/app/components/project-detail";

export const projects: Record<string, ProjectDetailProps["project"]> = {
  "ayo-lawal": {
    id: "ayo-lawal",
    title: "The Ayo Lawal Empowering Foundation",
    client: "The Ayo Lawal Empowering Foundation",
    date: "2025",
    services: ["Branding", "UX/UI Design"],
    tabIds: ["brand", "social"],
    description:
      "The Ayo Lawal Empowering Foundation is a non-profit organization that provides education and training to young people in Nigeria.",
    goal: "To create a comprehensive brand identity and digital presence that reflects the foundation's mission of empowering young people through education and training programs across Nigeria.",
    experience:
      "Working with the Ayo Lawal Empowering Foundation was a deeply meaningful project that required careful consideration of how to visually represent their noble mission. We focused on creating a brand that would resonate with both the beneficiaries and potential supporters, emphasizing trust, growth, and empowerment through clean, modern design principles.",
    heroImage: {
      src: "/ayo_lawal/lawal.png",
      alt: "The Ayo Lawal Empowering Foundation",
    },
    carouselImages: [
      { src: "/ayo_lawal/slide-1.jpg", alt: "Ayo Lawal Project Slide 1" },
      {
        src: "/ayo_lawal/slide-2.jpg",
        alt: "Ayo Lawal Project Slide 2",
      },
      {
        src: "/ayo_lawal/slide-3.jpg",
        alt: "Ayo Lawal Project Slide 3",
      },
      {
        src: "/ayo_lawal/slide-4.jpg",
        alt: "Ayo Lawal Project Slide 4",
      },
      {
        src: "/ayo_lawal/slide-5.jpg",
        alt: "Ayo Lawal Project Slide 5",
      },
      {
        src: "/ayo_lawal/slide-10.jpg",
        alt: "Ayo Lawal Project Slide 10",
      },
      {
        src: "/ayo_lawal/slide-6.jpg",
        alt: "Ayo Lawal Project Slide 6",
      },
      {
        src: "/ayo_lawal/slide-7.jpg",
        alt: "Ayo Lawal Project Slide 7",
      },
      {
        src: "/ayo_lawal/slide-8.jpg",
        alt: "Ayo Lawal Project Slide 8",
      },
    ],
  },
  itysltt: {
    id: "itysltt",
    title: "I Think You Should Listen To This",
    client: "ITYSLTT",
    date: "2024",
    services: ["Branding"],
    tabIds: ["brand"],
    description: "A comprehensive description of the project goes here.",
    goal: "The goal of the project goes here.",
    experience: "The experience of the project goes here.",
    heroImage: {
      src: "/itysltt/slide-1.png",
      alt: "ITYSLTT Project",
    },
    carouselImages: [
      { src: "/itysltt/slide-2.png", alt: "ITYSLTT Project Slide 2" },
      { src: "/itysltt/slide-1.png", alt: "ITYSLTT Project Slide 1" },
    ],
  },
  "hot-plate": {
    id: "hot-plate",
    title: "Hot Plate",
    client: "Hot Plate",
    date: "2025",
    services: ["Branding"],
    tabIds: ["brand"],
    description: "A short and concise description of the project goes here.",
    goal: "The goal of the project goes here.",
    experience: "The experience of the project goes here.",
    heroImage: {
      src: "/hot_plate/slide-1.png",
      alt: "Hot Plate Project",
    },
    carouselImages: [
      { src: "/hot_plate/slide-2.png", alt: "Hot Plate Project Slide 2" },
      { src: "/hot_plate/slide-1.png", alt: "Hot Plate Project Slide 1" },
      { src: "/hot_plate/slide-3.png", alt: "Hot Plate Project Slide 3" },
    ],
  },
  "afrinaija-youth-forum": {
    id: "afrinaija-youth-forum",
    title: "Afrinaija Youth Forum",
    client: "AYF",
    date: "2024",
    liveSiteUrl: "https://afrinaija.com",
    services: [
      "Branding",
      "UX/UI Design",
      "Web Development",
      "Social Media Management",
    ],
    tabIds: ["brand", "social", "uxui", "webapp"],
    description: "A short and concise description of the project goes here.",
    goal: "The goal of the project goes here.",
    experience: "The experience of the project goes here.",
    heroImage: {
      src: "/ayf/hero.png",
      alt: "Afrinaija Youth Forum Project",
    },
    carouselImages: [
      { src: "/ayf/slide-1.png", alt: "Afrinaija Youth Forum Project Slide 1" },
      { src: "/ayf/slide-2.png", alt: "Afrinaija Youth Forum Project Slide 2" },
      { src: "/ayf/slide-3.png", alt: "Afrinaija Youth Forum Project Slide 3" },
      { src: "/ayf/slide-4.png", alt: "Afrinaija Youth Forum Project Slide 4" },
      { src: "/ayf/slide-5.png", alt: "Afrinaija Youth Forum Project Slide 5" },
    ],
  },
  "heritage-staffing": {
    id: "heritage-staffing",
    title: "Heritage Staffing",
    client: "Heritage Staffing Services Limited",
    date: "2025",
    liveSiteUrl: "https://heritagestaffing.com",
    services: ["UX/UI Design", "Web Development"],
    tabIds: ["uxui", "webapp"],
    description: "A short and concise description of the project goes here.",
    goal: "The goal of the project goes here.",
    experience: "The experience of the project goes here.",
    heroImage: {
      src: "/heritage/hero.png",
      alt: "Heritage Staffing Project",
    },
    carouselImages: [
      {
        src: "/heritage/slide-1.png",
        alt: "Heritage Staffing Project Slide 1",
      },
    ],
  },
  "the-eureka-consults": {
    id: "the-eureka-consults",
    title: "The Eureka Consults",
    client: "The Eureka Consults",
    date: "2023",
    liveSiteUrl: "https://theeurekaconsults.com",
    services: ["UX/UI Design", "Web Development"],
    tabIds: ["uxui", "webapp"],
    description: "A short and concise description of the project goes here.",
    goal: "The goal of the project goes here.",
    experience: "The experience of the project goes here.",
    heroImage: {
      src: "/eureka/hero.png",
      alt: "The Eureka Consults Project",
    },
    carouselImages: [
      {
        src: "/eureka/hero.png",
        alt: "The Eureka Consults Project Slide 1",
      },
    ],
  },
};

// Helper function to get a project by ID
export const getProjectById = (
  id: string,
): ProjectDetailProps["project"] | undefined => {
  return projects[id];
};

// Helper function to get all project IDs
export const getAllProjectIds = (): string[] => {
  return Object.keys(projects);
};

// Helper function to get all projects
export const getAllProjects = (): ProjectDetailProps["project"][] => {
  return Object.values(projects);
};
