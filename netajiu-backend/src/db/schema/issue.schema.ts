import { date, integer, pgEnum, pgTable, varchar } from "drizzle-orm/pg-core";
import { neta } from "./neta.schema";

export const issueStatus = pgEnum("issue_status", ["queued", "resolved"]);

export const issue = pgTable("issues", {
  id: integer("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  body: varchar("body", { length: 255 }).notNull(),
  status: issueStatus().notNull().default("queued"),
  neta: integer("neta")
    .references(() => neta.id)
    .notNull(),
});
