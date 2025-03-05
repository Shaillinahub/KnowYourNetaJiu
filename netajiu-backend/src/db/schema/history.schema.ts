import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const history = pgTable("histories", {
  id: integer("id").primaryKey(),
  activity: varchar("activity", { length: 255 }).notNull(),
  date: date("date", { mode: "string" }).notNull(),
  link: varchar("link", { length: 255 }),
});
