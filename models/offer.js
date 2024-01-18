import mongoose, { Schema } from 'mongoose';

const offerSchema = new Schema({
    title: String,
    location: String,
    description: String,
    Responsibilities: String,
    Requirements: String,
    image: String,
    video: String,
}, {
    timestamps: true,
})

const Offer = mongoose.models.Offer || mongoose.model('Offer', offerSchema);
export default Offer;