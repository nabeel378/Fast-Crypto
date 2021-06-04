const crypto = require("crypto")
let salt = 'f8441141w++++++++++++__________!@#$%^&*()@#$%^&*(!@#$%^&*()!@#$%^&*(zxcvbnmnbvfrtyhnbgyhjnbgyuj6487b09f1141616487f50c'
let hashAlgoritham = {}


hashAlgoritham.hasher = (password, salt) => {
    let hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    let value = hash.digest('hex');
    return value;
};

hashAlgoritham.hash = (password, salt=salt) => {
    if (password == null || salt == null) {
        throw new Error('Must Provide Password and salt values');
    }
    if (typeof password !== 'string' || typeof salt !== 'string') {
        throw new Error('password must be a string and salt must either be a salt string or a number of rounds');
    }
    return hashAlgoritham.hasher(password, salt);
};


hashAlgoritham.compare = (password, hash) => {
    let _hash = {
        salt: salt,
        hashedpassword: hash
    }
    if (password == null || hash == null) {
        throw new Error('password and hash is required to compare');
    }
    if (typeof password !== 'string' || typeof hash !== 'string') {
        throw new Error('password must be a String and hash must be an Object');
    }
    let passwordData = hashAlgoritham.hasher(password, _hash.salt);
     if (passwordData === _hash.hashedpassword) {
        return true;
    }
    return false
};

module.exports=hashAlgoritham
