import { FixedObject, FluidObject } from "gatsby-image";

export interface ProfilObject {
  adress: string;
  birthday: string; // better: convert to Date
  description: string;
  firstName: string;
  job: string;
  katakana: string;
  lastName: string;
  sexe: string; // better: convert to boolean
}

export interface WorkObject {
  company: string;
  details?: {
    content: string[];
    charge: string;
    environnment: string;
    summary: string;
  };
  id: string;
  image: string;
  name: string;
}

export interface ChildImageSharp<T extends FluidObject | FixedObject> {
  relativePath?: string;
  childImageSharp: {
    img: T;
  };
}

export interface ResumeObject {
  experience: {
    company: string;
    description: string;
    endDate: string;
    position: string;
    startDate: string;
  }[];
  education: {
    endDate: string;
    school: string;
    startDate: string;
    subject: string;
  }[];
  skills: {
    details: string;
    name: string;
    score: number;
  }[];
  interrests: {
    details: string[];
    image: string;
    name: string;
  }[];
}

export interface SocialObject {
  icon: string;
  link: string;
  name: string;
}
