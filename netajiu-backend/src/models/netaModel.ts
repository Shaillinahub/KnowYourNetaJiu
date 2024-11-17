import mongoose, { Schema } from "mongoose";

const netaschema = new Schema({
  fullname: Schema.Types.String,
  photo: Schema.Types.String,
  status: Schema.Types.String,
  gender: Schema.Types.String,
  dob: {
    date: Schema.Types.Date,
    age: Schema.Types.Number,
  },
  origin: {
    ward: Schema.Types.Number,
    municipality: Schema.Types.String,
    district: Schema.Types.String,
    province: Schema.Types.String,
    country: Schema.Types.String,
  },
  party: { type: Schema.Types.ObjectId, ref: "Party" },
  summary: Schema.Types.String,
  activity: [{ type: Schema.Types.ObjectId, ref: "NetaActivity" }],
});

export default mongoose.model("Neta", netaschema);
