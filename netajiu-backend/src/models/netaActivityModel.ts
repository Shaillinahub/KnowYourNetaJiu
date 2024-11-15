import mongoose, { Schema } from "mongoose";

const netaActivityschema = new Schema({
  date: Schema.Types.Date,
  activity: Schema.Types.String,
  ref: Schema.Types.String
});

export default mongoose.model("Neta", netaActivityschema);
