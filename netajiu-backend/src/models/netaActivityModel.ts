import mongoose, { Schema } from "mongoose";

const netaActivityschema = new Schema({
  fullname: Schema.Types.String,
  dob: {
    date: Schema.Types.Date,
    age: Schema.Types.Number
  },
  party: { type: Schema.Types.ObjectId, ref: "Party" },
  summary: Schema.Types.String,
  activity: [{ type: Schema.Types.ObjectId, ref: "NetaActivity" }],
});

export default mongoose.model("Neta", netaActivityschema);
