import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";

const janata = pgTable("janatas", {
  id: integer("id").primaryKey(),
  fullName: varchar("name", { length: 255 }).notNull(),
  constituency: varchar("constituency", { length: 255 }).notNull(),
  photo: varchar("photo", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  dob: date("dob", { mode: "string" }).notNull(),
});

export default janata;
