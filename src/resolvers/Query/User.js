const { roles: dataRoles } = require('../../data/db');

module.exports = {
  role(user) {
    const role = dataRoles.find(r => r.id === user.role_id);
    return role ? role : null;
  }
}