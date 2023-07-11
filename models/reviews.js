import mongoose from "mongoose";
const { Schema } = mongoose;

const reviews = new Schema({
	author: String,
    body: String,
    url: String
});

export default mongoose.model("reviews",reviews,"reviews");