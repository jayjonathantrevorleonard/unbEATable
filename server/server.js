const path = require('path');
const express = require('express');
const { AppContainer } = require('react-hot-loader');
const cors = require('cors');
const userController = require('./controllers/userController');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

// fetch(
//   `https://api.yelp.com/v3/businesses/search?location=Culver City`,
//   {
//     headers: {
//       'Content-Type': 'application/json',
//       // "Access-Control-Allow-Origin": "*",
//       Authorization:
//         'Bearer B70lUl4QZ5CRfWFVtwT4vB2M88lXWsfhrSldiOHXcF2EElvqXyFGTYkAdaYS_rmvsi9pq1V5UIDadSSe1gy1EplkwpR1_fIth9C55CvCPJNguGNq5De8QBVuqCuwYXYx',
//     },
//     // "mode": "no-cors",
//   }
//   // params: { location: city }
//   // { mode: "no-cors" }
// )
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// enable all CORS requests
app.use(cors());

const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client')));

// serve index.html to localhost 3000 when in production mode
if (process.env.NODE_ENV === 'production') {
  app.use('/public', express.static(path.join(__dirname, '../public')));

  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
  });
}

app.post('/login', userController.getLogin, (req, res) => {
  res.status(200).json(res.locals.loginStatus);
});

app.use('/api', apiRouter);

// app.post('/api/login')  --> Do we want to put all routes here or use a route handler?

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
