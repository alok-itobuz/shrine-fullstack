import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Amount is required.']
    },
    socialHandles: {
        instagram: {
            type: String,
        },
        google: {
            type: String,
        },
        youtube: {
            type: String
        }
    },
    joiningDate: {
        type: Date,
        default: Date.now()
    }
})

const Volunteer = mongoose.model('Volunteer', volunteerSchema)

export default Volunteer