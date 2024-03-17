import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    profilePicture: {
        type: String,
    },
    socialHandles: {
        instagram: {
            type: String,
        },
        pintrest: {
            type: String,
        },
        twitter: {
            type: String,
        },
        facebook: {
            type: String,
        },
    }
})

const Subscriber = mongoose.model('Subscriber', subscriberSchema)


export default Subscriber