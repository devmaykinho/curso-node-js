import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

import {Unauthorized} from './exceptions/HttpRequestError.js';



const authenticate = (user) => {

    if(user.username != 'maycon' || user.password != '123'){
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
        const token = authorization.split(' ')[2];
    
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