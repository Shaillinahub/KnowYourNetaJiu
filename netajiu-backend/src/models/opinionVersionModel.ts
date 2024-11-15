import mongoose, { Schema } from "mongoose";

const opinionVersionschema = new Schema({
  neta: { type: Schema.Types.ObjectId, ref: "Neta" },
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
  changes: Schema.Types.String
 });

export default mongoose.model("OpinionVersion", opinionVersionschema);
