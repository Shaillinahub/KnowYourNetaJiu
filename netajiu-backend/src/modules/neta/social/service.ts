import { socialRepo } from "./repository";

export type SocialStrapi = {
  id: number;
  label: string;
  link: string;
};

export const socialService = {
  async getAllByNeta(id: number) {
    return await socialRepo.findAllByNeta(id);
  },

  async createSocial({
    event,
    model,
    entry,
  }: {
    event: string;
    model: string;
    entry: SocialStrapi;
  }) {
    if (event === "entry.publish" && model === "social") {
      const history = {
        id: entry.id,
        label: entry.label,
        link: entry.link,
      };
      return await socialRepo.create(history, entry);
    }
  },
};
