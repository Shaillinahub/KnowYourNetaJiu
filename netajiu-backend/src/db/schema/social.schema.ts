import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const social = pgTable("socials", {
  id: integer("id").primaryKey(),
  label: varchar("label", { length: 255 }).notNull(),
  link: varchar("link", { length: 255 }).notNull(),
});
