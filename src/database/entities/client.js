import connection from "../connections/knex.js";


const findAll = async () => {
    return await connection('db_client')
    .select('*')
}

const create = async (client) => {
    return await connection('db_client')
    .insert(client);
}

const update = async (id, client) => {
    return await connection('db_client')
    .update(client)
    .where({"id": id})
}

const remove = async (id) => {
    return await connection('db_client')
    .delete()
    .where({"id": id})
}

export {
    create,
    findAll,
    update,
    remove
}