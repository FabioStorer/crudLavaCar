import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    }
});

const Employee = model('Employee', employeeSchema);

export default Employee;