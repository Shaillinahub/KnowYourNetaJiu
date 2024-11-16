import mongoose, { Schema } from "mongoose";
import { OpinionVersionType } from "./opinionVersionModel";
import { FlagType } from "./flagModel";
import { TagType } from "./tagModel";

export interface OpinionType {
  neta: string;
  content: string;
  contributor: string;
  title: string;
  links: [
    {
      label: string;
      link: string;
    },
  ];
  stats: {
    up: number;
    down: number;
  };
  flag: FlagType[];
  tag: TagType[];
  version: {
    value: number;
    versions: OpinionVersionType[];
  };
}

const opinionschema = new Schema(
  {
    neta: { type: Schema.Types.ObjectId, ref: "Neta" },
    title: Schema.Types.String,
    content: Schema.Types.String,
    contributor: { type: Schema.Types.ObjectId, ref: "Contributor" },
    links: [
      {
        label: Schema.Types.String,
        link: Schema.Types.String,
      },
    ],
    stats: {
      up: { type: Schema.Types.Number, default: 0 },
      down: { type: Schema.Types.Number, default: 0 },
    },
    flag: [{ type: Schema.Types.ObjectId, ref: "Flag" }],
    tag: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    version: {
      value: { type: Schema.Types.Number, default: 0 },
      versions: [{ type: Schema.Types.ObjectId, ref: "OpinionVersion" }],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Opinion", opinionschema);
