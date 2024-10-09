import Employee from '../models/employee_model.js';

export const store = async (req, res) => {
    try {
        await Employee.create(req.body);
        res.json(201);
    } catch (error) {
        res.status(401).json(error.message);
    }
};

export const index = async (req, res) => {
    try {
        const content = await Employee.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

export const show = async (req, res) => {
    try {
        const content = await Employee.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

export const update = async (req, res) => {
    try {
        const content = await Employee.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(content)
    } catch (error) {
        res.status(401).json(error.message);
    }
};

export const destroy = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id).exec();
        res.json();
    } catch (error) {
        res.status(401).json(error.message);
    }
};