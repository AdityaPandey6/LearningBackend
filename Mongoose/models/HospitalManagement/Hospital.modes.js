import mongoose from 'mongoose';
const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    }],
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
    }],
} , {timetamps: true});

export const Hospital = mongoose.model('Hospital', hospitalSchema);