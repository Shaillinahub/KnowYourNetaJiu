import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { neta } from "./neta.schema";
import { history } from "./history.schema";

export const netaHistory = pgTable(
  "neta_histories",
  {
    netaId: integer("neta_id")
      .notNull()
      .references(() => neta.id, { onDelete: "cascade" }),
    historyId: integer("history_id")
      .notNull()
      .references(() => history.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.netaId, table.historyId] }),
  }),
);
