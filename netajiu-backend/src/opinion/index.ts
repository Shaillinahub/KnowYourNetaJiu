import { Elysia } from "elysia";
import Neta from "../models/netaModel";
import Opinion, { OpinionType } from "../models/opinionModel";
import VoteRecord from "../models/voteModel";
import OpinionVersion, {
  OpinionVersionType,
} from "../models/opinionVersionModel";
import { generateChangeSummary } from "../utils/diff";
// import NetaActivity from "../models/netaActivityModel";
//import { verifyToken } from "../utils/index";

export const opinion = new Elysia()
  .get("/:id", async ({ params: { id } }: { params: { id: string } }) => {
    const opinion = await Opinion.findById(id);
    return opinion;
  })
  .post("/add", async ({ body }: { body: OpinionType }) => {
    const opinion = new Opinion(body);

    let newOpinion = opinion.save();
    return newOpinion;
  })
  .post(
    "/update/:id",
    async ({
      params: { id },
      body,
    }: {
      params: { id: string };
      body: OpinionVersionType;
    }) => {
      const fetchOpinion = await Opinion.findById(id);

      if (!fetchOpinion) throw new Error("Opinion not found");
      try {
        const opinionObject = fetchOpinion.toObject();

        delete opinionObject._id;
        let changes = generateChangeSummary(
          opinionObject.content,
          body.content,
        );

        if (changes.added) {
          let newUpdate = new OpinionVersion({
            ...opinionObject,
            ...body,
            changes,
          });

          newUpdate.save();
          opinionObject.version.versions.push(newUpdate._id);
          // console.log(newUpdate._id);
          let lastupdate = await Opinion.findByIdAndUpdate(
            id,
            {
              $set: {
                version: {
                  value: opinionObject.version.value + 1,
                  versions: opinionObject.version.versions,
                },
              },
            },
            { new: true },
          );

          return lastupdate;
        }
      } catch (e) {
        console.log(e);
      }
    },
  )
  .post("/vote", async ({ body }: { body: { id: string; type: string } }) => {
    const fetchOpinion: OpinionType | null = await Opinion.findById(body.id);
    // console.log(fetchOpinion);
    try {
      if (body.type === "up") {
        await Opinion.findByIdAndUpdate(
          body.id,
          {
            $set: {
              stats: {
                ...fetchOpinion?.stats,
                up: fetchOpinion?.stats.up + 1,
              },
            },
          },
          { new: true },
        );
        let voteRecord = new VoteRecord({
          opinion: body.id,
          contributor: fetchOpinion?.contributor,
          vote: body.type,
        });
        voteRecord.save();
      } else if (body.type === "down") {
        await Opinion.findByIdAndUpdate(
          body.id,
          {
            $set: {
              stats: {
                ...fetchOpinion?.stats,
                down: fetchOpinion?.stats.down + 1,
              },
            },
          },
          { new: true },
        );
        let voteRecord = new VoteRecord({
          opinion: body.id,
          contributor: fetchOpinion?.contributor,
          vote: body.type,
        });
        voteRecord.save();
      }
    } catch (e) {
      console.log(e);
    }
  });
