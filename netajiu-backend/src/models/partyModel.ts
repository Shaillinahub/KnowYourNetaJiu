import mongoose, { Schema } from "mongoose";

const partyschema = new Schema({
  name: Schema.Types.String,
  description: Schema.Types.String
});

export default mongoose.model("Party", partyschema);
