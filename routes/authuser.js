const express = require('express');

const {
CreateUser,
loginUser
} = require('../services/AuthUser');

const router = express.Router();


router.post( "/create",CreateUser) ;
router.post( "/login",loginUser) ;




module.exports = router;
