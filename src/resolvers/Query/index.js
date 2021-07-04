const { users: dataUsers, roles: dataRoles } = require('../../data/db');

const users = () => dataUsers;
const user = (_, { id }) => dataUsers.find(u => `${u.id}` === id);

const roles = () => dataRoles;
const role = (_, { id }) => dataRoles.find(r => `${r.id}` === id);

module.exports = {
  users,
  user,
  roles,
  role
}