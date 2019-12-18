const express = require('express');
const router = express.Router();

router.get('/', (rq, res) => res.render('welcome'));

module.exports = router;