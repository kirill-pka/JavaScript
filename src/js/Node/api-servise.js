import shortid from 'shortid';

export const fetchAllUsers = () => {
    console.log('fetchAllUsers');
}
export const fetchUsersById = () => {
    console.log('fetchUsersById');
}
export const updateUsersById = () => {
    console.log('updateUsersById');
}

export const x = 5;

export const y = 'mango';

// export default {fetchAllUsers, fetchUsersById, updateUsersById, x, y};

export const addUser = name => {
    const user = {
        id: shortid.generate(),
        name,
    }
    console.log(user);
}