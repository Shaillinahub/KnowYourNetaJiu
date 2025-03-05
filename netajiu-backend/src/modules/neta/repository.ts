import { eq } from "drizzle-orm";
import { db, schema } from "@/db";

export const netaRepo = {
  findAll: async () => {
    return await db.query.neta
      .findMany({
        with: {
          netaCareers: {
            with: {
              career: true,
            },
          },
          netaEducations: {
            with: {
              education: true,
            },
          },
          netaHistory: {
            with: {
              history: true,
            },
          },
          netaSocial: {
            with: {
              social: true,
            },
          },
        },
      })
      .then((netas) =>
        netas.map(
          ({
            netaCareers,
            netaEducations,
            netaHistory,
            netaSocial,
            ...netaData
          }) => ({
            ...netaData,
            career: netaCareers.map((nc) => nc.career),
            education: netaEducations.map((ne) => ne.education),
            history: netaHistory.map((nh) => nh.history),
            social: netaSocial.map((ns) => ns.social),
          }),
        ),
      );
  },
  findById: async (id: number) => {
    const neta = await db.query.neta.findFirst({
      with: {
        netaCareers: {
          with: {
            career: true,
          },
        },
        netaEducations: {
          with: {
            education: true,
          },
        },
        netaHistory: {
          with: {
            history: true,
          },
        },
        netaSocial: {
          with: {
            social: true,
          },
        },
      },
    });

    if (neta) {
      const {
        netaCareers,
        netaEducations,
        netaHistory,
        netaSocial,
        ...netaData
      }: {
        netaCareers: any[];
        netaEducations: any[];
        netaHistory: any[];
        netaSocial: any[];
      } = neta;
      return {
        ...netaData,
        career: netaCareers.map((nc) => nc.career),
        education: netaEducations.map((ne) => ne.education),
        history: netaHistory.map((nh) => nh.history),
        social: netaSocial.map((ns) => ns.social),
      };
    }
  },

  create: async (data: any) => {
    const neta = await db.insert(schema.neta).values(data).returning();
    return neta;
  },

  update: async (id: number, data: any) => {
    const neta = await db
      .update(schema.neta)
      .set(data)
      .where(eq(schema.neta.id, id))
      .returning();
    return neta;
  },

  delete: async (id: number) => {
    const neta = await db
      .delete(schema.neta)
      .where(eq(schema.neta.id, id))
      .returning();
    return neta;
  },
};
