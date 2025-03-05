import { Elysia } from "elysia";
import { type History, historyService } from "./service";

export const historyController = new Elysia({ prefix: "/history" })
  .get(
    "/:netaid",
    async ({ params: { netaid } }: { params: { netaid: number } }) => {
      return await historyService.getAllByNeta(netaid);
    },
  )
  .post(
    "/",
    async ({
      body,
    }: {
      body: { event: string; model: string; entry: History };
    }) => {
      return await historyService.createHistory(body);
    },
  );
// .put(
//   "/:id",
//   async ({ params, body }) => {
//     return await netaService.updateNeta(params.id, body);
//   },
// )
// .delete(
//   "/:id",
//   async ({ params }) => {
//     return await netaService.deleteNeta(params.id);
//   }
