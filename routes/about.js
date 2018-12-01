var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    res.render('about', {
        about: 'About Us Page'
    });
});
router.get('/:id', (req, res) => {
    res.send(req.params);
})
module.exports = router;