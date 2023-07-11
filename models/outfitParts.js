import mongoose from "mongoose";
const { Schema } = mongoose;

const OutfitParts = new Schema({
	
});

export default mongoose.model("outfitParts", OutfitParts,'outfitParts' );