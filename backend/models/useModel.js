import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true

    },
    isAdmin: {
        type: Boolean,
        default: true,
        required: true

    }

},
    {
        timestamps: true,
    }
)

// Creating collection or module

const User=mongoose.model("User",userSchema)
export default User