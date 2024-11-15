import mongoose, { Schema } from "mongoose";

const tagschema = new Schema({
   label: Schema.Types.String,
   description: Schema.Types.String
 });

export default mongoose.model("Tag", tagschema);
