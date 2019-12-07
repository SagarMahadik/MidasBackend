const {promisify} = require('util');
const Patient = require('./../models/midasPatientModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./midasHandleFactory');

exports.getAllPatientsProfiles = catchAsync(async (req,res,next) => {
    
    const patients = await Patient.find();

    res.status(200).json({
        status:"Success",
        results : patients.length,
        data :{
            patients
        }
    });
});

exports.createPatientProfile = catchAsync(async (req,res,next) => {
    const {
        name,
        mobile,
        gender,
        age,
        painParameter1,
        painParameter2,
        painParameter3,
        painParameter4,
        painParameter5,
        symptomParameter1,
        symptomParameter2,
        symptomParameter3,
        symptomParameter4,
        symptomParameter5,
    } = req.body;

    const newPatient = await Patient.create({
        name,
        mobile,
        gender,
        age,
        painParameter1,
        painParameter2,
        painParameter3,
        painParameter4,
        painParameter5,
        symptomParameter1,
        symptomParameter2,
        symptomParameter3,
        symptomParameter4,
        symptomParameter5,
    });
    res.status(201).json({
        status:"Suucess",
        message: "Patient record added"
    });
});


exports.getPatient = factory.getOne(Patient);


