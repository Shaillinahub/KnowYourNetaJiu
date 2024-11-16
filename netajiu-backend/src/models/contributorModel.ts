import mongoose, { Schema } from "mongoose";

export interface ContributorType {
  username: string;
  password: string;
  email: string;
  phone: string;
  refreshToken: string;
  photo: string;
  bio: string;
  document: string;
  alias: string;
}

const contributorschema = new Schema(
  {
    username: Schema.Types.String,
    password: Schema.Types.String,
    email: Schema.Types.String,
    phone: Schema.Types.String,
    refreshToken: Schema.Types.String,
    photo: { type: Schema.Types.String, default: "" },
    bio: Schema.Types.String,
    document: { type: Schema.Types.String, default: "" ,
    alias: Schema.Types.String,
  },
  { timestamps: true },
);

export default mongoose.model("Contributor", contributorschema);
