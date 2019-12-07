const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const MidasUser = require('../models/midasUserModel');
const { promisify } = require('util');

const signToken = (id,role) => {
    return jwt.sign({id, role}, process.env.JWT_SECRET, {
        expiresIn : process.env.JWT_EXPIRES_IN
    });
};

exports.register = catchAsync(async (req,res,next) => {
    const newMidasUSer = await MidasUser.create({
        name : req.body.name,
        email : req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
        passwordConfirm : req.body.passwordConfirm,
        role : req.body.role
    });

    token = signToken(newMidasUSer._id, newMidasUSer.role);

    res.status(201).json({
        status: 'Success',
        token,
        data : {
            user: newMidasUSer
        }
    })
});

exports.login = catchAsync(async (req,res,next) => {
    const {email, password} = req.body;

    if(!email || !password){
        return next(new AppError('Please enter valid email or password', 401));
    }

    const user = await MidasUser.findOne({email}).select('+password');

    if(!user || !(await user.correctPassword(password,user.password))){
        return next(new AppError('Enter valid email or password', 401));
    }

    const token = signToken(user._id, user.role);

    res.status(200).json({
        status:"Success",
        token
    });
});

exports.protect = catchAsync(async (req,res,next) => {
    let token;
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ){
        token = req.headers.authorization.split(' ')[1];
    }

    if(!token){
        return next(
            new AppError('You are not logged in! Please log in to the application', 401)
        );       
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    
    const currentUser = await MidasUser.findById(decoded.id);

    if(!currentUser){
        return next(
            new AppError(
                'The patient belonging to this token does no longer exist',401
            )
        );
    }
    req.user = currentUser;
    
    next();       
    
});

exports.restrictTo = (...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.role)){
            return next(
                new AppError('You do not have permission to perform this action',403));
        }
        next();
    }
}
