const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name:{
        type : String,
        required :[true, 'Please tell us your name']
    },
    mobile : {
        type : Number,
        required : [true, 'Please enter valid mobile number']
    },
    gender: {
        type : String,
        required : [true, 'Pelase enter valid gender']
    },
    age : {
        type : Number,
        required : [true, "Please enter valid age"]
    },
    painParameter1 : {
        type : Number,
        required : true
    },
    painParameter2 : {
        type : Number,
        required : true
    },
    painParameter3 : {
        type : Number,
        required : true
    },
    painParameter4 : {
        type : Number,
        required : true
    },
    painParameter5 : {
        type : Number,
        required : false
    },
    symptomParameter1 : {
        type : Number,
        required: true
    },
    symptomParameter2 : {
        type : Number,
        required : true
    },
    symptomParameter3 : {
        type : Number,
        required : true
    },
    symptomParameter4 : {
        type : Number,
        required : true
    },symptomParameter5 : {
        type : Number,
        required : false
    },
    diagnosis :{
        type :String
    },
    attendedByDoctor : {
        type : String
    },
    prescription : [
        {
            medication :{
                type : String
            },
            morning : {
                type : String
            },
            afternoon : {
                type: Number
            },
            evening : {
                type : Number
            },
            night : {
                type : Number
            },
            beforeAfterFood : {
                type : String
            },
            DurationOfCourse : {
                type: Number
            },
            courseBeginDate : {
                type : Date
            },
            courseEndDate : {
                type : Date
            }
        }
    ]    
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;