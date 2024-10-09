import { Schema, model } from "mongoose";

const washingSchema = new Schema({
    time: {
        type: Schema.Types.Date,
        required: true
    },
    washingType: {
        type: Schema.Types.String,
        enum: ['BASIC', 'COMPLETE'],
        default: 'BASIC',
        required: true
    },
    status: {
        type: Schema.Types.String,
        enum: ['PAID', 'AWAITING PAYMENT']
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true
    }
});

const Washing = model('Washing', washingSchema);

export default Washing;