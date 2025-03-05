import { Elysia } from "elysia";
import { type NetaStrapi, netaService } from "./service";
import { careerController } from "./career";
import { educationController } from "./education";
import { historyController } from "./history";
import { socialController } from "./social";

export const netaController = new Elysia({ prefix: "/neta" })
  .get("/", async () => {
    return await netaService.getAllNetas();
  })
  .get("/:id", async ({ params: { id } }: { params: { id: number } }) => {
    return await netaService.getNetaById(id);
  })
  .post(
    "/",
    async ({
      body,
    }: {
      body: { event: string; model: string; entry: NetaStrapi };
    }) => {
      return await netaService.createNeta(body);
    },
  )
  .use(careerController)
  .use(educationController)
  .use(historyController)
  .use(socialController);

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
