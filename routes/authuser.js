const express = require('express');

const {
CreateUser,
loginUser
} = require('../services/AuthUser');

const {
    getUser,
    updateUser,
    getallUser
    } = require('../services/user');

const router = express.Router();


router.get( "/allUser",getallUser) ;
router.patch( "/update/:id",updateUser) ;

router.post( "/create",CreateUser) ;

router.post( "/login",loginUser) ;




module.exports = router;
