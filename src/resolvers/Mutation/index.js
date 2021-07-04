const User = require('./User');
const Role = require('./Role');

module.exports = { ...User, ...Role };