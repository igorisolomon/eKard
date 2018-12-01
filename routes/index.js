var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express', numbers: [1,2,3,4,5,6] });
});

module.exports = router;
