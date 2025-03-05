import { date, integer, pgEnum, pgTable, varchar } from "drizzle-orm/pg-core";

export const partyCategory = pgEnum("category", ["Left", "Right", "Centre"]);

export const party = pgTable("parties", {
  id: integer("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  logo: varchar("logo", { length: 255 }).notNull(),
  foundedOn: date("foundedOn", { mode: "string" }),
  category: partyCategory(),
});
