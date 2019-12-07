const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');

exports.getOne = Model => catchAsync(async (req,res,next) => {
    
    let query= Model.findById(req.params.id);

    const doc = await query;

    if(!doc){
        return next(new AppError("No document found with given ID", 404));
    }

    res.status(200).json({
        status: "Success",
        data : {
            data : doc
        }
    });
});