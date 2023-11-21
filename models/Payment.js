import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    departure: {
        type: Date,
        required: true,
    },
    trainReturn: {
        type: Date,
        required: true,
    },
    method: {
        type: String,
        required: true,
    },
    trainClass: {
        type: String,
        required: true,
    }
})

export default mongoose.model("Payment", PaymentSchema);