import Client from '../models/client_model.js';

export const store = async (req, res) => {
    try {
        await Client.create(req.body);
        res.json(201);
    } catch (error) {
        res.status(401).json(error.message);
    }
};

export const index = async (req, res) => {
    try {
        const content = await Client.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

export const show = async (req, res) => {
    try {
        const content = await Client.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

export const update = async (req, res) => {
    try {
        const content = await Client.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(content);
    } catch (error) {
        res.status(401).json(error.message);
    }
};

export const destroy = async (req, res) => {
    try {
        await Client.findByIdAndDelete(req.params.id).exec();
        res.json();
    } catch (error) {
        res.status(401).json(error.message);
    }
};