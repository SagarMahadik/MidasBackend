const express = require('express');
const midasPatientController = require('../controllers/midasPatientController');
const midasAuthController = require('./../controllers/midasAuthController');
const router =  express.Router();

router
    .route('/')
    .get(midasAuthController.protect, midasPatientController.getAllPatientsProfiles)
    .post(midasPatientController.createPatientProfile);

router
.route('/:id')
.get(
    midasAuthController.protect,
    midasAuthController.restrictTo('doctor','admin'),
    midasPatientController.getPatient)    

module.exports = router;