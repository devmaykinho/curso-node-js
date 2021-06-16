import * as userService from '../services/user.js';
import {authenticated} from '../services/auth.js'

const findAll = async (req, res) => {
    try {
        authenticated(req.headers);
        const users = await userService.findAll();

        return res.status(200).json(users);
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message || 'Internal Error' });
    }    
}

const create = async (req, res) => {
    try {
        authenticated(req.headers);

        const user = req.body;
        console.log('req.body', req);
        await userService.create(user);

        return res.status(200).json({message: "success user"});
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message || 'Internal Error' });
    }    
}

const update = (req, res) => {
    try {
        authenticated(req.headers);

        return res.status(200).json({message: "success user"});
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message || 'Internal Error' });
    }    
}

const remove = (req, res) => {
    try {
        authenticated(req.headers);

        return res.status(200).json({message: "success user"});
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