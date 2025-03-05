import { z } from "zod";

const envSchema = z.object({
  PORT: z.string(),
  DBURL: z.string().url(),
  DBHOST: z.string(),
  DBDATABASE: z.string(),
  DBUSER: z.string(),
  DBPASSWORD: z.string(),
  ACCESS_TOKEN_SECRET: z.string(),
  REFRESH_TOKEN_SECRET: z.string(),
  CORS_ORIGIN: z.string().default("*"),
});

const env = envSchema.parse(process.env);

export default env;
