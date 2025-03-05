import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { neta } from "./neta.schema";
import { education } from "./education.schema";

export const netaEducations = pgTable(
  "neta_educations",
  {
    netaId: integer("neta_id")
      .notNull()
      .references(() => neta.id, { onDelete: "cascade" }),
    educationId: integer("education_id")
      .notNull()
      .references(() => education.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.netaId, table.educationId] }),
  }),
);
