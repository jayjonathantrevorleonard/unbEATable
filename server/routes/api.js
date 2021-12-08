const express = require('express');

const path = require ('path');
const userController = require ('../controllers/userController');
const yelpController = require ('../controllers/yelpController');

const router = express.Router();

router.post('/login/', userController.getLogin,
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
// {
//     "error": {
//         "code": "VALIDATION_ERROR",
//         "description": "Authorization is a required parameter.",
//         "field": "Authorization",
//         "instance": null
//     }
// }


// router.post('/', yelpController.search, yelpController.randomRestaurant,
//     (req, res) => {
//         try {
//             console.log ('this is the data from our yelpController', res.locals.data);
//             return res.status(200).json(data);
//         }
//         catch {
//             res.status(400).json({
//                 log: `yelpController.search: ERROR: unknown`,
//                 message: { err: 'Error occurred in yelpController.search. Check server logs for more details' }, 
//             });
//         }
//         // if (res.locals.login === false){
//         //     res.status(200)
//         //         .send({
//         //             'login': res.locals.login,
//         //             'error': true,
//         //         });
//         // } else {
//         //     res.status(200)
//         //         .send({
//         //             'login': res.locals.login,
//         //             'error': false,
//         //         });
//         // };
//     }
// );


module.exports = router;