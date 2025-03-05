import { Elysia } from "elysia";
import { netaController } from "../modules/neta/";

export function setupRoutes(): Elysia {
  const app = new Elysia()
    .get("/", () => "Redefining the definition of democracy")
    .group("/api", (app) => {
      return app.use(netaController);
    });
  return app;
}
