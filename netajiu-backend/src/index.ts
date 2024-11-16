import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import mongoose from "mongoose";
import "dotenv/config";
import { neta } from "./neta";
import { opinion } from "./opinion";

mongoose
  .connect(process?.env?.DB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const app = new Elysia()
  .use(cors())
  .get("/", () => "Redefining the definition of democracy")
  //.group("/auth", (app) => app.use(auth))
  //.group("/user", (app) => app.use(user))
  .group("/neta", (app) => app.use(neta))
  .group("/opinion", (app) => app.use(opinion))
  .listen(process?.env?.PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
