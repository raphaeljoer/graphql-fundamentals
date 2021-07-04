const { roles } = require('../../data/db');
const nextID = require('../../utils/nextId');

const roleAlreadyExist = (name) => {
  const roleWithName = roles.find(role => role.name === name);
  if (roleWithName) throw new Error('Role already exist');
};

const findRole = filter => {
  const role = roles.find(r => filter.id ? (r.id === filter.id) : (r.name === filter.name));
  if (!role) throw new Error('Role not found');
  return role;
}

const createRole = (_, { data }) => {
  const { name } = data;
  roleAlreadyExist(name);
  const newRole = { id: nextID(), name }
  roles.push(newRole);
  return newRole;
}

const deleteRole = (_, { filter }) => {
  const role = findRole(filter);
  roles.splice(roles.indexOf(role), 1);
  return role;
}

const updateRole = (_, { filter, data }) => {
  roleAlreadyExist(data.name);
  const role = findRole(filter);
  const updatedRole = { ...role, ...data };
  roles[roles.indexOf(role)] = updatedRole;
  return updatedRole;
};

module.exports = {
  createRole,
  deleteRole,
  updateRole
};