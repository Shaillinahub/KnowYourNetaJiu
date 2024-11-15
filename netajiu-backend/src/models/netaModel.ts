import mongoose, { Schema } from "mongoose";

const netaschema = new Schema({
  date: Schema.Types.Date,
  activity: Schema.Types.String,
  ref: Schema.Types.String
});

export default mongoose.model("Neta", netaschema);
