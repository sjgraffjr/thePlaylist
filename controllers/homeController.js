const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.route('/')
	  .get((req, res)=>{
	  	res.render('index', {});
	  });


module.exports = router;