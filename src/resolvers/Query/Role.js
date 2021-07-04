const { roles: dataRoles } = require('../../data/db');

module.exports = {
  roles: () => dataRoles,
  role: (_, { id }) => dataRoles.find(r => `${r.id}` === id),
};