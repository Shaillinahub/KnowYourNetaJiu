import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { neta } from "./neta.schema";
import { career } from "./career.schema";

export const netaCareers = pgTable(
  "neta_careers",
  {
    netaId: integer("neta_id")
      .notNull()
      .references(() => neta.id, { onDelete: "cascade" }),
    careerId: integer("career_id")
      .notNull()
      .references(() => career.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.netaId, table.careerId] }),
  }),
);
