import mongoose, { Schema } from "mongoose";

const opinionschema = new Schema({
  neta:{ type: Schema.Types.ObjectId, ref: "Neta" },
  content: Schema.Types.String,
  contributor: { type: Schema.Types.ObjectId, ref: "Contributor" }
 });

export default mongoose.model("Opinion", opinionschema);
