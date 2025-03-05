import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const requestNeta = pgTable("requestNetas", {
  id: integer("id").primaryKey(),
  fullName: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }),
  constituency: varchar("constituency", { length: 255 }).notNull(),
  photo: varchar("photo", { length: 255 }),
  dob: date("dob", { mode: "string" }),
});
