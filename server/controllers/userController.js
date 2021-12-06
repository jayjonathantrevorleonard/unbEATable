const fs = require('fs');
const path = require('path');
const Users = require('../models/usersDatabase.js')
const userController = {};

userController.getLogin = async (req, res, next) => {
    // apparently this will give a value of 1 if it exists and 0 if it doesn't.
    // https://stackoverflow.com/questions/8389811/how-to-query-mongodb-to-test-if-an-item-exists
    // const  checkLogin= { username: req.body.username, password: req.body.password };
    const { username, password } = req.body;
    const result = await db.usersDatabase.countDocuments({ username, password }, { limit: 1 })
        if(result === 1){
            try {
                res.locals.login = true;
                return next();
            } catch (e) {
                return next({
                    log: `userController.getLogin: ERROR: ${e}`,
                    message: { err: 'Error occurred in userController.getLogin. Check server logs for more details' }, 
                })
            }
        } else {
            try {
                res.locals.login = false;
                return next();
            } catch (e) {
                return next({
                log: `userController.getLogin: ERROR: ${e}`,
                message: { err: 'Error occurred in userController.getLogin. Check server logs for more details' }, 
                })
        }
    };
};

module.exports = userController;