const nextID = require('../utils/nextId')

const users = [
  {
    id: nextID(),
    name: 'John Doe',
    email: 'john@gmail.com',
    username: 'johndoe',
    old: 18,
    role_id: 1, 
    status: 'ACTIVE'
  },
  {
    id: nextID(),
    name: 'Raphael',
    email: 'raphael@gmail.com',
    username: 'raphael',
    old: 29,
    role_id: 1,
    status: 'UNACTIVE'
  },
  {
    id: nextID(),
    name: 'Jessica',
    email: 'jessica@gmail.com',
    username: 'jess',
    old: 34,
    role_id: 2,
    status: 'ACTIVE'
  },
  {
    id: nextID(),
    name: 'Joice',
    email: 'joice@gmail.com',
    username: 'jojo',
    old: 12,
    role_id: 2,
    status: 'BLOCKED'
  },
];

const roles = [
  { id: 1, name: 'common' },
  { id: 2, name: 'admin' },
];

module.exports = { users, roles };