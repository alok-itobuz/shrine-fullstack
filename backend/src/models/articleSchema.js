import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
    },
    image: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    publishedAt: {
        type: Date,
        default: Date.now()
    }
})

const Article = mongoose.model('Article', articleSchema)
export default Article