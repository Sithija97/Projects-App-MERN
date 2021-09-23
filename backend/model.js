import mongoose from "mongoose";

const schema = mongoose.Schema({
  image: String,
  title: String,
  caption: String,
});

export default mongoose.model("Projects", schema);
