import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {get} from '../database/entities/user.js';

dotenv.config();

import {Unauthorized} from './exceptions/HttpRequestError.js';

const authenticate = async (user) => {
    
    const [result] = await get(user.username, user.password);

    if(!result){
        throw new Unauthorized('Usuário não autenticado');
    }

    return genereteToten(user.username);

}

const genereteToten = (username) => {
    return jwt.sign(
        {username: username},
        process.env.SECRET,
        {expiresIn: 1200}
    )
}

const authenticated = (headers) => {
    try {
        const authorization = headers.authorization;
        const token = authorization.split(' ')[1];
        console.log(token)
    
        const decoded = jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if(err){
                throw new Unauthorized('Token inválido');
            }
    
            return decoded;
        })
    
        return decoded.username;        
    } catch (error) {
        throw new Unauthorized('Token inválido');
    }
}

export {
    authenticate,
    authenticated
};