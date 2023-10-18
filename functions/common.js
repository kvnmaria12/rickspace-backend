const bcrypt = require('bcrypt');

module.exports = function () {
  this.hashPassword = function (password, saltRounds) {
    return new Promise(function (resolve, reject) {
      try {
        bcrypt.hash(password, saltRounds, function (err, hash) {
          if (err) {
            err = false;
            reject(err);
          } else {
            resolve(hash);
          }
        });
      } catch (error) {
        let err = {};
        err.error = true;
        err.message = 'Error: ' + error;
        resolve(err);
      }
    });
  };
};
