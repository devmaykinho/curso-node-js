import * as clientService from '../services/client.js';
import {authenticated} from '../services/auth.js'

const findAll = async (req, res) => {
    try {
        authenticated(req.headers);
        const client = await clientService.findAll();

        return res.status(200).json(client);
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message || 'Internal Error' });
    }    
}

const create = async (req, res) => {
    try {
        authenticated(req.headers);

        const client = req.body;
        await clientService.create(client);

        return res.status(200).json({message: "success client"});
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message || 'Internal Error' });
    }    
}

const update = async (req, res) => {
    try {
        authenticated(req.headers);
        const {id} = req.params;
        const client = req.body;
        
        await clientService.update(id, client);

        return res.status(200).json({message: "success client update"});
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message || 'Internal Error' });
    }    
}

const remove = async (req, res) => {
    try {
        authenticated(req.headers);
        const {id} = req.params;
        
        await clientService.remove(id);

        return res.status(200).json({message: "success client delete"});
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message || 'Internal Error' });
    }    
}

export {
    findAll,
    create,
    update,
    remove
};