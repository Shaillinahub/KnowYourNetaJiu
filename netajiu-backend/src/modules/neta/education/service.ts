import { educationRepo } from "./repository";

export type Education = {
  id: number;
  degree: string;
  institution: string;
  since: string;
  till: string;
  ref: string;
};

export const educationService = {
  async getAllByNeta(id: number) {
    return await educationRepo.findAllByNeta(id);
  },

  async createEducation({
    event,
    model,
    entry,
  }: {
    event: string;
    model: string;
    entry: Education;
  }) {
    if (event === "entry.publish" && model === "education") {
      const education = {
        id: entry.id,
        degree: entry.degree,
        institution: entry.institution,
        since: entry.since,
        till: entry.till,
        ref: entry.ref,
      };
      return await educationRepo.create(education, entry);
    }
  },
};
