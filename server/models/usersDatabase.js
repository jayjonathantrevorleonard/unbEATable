const mongoose = require('mongoose');
require('dotenv').config(); // loads the .env file into process.env variable

const MONGO_URI = "mongodb+srv://danger:noods@cluster0.g4vdp.mongodb.net/usersdb?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'species' collection
const usersSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  lastResult: {},
  favourites: [],
  pastRestaurants: []
});

// creats a model for the 'users' collection that will be part of the export
const Users = mongoose.model('users', usersSchema);


// TODO: create a schema for 'yelp' and use it to create the model for it below



// exports all the models in an object to be used in the controller
module.exports = {
  Users,
  // Yelp
};