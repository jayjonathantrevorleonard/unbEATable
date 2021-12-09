const fs = require('fs');
const path = require('path');
const { Users, Locations } = require('../models/usersDatabase.js');
const fetch = require('node-fetch');
const yelpAPI = require('../yelpAPI')
// const yelp = require('yelp-fusion');

const yelpController = {};

/****************************************************** DO NOT CHANGE THIS PART ******************************************************/

// this controller makes the request to the Yelp API, since we have to make the API call from our server
// rather than the client because Yelp blocked CORS access
yelpController.search = (req, res, next) => {
  // based on Yelp API documentation, tacking the parameter from the url string onto the end of business search endpoint
  // to get businesses near the location provided

  // using .findOne with a callback function
  console.log('beginning of the brand new day');
  Locations.findOne({ location: req.params.location })
    .then((response) => {
      if (response) {
        console.log('document found from database');
        res.locals.results = response;
        return next();
      } else {
        console.log('document not found in db, about to make call to API');
        fetch(
          `https://api.yelp.com/v3/businesses/search?location=${req.params.location}`,
          {
            headers: {
              // this header is required to be able to access API. The API key was provided to us once we registered our app on Yelp's Developer platform
              Authorization:
                yelpAPI,
            },
          }
        ) 
          .then((apiResponse) => apiResponse.json())
          .then((apiResponse) => {
            console.log('we got a response from the api, about to create a document in the collection');
            Locations.create({
              location: req.params.location,
              businesses: apiResponse.businesses,
            })
              .then((data) => {
                console.log('succesfully added new location to db');
                res.locals.results = data;
                return next();
              })
              .catch((err) => {
                console.log('!! we got an error in the create function !!');
                return next({
                  log: '!! error trying to get create location in database !!',
                  status: 400,
                  message: { err: `!! An error occurred: ${err} !!` },
                });
              });
          });
      }
    })
      .catch((err) => {
        console.log('we got an error from the findOne function');
        return next({
          log: '!! error trying to get location from database !!',
          status: 500,
          message: {
            err: '!! An error occurred: error trying to get location from database !!',
          },
        });
      })
  
  /*
  console.log('beginning of the end');
  Locations.findOne({ location: req.params.location }, (err, response) => {
    if (err) {
      console.log('we got an error from the findOne function');
      return next({
        log: '!! error trying to get location from database !!',
        status: 500,
        message: {
          err: '!! An error occurred: error trying to get location from database !!',
        },
      });
    };
    if (response === null) {
      console.log('document not found in db, about to make call to API');
      fetch(
        `https://api.yelp.com/v3/businesses/search?location=${req.params.location}`,
        {
          headers: {
            // this header is required to be able to access API. The API key was provided to us once we registered our app on Yelp's Developer platform
            Authorization:
              'Bearer B70lUl4QZ5CRfWFVtwT4vB2M88lXWsfhrSldiOHXcF2EElvqXyFGTYkAdaYS_rmvsi9pq1V5UIDadSSe1gy1EplkwpR1_fIth9C55CvCPJNguGNq5De8QBVuqCuwYXYx',
          },
        }
      )
        .then((apiResponse) => apiResponse.json())
        .then((apiResponse) => {
          console.log(
            'we got a response from the api, about to create a document in the collection'
          );
          Locations.create({
            location: req.params.location,
            businesses: apiResponse.businesses[0].name,
          })
            .then((data) => {
              console.log('succesfully added new location to db');
              res.locals.results = data;
              return next();
            })
            .catch((err) => {
              console.log('!! we got an error in the create function !!');
              return next({
                log: '!! error trying to get create location in database !!',
                status: 400,
                message: { err: `!! An error occurred: ${err} !!` },
              });
            });
        });
    } else {
      console.log('document found from database');
      res.locals.results = response;
      return next();
    }
  });
  */
};

// const client = yelp.client(process.env.YELP_AUTHORIZATION);
// id
// name
// image_url
// url
// rating
// price

// client
//   .search(searchRequest)
//   .then((response) => {
//     const firstResult = response.jsonBody.businesses;
//     // const firstResult = response.jsonBody;
//     const prettyJson = JSON.stringify(firstResult, null, 4);
//     // console.log(prettyJson);
//     res.locals.data = prettyJson;
//     // console.log('search middleware data', res.locals.data);
//     return next();
//   })
//   .catch((e) => {
//     return next(console.log(e));
//   });

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
