import { Elysia } from "elysia";
import Neta from "../models/netaModel";
import Opinion, { OpinionType } from "../models/opinionModel";
import OpinionVersion, {
  OpinionVersionType,
} from "../models/opinionVersionModel";
import Comment, { CommentType } from "../models/commentModel";

export const comment = new Elysia()
  .get(
    "/:opinion",
    async ({ params: { opinion } }: { params: { opinion: string } }) => {
      const comments = await Comment.find({ opinion });

      let formattedComment: CommentType[] = [];

      comments.map((parentComments) => {
        if (!parentComments.parent) {
          formattedComment.push(parentComments);
        }
      });

      return formattedComment;
    },
  )
  .get(
    "/:opinion/replies/:comment",
    async ({
      params: { opinion, comment },
    }: {
      params: { opinion: string; comment: string };
    }) => {
      const comments = await Comment.find({ opinion });

      let formattedComment: CommentType[] = [];

      comments.map((repliedcomments) => {
        if (repliedcomments.parent) {
          if (repliedcomments.parent == comment) {
            formattedComment.push(repliedcomments);
          }
        }
      });

      return formattedComment;
    },
  )
  .post("/add", async ({ body }: { body: CommentType }) => {
    const comment = new Comment(body);

    let newComment = comment.save();
    return newComment;
  });
