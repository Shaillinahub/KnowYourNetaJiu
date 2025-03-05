import { Elysia } from "elysia";
import { logger } from "@grotto/logysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { setupRoutes } from "./config/setupRoutes";
import env from "./config/env";
import { schema } from "./db";

const app = new Elysia()
  .use(
    cors({
      origin: env.CORS_ORIGIN,
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    }),
  )
  .use(
    swagger({
      path: "/docs",
      documentation: {
        info: {
          title: "API Documentation",
          version: "1.0.0",
        },
      },
    }),
  )
  .use(
    logger({
      logIP: true,
      writer: {
        write(msg: string) {
          console.log(`[${new Date().toISOString()}] ${msg}`);
        },
      },
    }),
  )
  .use(setupRoutes())
  .listen(env.PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
