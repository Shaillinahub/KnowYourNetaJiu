import mongoose, { Schema } from "mongoose";

const contributorschema = new Schema({
  username: Schema.Types.String,
  password: Schema.Types.String,
  email: Schema.Types.String,
  phone: Schema.Types.String,
  refreshToken: Schema.Types.String,
  photo: Schema.Types.String,
  bio: Schema.Types.String,
  document: Schema.Types.String,
  alias: Schema.Types.String,
});

export default mongoose.model("User", contributorschema);
