import { careerRepo } from "./repository";

export type Career = {
  id: number;
  company: string;
  since: string;
  till: string;
  ref: string;
};

export const careerService = {
  async getAllByNeta(id: number) {
    return await careerRepo.findAllByNeta(id);
  },

  async createCareer({
    event,
    model,
    entry,
  }: {
    event: string;
    model: string;
    entry: Career;
  }) {
    if (event === "entry.publish" && model === "career") {
      const career = {
        id: entry.id,
        company: entry.company,
        since: entry.since,
        till: entry.till,
        ref: entry.ref,
      };
      return await careerRepo.create(career, entry);
    }
  },
};
