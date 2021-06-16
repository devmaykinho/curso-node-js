import connection from "../connections/knex.js";

const get = async (username, password) => {
    return await connection('db_user')
    .select('*')
    .where({username: username, password: password});
}

const findAll = async (username, password) => {
    return await connection('db_user')
    .select('*')
}

const create = async (user) => {
    console.log(user);
    return await connection('db_user')
    .insert(user);
}

export {
    get,
    create,
    findAll
}