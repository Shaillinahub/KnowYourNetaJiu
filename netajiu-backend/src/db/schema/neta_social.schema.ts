import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { neta } from "./neta.schema";
import { social } from "./social.schema";

export const netaSocial = pgTable(
  "neta_socials",
  {
    netaId: integer("neta_id")
      .notNull()
      .references(() => neta.id, { onDelete: "cascade" }),
    socialId: integer("social_id")
      .notNull()
      .references(() => social.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.netaId, table.socialId] }),
  }),
);
