import mongoose, { Schema } from "mongoose";

export interface VoteRecordType {
  contributor: string;
  opinion: string;
  vote: string;
}

const voteschema = new Schema(
  {
    contributor: { type: Schema.Types.ObjectId, ref: "Contributor" },
    opinion: { type: Schema.Types.ObjectId, ref: "Opinion" },
    vote: Schema.Types.String,
  },
  { timestamps: true },
);

export default mongoose.model("VoteRecord", voteschema);
