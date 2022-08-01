import State from "../model/MidwestStatesModle.js";

export const getALLStates = async (req, res) => {
    try {
        const States = await State.findAll();
        res.json(States);
    } catch (error) {
        res.json({message: error.message});
    }
}
export const getStateById = async (req, res) => {
    try {
        const state = await State.findAll({
            where: {id: req.params.id},
        });
        res.json(state[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}
export const createState = async (req, res) => {
    try {
        await State.create(req.body);
        res.json({message: 'State created'});
    } catch (error) {
        res.json({message: error.message});
    }
}
export const updateState = async (req, res) => {
    try {
        await State.update(req.body, {
            where: {id: req.params.id},
        });
        res.json({message: 'State updated'});
    } catch (error) {
        res.json({message: error.message});
    }
}
export const deleteState = async (req, res) => {
    try {
        await State.destroy({
            where: {id: req.params.id},
        });
        res.json({message: 'State deleted'});
    } catch (error) {
        res.json({message: error.message});
    }
}