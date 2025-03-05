import { drizzle } from "drizzle-orm/node-postgres";
import env from "./env";
import * as schema from "@/db/schema";

const db = drizzle({
  connection: {
    connectionString: env.DBURL,
    ssl: true,
  },
  schema,
});

export default db;
