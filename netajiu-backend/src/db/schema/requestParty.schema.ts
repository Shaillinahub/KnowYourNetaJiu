import { date, integer, pgEnum, pgTable, varchar } from "drizzle-orm/pg-core";
import { partyCategory } from "./party.schema";

export const requestParty = pgTable("requestParties", {
  id: integer("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  logo: varchar("logo", { length: 255 }).notNull(),
  foundedOn: date("foundedOn", { mode: "string" }),
  category: partyCategory(),
});
