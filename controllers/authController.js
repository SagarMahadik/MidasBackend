const {promisify} = require('util');
const jwt = require('jsonwebtoken')
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');


const signToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

exports.signup = catchAsync(async (req,res,next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        passwordChangedAt: req.body.passwordChangedAt,
        role: req.body.role
    });

    const token = signToken(newUser._id)

    res.status(201).json({
        status:'Success',
        token,
        data : {
            user : newUser
        }
    })
});

exports.login = catchAsync (async (req,res, next) => {
    const {email, password} = req.body;

    if(!email|| !password){
        return next(new AppError('Please provide an email and password',400));
    }

    const user = await User.findOne({email}).select('+password');

    if(!user || !(await user.correctPassword(password,user.password))){
        return next(new AppError('Incorrect Email or password',401))
    }

    const token = signToken(user._id);
    res.status(200).json({
        status: 'success',
        token
    })
});

exports.protect = catchAsync(async(req,res,next)=>{
    //console.log("I am in protect")
    let token;
    // 1. Getting token and check if its there
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
      ) {
        token = req.headers.authorization.split(' ')[1];
      }
    if(!token){
        return next(new AppError("You are not logged in",401));
    }

    // 2. Verification the token
    const decoded= await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    

    // 3. Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if(!currentUser){
        return next(new AppError("The user does not exists",401));
    }

    // 4. User changed the password after JWT was issued
    if(currentUser.changedPasswordAfter(decoded.iat)){
        return next(
            new AppError("Recently changed the password please login again",401))
    }

    // Grant access to protect the route

    req.user = currentUser;
    next();
});


exports.restrictTo = (...roles) => {
    return(req,res,next) => {
        // roles is an array
        if(!roles.includes(req.user.role)){
            return next( new AppError('You do not have permission to perform this action',403))
        };
        next();
    }
}

exports.forgotPassword = catchAsync( async (req, res, next) => {
    
    const user = await User.findOne({email :req.body.email});
    if(!user){
        return next(new AppError('There is no user with that email', 404));
    }

    // Get user based on posted email

    const resetToken = user.createPasswordResetToken();
    await user.save({validateBeforeSave : false});

    




    // Generate the random password


    // Send it to user's email


})



exports.resetPassword = (req, res, next) => {}




