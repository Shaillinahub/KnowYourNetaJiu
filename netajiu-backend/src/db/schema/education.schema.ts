import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const education = pgTable("educations", {
  id: integer("id").primaryKey(),
  degree: varchar("degree", { length: 255 }).notNull(),
  institution: varchar("institution", { length: 255 }).notNull(),
  since: date("since", { mode: "string" }).notNull(),
  till: date("till", { mode: "string" }).notNull(),
  ref: varchar("ref", { length: 255 }),
});
