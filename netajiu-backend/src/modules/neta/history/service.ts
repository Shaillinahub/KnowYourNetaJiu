import { historyRepo } from "./repository";

export type History = {
  id: number;
  activity: string;
  date: string;
  link: string;
};

export const historyService = {
  async getAllByNeta(id: number) {
    return await historyRepo.findAllByNeta(id);
  },

  async createHistory({
    event,
    model,
    entry,
  }: {
    event: string;
    model: string;
    entry: History;
  }) {
    if (event === "entry.publish" && model === "history") {
      const history = {
        id: entry.id,
        activity: entry.activity,
        date: entry.date,
        link: entry.link,
      };
      return await historyRepo.create(history, entry);
    }
  },
};
