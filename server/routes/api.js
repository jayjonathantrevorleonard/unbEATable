const express = require('express');

const path = require ('path');
const userController = require ('../controllers/userController');

const router = express.Router();

router.post('/login/', userController,
    (req, res) => {
        if (res.locals.login === false){
            res.status(200)
                .send({
                    'login': res.locals.login,
                    'error': true,
                });
        } else {
            res.status(200)
                .send({
                    'login': res.locals.login,
                    'error': false,
                });
        };
    }
);