const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const midasUserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"Please tell us your name"] 
    },
    email : {
        type : String,
        required : [true, "Pelase enter your email"],
        lowercase : true,
        validate : [validator.isEmail, "Please provide valid email address"]
    },
    mobile : {
        type : Number,
        required : true
        },
    password : {
        type : String,
        required : [true, "Please provide a password"],
        minlength : 8,
        select : false
    },
    passwordConfirm : {
        type : String,
        required : [true, "Please confirm a password"],
        validate : {
            validator : function(el) {
                return el === this.password;
            },
            message : "Passwords do not match"
        }
    },
    role : {
        type : String,
        enum : ['admin', 'patient', 'doctor'],
        default : 'patient'
    }
})

// Save hashed password

midasUserSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

    this.passwordConfirm = undefined;

    next();
});


midasUserSchema.methods.correctPassword = async function(
    candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword,userPassword)
}


const MidasUser = mongoose.model('MidasUser',midasUserSchema);

module.exports = MidasUser;