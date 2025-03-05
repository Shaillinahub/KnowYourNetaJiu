import { Elysia } from "elysia";
import { type Career, careerService } from "./service";

export const careerController = new Elysia({ prefix: "/career" })
  .get(
    "/:netaid",
    async ({ params: { netaid } }: { params: { netaid: number } }) => {
      return await careerService.getAllByNeta(netaid);
    },
  )
  .post(
    "/",
    async ({
      body,
    }: {
      body: { event: string; model: string; entry: Career };
    }) => {
      return await careerService.createCareer(body);
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
