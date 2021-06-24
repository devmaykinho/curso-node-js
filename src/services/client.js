import * as clientEntity from '../database/entities/client.js';

import {Unauthorized} from './exceptions/HttpRequestError.js';

const findAll = async () => {
    const result = await clientEntity.findAll();
    return result;
}

const create = async (client) => {
    const result = await clientEntity.create(client);
    return result;
}

const update = async (id, client) => {
    const result = await clientEntity.update(id, client);
    return result;
}

const remove = async (id) => {
    const result = await clientEntity.remove(id);
    return result;
}

export {
    findAll,
    create,
    update,
    remove
};