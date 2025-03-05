import { relations } from "drizzle-orm";
import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { netaCareers } from "./neta_career.schema";
import { netaEducations } from "./neta_education.schema";
import { netaHistory } from "./neta_history.schema";
import { netaSocial } from "./neta_social.schema";
import { career } from "./career.schema";
import { education } from "./education.schema";
import { history } from "./history.schema";
import { social } from "./social.schema";

export const neta = pgTable("netas", {
  id: integer("id").primaryKey(),
  fullName: varchar("fullName", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }),
  constituency: varchar("constituency", { length: 255 }).notNull(),
  photo: varchar("photo", { length: 255 }).notNull(),
  dob: date("dob", { mode: "string" }),
});

export const netaRelations = relations(neta, ({ many }) => ({
  netaCareers: many(netaCareers),
  netaEducations: many(netaEducations),
  netaHistory: many(netaHistory),
  netaSocial: many(netaSocial),
}));

export const netaCareerRelations = relations(netaCareers, ({ one }) => ({
  neta: one(neta, {
    fields: [netaCareers.netaId],
    references: [neta.id],
  }),
  career: one(career, {
    fields: [netaCareers.careerId],
    references: [career.id],
  }),
}));

export const netaEducationRelations = relations(netaEducations, ({ one }) => ({
  neta: one(neta, {
    fields: [netaEducations.netaId],
    references: [neta.id],
  }),
  education: one(education, {
    fields: [netaEducations.educationId],
    references: [education.id],
  }),
}));

export const netaHistoryRelations = relations(netaHistory, ({ one }) => ({
  neta: one(neta, {
    fields: [netaHistory.netaId],
    references: [neta.id],
  }),
  history: one(history, {
    fields: [netaHistory.historyId],
    references: [history.id],
  }),
}));

export const netaSocialRelations = relations(netaSocial, ({ one }) => ({
  neta: one(neta, {
    fields: [netaSocial.netaId],
    references: [neta.id],
  }),
  social: one(social, {
    fields: [netaSocial.socialId],
    references: [social.id],
  }),
}));

export type Neta = typeof neta.$inferSelect;
