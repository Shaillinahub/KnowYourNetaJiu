import { Elysia } from "elysia";
import Neta from "../models/netaModel";
// import NetaActivity from "../models/netaActivityModel";
//import { verifyToken } from "../utils/index";

export const neta = new Elysia().get(
  "/:id",
  async ({ params: { id } }: { params: { id: string } }) => {
    const neta = await Neta.findById(id);

    return neta;
  },
);
