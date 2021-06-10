const user = (data) => {
    const {username, password} = data;

    return {
        username,
        password
    }
}

export default user;