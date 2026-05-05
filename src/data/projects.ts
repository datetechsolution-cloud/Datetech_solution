import gupta from "@/assets/client-gupta.png";
import shivali from "@/assets/client-shivali.png";

export type Project = {
  slug: string;
  client: string;
  title: string;
  category: string;
  year: string;
  url: string;
  image: string;
  description: string;
  services: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "gupta-sweets",
    client: "Gupta Sweets & Caterers",
    title: "A 33-year sweet legacy, brought online",
    category: "Food & Hospitality",
    year: "2025",
    url: "https://guptasweetscaterers.in/",
    image: gupta,
    description:
      "A warm, premium e-commerce experience for a heritage sweet brand from Bareilly. WhatsApp ordering, gallery showcase and a luxurious editorial feel.",
    services: ["Web Design", "Development", "WhatsApp Commerce", "SEO"],
    accent: "from-amber-400 to-rose-500",
  },
  {
    slug: "dr-shivali-physio",
    client: "Dr. Shivali Gupta — Physio",
    title: "Real care, from a physiotherapist who listens first",
    category: "Healthcare",
    year: "2025",
    url: "https://www.drshivaliphysio.com/",
    image: shivali,
    description:
      "A calm, trust-building website for an independent physiotherapist. Online booking, clinical credentials and a clean medical aesthetic.",
    services: ["Brand Site", "Booking Flow", "Content Strategy"],
    accent: "from-sky-400 to-indigo-500",
  },
];
