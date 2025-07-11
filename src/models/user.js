import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true, //para quitar espacios al inicio y al final
    },
    email: {
        type: String,
        required: true,
        unique: true, //para que no se repita el email
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
},{
    timestamps: true, //para que se creen los campos createdAt y updatedAt
});

export default mongoose.model('User', userSchema);