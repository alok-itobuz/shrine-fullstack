import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    publishedAt: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    quote: {
        type: String,
        default: `Romans 12:9 Love must be sincere. Hate what is evil; cling to what is good`
    },
    gallery: [{
        type: String
    }],
    subscriber: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const Blog = mongoose.model('Blog', blogSchema)

export default Blog