const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

router.get('/', function (req,res){
    res.render('index',{user:req.user});
})
router.get('/login', function (req,res){
    res.render('login');
})
router.get('/register', function (req,res){
    res.render('register');
})



module.exports = router;