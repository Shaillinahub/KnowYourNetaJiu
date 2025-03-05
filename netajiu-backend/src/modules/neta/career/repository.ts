import { eq } from "drizzle-orm";
import { db, schema } from "@/db";

export const careerRepo = {
  findAllByNeta: async (id: number) => {
    return await db
      .select({
        id: schema.career.id,
        company: schema.career.company,
        since: schema.career.since,
        till: schema.career.till,
        ref: schema.career.ref,
      })
      .from(schema.career)
      .leftJoin(
        schema.netaCareers,
        eq(schema.career.id, schema.netaCareers.careerId),
      )
      .leftJoin(schema.neta, eq(schema.netaCareers.netaId, schema.neta.id))
      .where(eq(schema.neta.id, id));
  },

  create: async (data: any, entry: any) => {
    const career = await db.insert(schema.career).values(data).returning();
    const careerId = career[0].id;
    await db.insert(schema.netaCareers).values({
      netaId: entry.neta.id,
      careerId: careerId,
    });
    return career;
  },

  update: async (id: number, data: any) => {
    const neta = await db
      .update(schema.career)
      .set(data)
      .where(eq(schema.career.id, id))
      .returning();
    return neta;
  },

  delete: async (id: number) => {
    const neta = await db
      .delete(schema.career)
      .where(eq(schema.career.id, id))
      .returning();
    return neta;
  },
};
