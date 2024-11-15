import mongoose, { Schema } from "mongoose";

const opinionschema = new Schema({
  neta:{ type: Schema.Types.ObjectId, ref: "Neta" },
  content: Schema.Types.String,
  contributor: { type: Schema.Types.ObjectId, ref: "Contributor" },
  links: [{
    label: Schema.Types.String,
    link: Schema.Types.String
  }],
  stats: {
    up: Schema.Types.Number,
    down: Schema.Types.Number
  },
  flag: { type: Schema.Types.ObjectId, ref: "Flag" },
  tag: { type: Schema.Types.ObjectId, ref: "Tag" },
  version: {
    value: Schema.Types.ObjectId
    versions: [{ type: Schema.Types.ObjectId, ref: "OpinionVersion" }]
  }
 });

export default mongoose.model("Opinion", opinionschema);
