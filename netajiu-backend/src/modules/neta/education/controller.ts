import { Elysia } from "elysia";
import { type Education, educationService } from "./service";

export const educationController = new Elysia({ prefix: "/education" })
  .get(
    "/:netaid",
    async ({ params: { netaid } }: { params: { netaid: number } }) => {
      return await educationService.getAllByNeta(netaid);
    },
  )
  .post(
    "/",
    async ({
      body,
    }: {
      body: { event: string; model: string; entry: Education };
    }) => {
      return await educationService.createEducation(body);
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
