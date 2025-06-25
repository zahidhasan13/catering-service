import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    walletBalance: {
        type: Number,
        default: 0,
    }
},
{
    timestamps: true,
})

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;