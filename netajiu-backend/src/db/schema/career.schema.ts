import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const career = pgTable("careers", {
  id: integer("id").primaryKey(),
  company: varchar("name", { length: 255 }).notNull(),
  since: date("since", { mode: "string" }).notNull(),
  till: date("till", { mode: "string" }).notNull(),
  ref: varchar("ref", { length: 255 }),
});
