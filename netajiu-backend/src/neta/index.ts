import { Elysia } from "elysia";
import Neta from "../models/netaModel";
import NetaActivity from "../models/netaActivityModel";
import Party from "../models/partyModel";
//import { verifyToken } from "../utils/index";

export const neta = new Elysia().get(
  "/:id",
  async ({ params: { id } }: { params: { id: string } }) => {
    const neta = await Neta.findById(id);
    const activity = await NetaActivity.find({ neta: id });
    const party = await Party.findById(neta.party);
    return { neta: neta, activity: activity, party: party };
  },
);
