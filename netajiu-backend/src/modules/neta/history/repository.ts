import { eq } from "drizzle-orm";
import { db, schema } from "@/db";

export const historyRepo = {
  findAllByNeta: async (id: number) => {
    return await db
      .select({
        id: schema.history.id,
        activity: schema.history.activity,
        date: schema.history.date,
        link: schema.history.link,
      })
      .from(schema.history)
      .leftJoin(
        schema.netaHistory,
        eq(schema.history.id, schema.netaHistory.netaId),
      )
      .leftJoin(schema.neta, eq(schema.netaHistory.netaId, schema.neta.id))
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
