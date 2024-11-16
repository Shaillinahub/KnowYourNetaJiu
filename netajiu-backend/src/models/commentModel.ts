import mongoose, { Schema } from "mongoose";

export interface CommentType {
  content: string;
  user: string;
  parent: string | null;
  opinion: string;
}

const commentschema = new Schema(
  {
    content: Schema.Types.String,
    user: { type: Schema.Types.ObjectId, ref: "Contributor" },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },
    opinion: { type: Schema.Types.ObjectId, ref: "Contributor" },
  },
  { timestamps: true },
);

export default mongoose.model("Comment", commentschema);
