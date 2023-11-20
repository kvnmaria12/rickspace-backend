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

  this.comparePassword = function (userPassword, dbHash) {
    return new Promise((resolve, reject) => {
      try {
        bcrypt.compare(userPassword, dbHash, (err, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(err);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  };
};
