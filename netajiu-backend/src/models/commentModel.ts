import mongoose, { Schema } from "mongoose";

const commentschema = new Schema({
  content: Schema.Types.String,
  user: { type: Schema.Types.ObjectId, ref: "Contributor" },
  parent: { type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
    default: null
  }
  opinion: { type: Schema.Types.ObjectId, ref: "Contributor" },
});

export default mongoose.model("Comment", commentschema);
