import { Elysia } from "elysia";
import { type SocialStrapi, socialService } from "./service";

export const socialController = new Elysia({ prefix: "/social" })
  .get(
    "/:netaid",
    async ({ params: { netaid } }: { params: { netaid: number } }) => {
      return await socialService.getAllByNeta(netaid);
    },
  )
  .post(
    "/",
    async ({
      body,
    }: {
      body: { event: string; model: string; entry: SocialStrapi };
    }) => {
      return await socialService.createSocial(body);
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
