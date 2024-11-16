import mongoose, { Schema } from "mongoose";

const netaActivityschema = new Schema({
  date: Schema.Types.Date,
  activity: Schema.Types.String,
  ref: Schema.Types.String,
  neta: { type: Schema.Types.ObjectId, ref: "Neta" },
});

export default mongoose.model("NetaActivty", netaActivityschema);
