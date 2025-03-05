import { eq } from "drizzle-orm";
import { db, schema } from "@/db";

export const socialRepo = {
  findAllByNeta: async (id: number) => {
    return await db
      .select({
        id: schema.social.id,
        label: schema.social.label,
        link: schema.social.link,
      })
      .from(schema.social)
      .leftJoin(
        schema.netaSocial,
        eq(schema.netaSocial.netaId, schema.social.id),
      )
      .leftJoin(schema.neta, eq(schema.neta.id, schema.netaSocial.netaId))
      .where(eq(schema.neta.id, id));
  },

  create: async (data: any, entry: any) => {
    const history = await db.insert(schema.history).values(data).returning();
    const historyId = history[0].id;
    await db.insert(schema.netaHistory).values({
      netaId: entry.neta.id,
      historyId: historyId,
    });
    return history;
  },

  update: async (id: number, data: any) => {
    const neta = await db
      .update(schema.history)
      .set(data)
      .where(eq(schema.history.id, id))
      .returning();
    return neta;
  },

  delete: async (id: number) => {
    const neta = await db
      .delete(schema.history)
      .where(eq(schema.history.id, id))
      .returning();
    return neta;
  },
};
