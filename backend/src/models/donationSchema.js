import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, 'Amount is required.']
    },
    donator: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Donator id is required.']
    }
})

const Donation = mongoose.model('Donation', donationSchema)

export default Donation