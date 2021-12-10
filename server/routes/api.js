const express = require('express');

const path = require('path');
const yelpController = require('../controllers/yelpController');

const router = express.Router();


// this router handles the get request from the client that sends over the location submitted by the user as a url-encoded parameter
router.get('/search/:location', yelpController.search, (req, res) => {
    console.log('reached the end of the middleware');
    res.status(200).json(res.locals.results);
})

// router.post('/', yelpController.search, (req, res) => {
//   }
// );

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
        // if (res.locals.login === false){
        //     res.status(200)
        //         .send({
        //             'login': res.locals.login,
        //             'error': true,
        //         });
        // } else {
        //     res.status(200)
        //         .send({
        //             'login': res.locals.login,
        //             'error': false,
        //         });
        // };
    // }
// );

module.exports = router;
