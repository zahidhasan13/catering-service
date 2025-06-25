import mongoose from "mongoose";

const chefSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    workZone: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        default: 0,
    },
    available: {
        type: Boolean,
        default: true,
    },
    rating: {
        type: Number,
        default: 5,
    },
    bookingDate: [{
        type: Date,
        default: null,
    }],
},
{
    timestamps: true,
})

const Chef = mongoose.models.Chef || mongoose.model("Chef", chefSchema);
export default Chef;