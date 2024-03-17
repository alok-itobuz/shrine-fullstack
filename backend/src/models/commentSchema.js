import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    comment: {
        type: String,
        required: [true, 'Comment is required']
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment