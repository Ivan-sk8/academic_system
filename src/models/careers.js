import mongoose from "mongoose";


const coordinadorSchema = new mongoose.Schema({
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
});

const careerSchema = new mongoose.Schema({
    career_name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    four_quarter_duration: {
        type: Number,
        required: true,
    },
    modality: {
        type: String,
        required: true,
        enum: ['Presential', 'Online', 'Hybrid'], // Puedes ajustar las modalidades según necesites
    },
    creation_date: {
        type: String,
        required: true,

    },
    active: {
        type: Boolean,
        default: true,
    },
    coordinator: {
        type: coordinadorSchema, // Referencia al modelo Coordinador
        required: true
    },
    career_code: {
        type: String,
        required: true,
        unique: true,
    }
}, {
    timestamps: true
});

export default mongoose.model('Career', careerSchema);

