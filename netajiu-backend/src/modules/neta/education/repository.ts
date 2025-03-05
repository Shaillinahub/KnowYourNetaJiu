import { eq } from "drizzle-orm";
import { db, schema } from "@/db";

export const educationRepo = {
  findAllByNeta: async (id: number) => {
    return await db
      .select({
        id: schema.education.id,
        degree: schema.education.degree,
        institution: schema.education.institution,
        since: schema.education.since,
        till: schema.education.till,
        ref: schema.education.ref,
      })
      .from(schema.education)
      .leftJoin(
        schema.netaEducations,
        eq(schema.education.id, schema.netaEducations.educationId),
      )
      .leftJoin(schema.neta, eq(schema.netaEducations.netaId, schema.neta.id))
      .where(eq(schema.neta.id, id));
  },

  create: async (data: any, entry: any) => {
    const education = await db
      .insert(schema.education)
      .values(data)
      .returning();
    const educationId = education[0].id;
    await db.insert(schema.netaEducations).values({
      netaId: entry.neta.id,
      educationId: educationId,
    });
    return education;
  },

  update: async (id: number, data: any) => {
    const neta = await db
      .update(schema.education)
      .set(data)
      .where(eq(schema.education.id, id))
      .returning();
    return neta;
  },

  delete: async (id: number) => {
    const neta = await db
      .delete(schema.education)
      .where(eq(schema.education.id, id))
      .returning();
    return neta;
  },
};
