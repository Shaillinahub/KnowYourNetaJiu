import mongoose, { Schema } from "mongoose";

const flagschema = new Schema({
   label: Schema.Types.String,
   description: Schema.Types.String
 });

export default mongoose.model("Flag", flagschema);
