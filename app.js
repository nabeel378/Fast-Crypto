const { hash, compare } = require('./index');

const password = '123456';

const hashPassword = hash(password);

const passwordVerify = compare(password, hashPassword);
console.log(hashPassword)