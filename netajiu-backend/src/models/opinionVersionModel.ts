import mongoose, { Schema } from "mongoose";

export interface OpinionVersionType {
  neta: string;
  title: string;
  content: string;
  contributor: string;
  links: [
    {
      label: string;
      link: string;
    },
  ];
  changes: { added: string; removed: string };
}

const opinionVersionschema = new Schema(
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
    changes: { added: Schema.Types.String, removed: Schema.Types.String },
  },
  { timestamps: true },
);

export default mongoose.model("OpinionVersion", opinionVersionschema);
