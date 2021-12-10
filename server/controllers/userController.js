const fs = require('fs');
const path = require('path');
const { Users } = require('../models/usersDatabase.js');
const userController = {};

userController.getLogin = (req, res, next) => {
  // apparently this will give a value of 1 if it exists and 0 if it doesn't.
  // https://stackoverflow.com/questions/8389811/how-to-query-mongodb-to-test-if-an-item-exists
  // const  checkLogin= { username: req.body.username, password: req.body.password }
  Users.findOne({
    username: req.body.username,
    password: req.body.password,
  })
    .then((response) => {
      // console.log('response', response);
      // if found, the found object is returned (meaning the username & pw is in database / check passed)
      // if nothing is found, null is returned
      if (response === null) {
        res.locals.loginStatus = false;
      } else {
        res.locals.loginStatus = true;
      }
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Error in userController.getLogin: Error validating user',
        message: { err: `${err}` },
      });
    });
};

module.exports = userController;
