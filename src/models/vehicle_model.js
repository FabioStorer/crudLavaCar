import { Schema, model } from "mongoose";

const carSchema = new Schema({
    licensePlate: {
        type: Schema.Types.String,
        unique: true,
        min: 7,
        max: 7,
        required: true
    },
    name: {
        type: Schema.Types.String,
        required: true
    },
    color: {
        type: Schema.Types.String,
        required: true
    },
    category: {
        type: Schema.Types.String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    }
});

const Car = model('Car', carSchema);

export default Car;