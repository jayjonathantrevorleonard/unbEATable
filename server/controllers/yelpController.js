const fs = require('fs');
const path = require('path');
const Users = require('../models/usersDatabase.js');
const yelpController = {};
require('dotenv').config(); // loads the .env file into process.env variable
const fetch = require('node-fetch');
const yelp = require('yelp-fusion');

yelpController.search = (req, res, next) => {
  const { searchBar } = req.body;
  const searchRequest = {
    // term:'Four Barrel Coffee',
    location: searchBar,
  };

  const client = yelp.client(process.env.YELP_AUTHORIZATION);

  client
    .search(searchRequest)
    .then((response) => {
      const firstResult = response.jsonBody.businesses;
      // const firstResult = response.jsonBody;
      const prettyJson = JSON.stringify(firstResult, null, 4);
      // console.log(prettyJson);
      res.locals.data = prettyJson;
      // console.log('search middleware data', res.locals.data);
      return next();
    })
    .catch((e) => {
      return next(console.log(e));
    });
};

// yelpController.getResponse = (req, res, next) => {
//   fetch('https://api.yelp.com/v3/businesses/search/')
// }

yelpController.randomRestaurant = (req, res, next) => {
  // console.log(res.locals.data);
  // const total = res.locals.data.total;
  // console.log(res.locals.data)
  // const businesses = res.locals.data.businesses;
  const businesses = JSON.parse(res.locals.data);
  // console.log (businesses)
  // const { total, businesses } = res.locals.data;
  // console.log(`this is total`, total);
  // console.log(`this is businesses at index 0`, businesses[0]);
  // sanitize data
  if (businesses.length > 0) {
    // generate random index
    // console.log(businesses);
    const index = Math.floor(Math.random() * businesses.length);

    // // TODO: check against user database to make sure not the same result as last time
    // Users.findOne({username: {username}, password: {password}}, 'lastResult')
    // .then((lastResult) => {
    //   console.log(lastResult);
    //   if (lastResult) { // if user is found, returns truthy. But what if lastResult is null?
    //     // if same as lastResult
    //     if (businesses[index] == lastResult) return yelpController.randomRestaurant(req, res, next);

    //     // else, update user database last result
    //     Users.findOneAndUpdate({username: {username}, password: {password}},{lastResult: businesses[index]},{new: true})
    //     .then((newResult) => {
    //         console.log(newResult);
    //     })
    //     .catch((err) => next(err));
    //   }
    // })
    // .catch((err) => next(err));

    // update response to only have one restaurant object and pass it on to next
    // console.log(`this is index`, index);
    res.locals.data = businesses[index];
    // console.log (res.locals.data)
    return next();
  } else {
    return next({
      log: `yelpController.randomRestaurant: ERROR: ${e}`,
      message: {
        err: 'Error occurred in yelpController.randomRestaurant. Check server logs for more details',
      },
    });
  }
};

module.exports = yelpController;

// console.log(`this is req body`, req.body);
// console.log(`API Key`, process.env.YELP_AUTHORIZATION);

// fetch(`https://api.yelp.com/v3/businesses/search?location=${searchBar}`,{
// // const result = fetch(`https://api.yelp.com/v3/businesses/search`, {
// method: 'GET',
// // Authorization: process.env.YELP_AUTHORIZATION,
// headers: {
//      'Content-Type': 'application/json',
//      'Content-Encoding': ['gzip','deflate','br'],
//      'Connection': 'keep-alive',
//     'Authorization': process.env.YELP_AUTHORIZATION },
// // location: searchBar,
// })
//     .then((received) => {
//         console.log(received)
//         received.json()})
//     .then((data) => {
//         console.log(`this is data`, data);
//         res.locals.data = data;
//         return next()
//     })
//     .catch ((e) => {
//         return next({
//             log: `yelpController.search: ERROR: ${e}`,
//             message: { err: 'Error occurred in yelpController.search. Check server logs for more details' },
//         });
//     });
