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

const validateRequiredFields = (user) =>{
    let isValid = true;

    Object.keys(user).forEach( (item) => {
        if(!user[item] || user[item] == ''){
            isValid = false;
        }
    });

    return isValid;
}

const validatePassword = (password) => {
    const regexNumber = /[0-9]/
    const regexUpper = /[A-Z]/    

    if (password.length != 6)
        return false
    if (!regexNumber.test(password))
        return false
    if (!regexUpper.test(password))
        return false

  return true;   
}

export {
    findAll,
    create,
    validateRequiredFields,
    validatePassword
};