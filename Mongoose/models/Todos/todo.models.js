import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        subTodos: {
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'SubTodo',
                },
            ], //Array of SubTodos,
        },
    },
    { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
