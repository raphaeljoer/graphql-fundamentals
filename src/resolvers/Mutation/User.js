const { users } = require('../../data/db');
const nextID = require('../../utils/nextId');

const emailAlreadyExist = (email) => {
  if (users.some(u => u.email === email)) {
    throw new Error('Email already exists');
  }
};

const findUser = filter => {
  const user = users.find(u => filter.id ? (u.id === filter.id) : (u.email === filter.email));
  if (!user) throw new Error('User not found');
  return user;
}

const createUser = (_, { data }) => {
  const { name, email, old } = data;
  emailAlreadyExist(email);
  const newUser = {
    id: nextID(),
    name,
    email,
    old,
    role_id: 1,
    status: 'ACTIVE'
  }

  users.push(newUser);
  return newUser;
};

const deleteUser = (_, { filter }) => {
  const user = findUser(filter);
  users.splice(users.indexOf(user), 1);
  return user;
};

const updateUser = (_, { filter, data }) => {
  emailAlreadyExist(data.email);
  const user = findUser(filter);
  const updatedUser = { ...user, ...data };
  users.splice(users.indexOf(user), 1, updatedUser);
  return updatedUser;
};

module.exports = {
  createUser,
  deleteUser,
  updateUser
};