const express = require('express');
const midasAuthController = require('../controllers/midasAuthController');
const MidasUser = require('../models/midasUserModel')

const router = express.Router();

router.post('/register', midasAuthController.register);
router.post('/login', midasAuthController.login);
router.get('/auth',
            midasAuthController.protect,
            midasAuthController.authenticate 
 )

module.exports = router;