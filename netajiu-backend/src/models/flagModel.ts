import mongoose, { Schema } from "mongoose";

export interface FlagType {
  label: string;
  description: string;
}

const flagschema = new Schema({
  label: Schema.Types.String,
  description: Schema.Types.String,
});

export default mongoose.model("Flag", flagschema);
