import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import * as userEntity from '../database/entities/user.js';

dotenv.config();

import {Unauthorized} from './exceptions/HttpRequestError.js';

const findAll = async () => {
    
    const result = await userEntity.findAll();

    if(!result){
        throw new Unauthorized('Usuário não autenticado');
    }

    return result;

}

const create = async (user) => {
    
    const [result] = await userEntity.create(user);

    if(!result){
        throw new Unauthorized('Usuário não autenticado');
    }

    return result;

}


export {
    findAll,
    create
};