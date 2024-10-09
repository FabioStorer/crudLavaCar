import { Schema, model } from "mongoose";

const clientSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    phoneNumber: {
        type: Schema.Types.String,
        required: true,
        validator: {
            validate(v) {
                return /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/.test(v);
            }
        }
    },
    address: {
        type: Schema.Types.String,
        required: true
    }
});

const Client = model('Client', clientSchema);

export default Client;