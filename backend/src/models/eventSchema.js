import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    keyPoints: [
        {
            type: String,
        }
    ],
    date: {
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
    },
    location: {
        name: {
            type: String
        },
        coords: {
            type: [Number]
        }
    },
    gallery: [{
        type: String
    }],
    duration: {
        startTime: {
            type: String,
        },
        endTime: {
            type: String
        }
    },

})

const Event = mongoose.model('Event', eventSchema)

export default Event