const express = require('express');
const midasAuthController = require('../controllers/midasAuthController');

const router = express.Router();

router.post('/register', midasAuthController.register);
router.post('/login', midasAuthController.login);

module.exports = router;