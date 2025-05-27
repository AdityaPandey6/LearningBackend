import mongoose from 'mongoose';
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    diagnosed: {
        type: String,
        required: true,
    },
    bloodgroup: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true,
    }

}, { timestamps: true });
export const Patient = mongoose.model('Patient', patientSchema);