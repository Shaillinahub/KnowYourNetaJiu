import { type Career, careerService } from "./career";
import { educationService } from "./education";
import { netaRepo } from "./repository";

export type Neta = {
  id: number;
  fullName: string;
  description: string;
  constituency: string;
  photo: string;
  dob: string;
  party: number;
  career: Career[] | null;
  education: [];
  history: [];
  social: [];
};

export type NetaStrapi = {
  id: number;
  fullName: string;
  description: string;
  constituency: string;
  photo: { url: string };
  dob: string;
  party: number;
  career: [];
  education: [];
  history: [];
  social: [];
};

export const netaService = {
  async getAllNetas() {
    return await netaRepo.findAll();
  },
  async getNetaById(id: number) {
    return await netaRepo.findById(id);
  },
  async createNeta({
    event,
    model,
    entry,
  }: {
    event: string;
    model: string;
    entry: NetaStrapi;
  }) {
    if (event === "entry.publish" && model === "neta") {
      const neta = {
        id: entry.id,
        fullName: entry.fullName,
        description: entry.description,
        constituency: entry.constituency,
        photo: entry.photo.url,
        dob: entry.dob,
      };
      return await netaRepo.create(neta);
    }
  },
};
