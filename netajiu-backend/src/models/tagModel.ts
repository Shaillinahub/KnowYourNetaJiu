import mongoose, { Schema } from "mongoose";

export interface TagType {
  label: string;
  description: string;
}

const tagschema = new Schema({
  label: Schema.Types.String,
  description: Schema.Types.String,
});

export default mongoose.model("Tag", tagschema);
