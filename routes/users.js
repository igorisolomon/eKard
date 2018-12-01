var express = require('express');
var router = express.Router();

// connect to database
var mongoose = require('mongoose');
mongoose.eKard = global.eKard;
mongoose.connect("mongodb://localhost:27017/ekard", {
  useNewUrlParser: true
});

var db = mongoose.connect;

var userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  position: String,
  department: String,
  company: String,
  logo: String,
  website: String,
  address: String,
  issue_date: String,
  expiry_date: String,
});

var User = mongoose.model("User", userSchema);

/* GET users listing. */
router.get('/', (req, res) => {
  // fetch data from db and display it

});

//insert data
router.post('/insert', function (req, res, next) {
  var userData = new User(req.body);
  
  userData.save()
   .then(item => {
     res.send("User saved to database");
     console.log('saved to db');
   })
   .catch(err => {
     res.status(400).send("Unable to save to database");
   });
});

module.exports = router;