import Washing from '../models/washing_model.js';

export const store = async (req, res) => {
    try {
        await Washing.create(req.body);
        res.json(201);
    } catch (error) {
        res.status(401).json(error.message);
    }
};

export const index = async (req, res) => {
    try {
        const content = await Washing.findById(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(401).json(error.message);
    }
};

export const show = async (req, res) => {
    try {
        const content = await Washing.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(401).json(error.message);
    }
};

export const update = async (req, res) => {
    try {
        const content = await Washing.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(content);
    } catch (error) {
        res.status(401).json(error.message);
    }
};

export const destroy = async (req, res) => {
    try {
        await Washing.findByIdAndDelete(req.params.id).exec();
        res.json();
    } catch (error) {
        res.status(401).json(error.message);
    }
};