const Tour = require('./../models/tourModel');
const express = require('express');
const APIFeatures = require('./../utils/apiFeatures');

const router = express.Router();

exports.aliasTopTours = (req, res, next) => {
    req.query.limit = '5';
    req.query.sort = '-ratingsAverage,price';
    req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
    next();
};


exports.getAllTours = async (req, res) => {
    try {
        const features = new APIFeatures(Tour.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        //console.log(features);
        const tours = await features.query;

        res.status(200).json({
            status: 'Success',
            data: {
                tours
            }

        });

    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: 'Not able to retrive users'
        });
    }
};

exports.getSinglePost = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        res.status(200).json({
            status: 'Success',
            tour
        });
    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: 'Not able to find tour'
        });
    }
};

exports.createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);
        res.status(200).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: 'Invalid data sent'
        });
    }
};

exports.updateTour = async (req, res) => {
    try {
        console.log(req.params.id);
        console.log(req.body);
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'sucess',
            data: {
                tour
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: 'Invalid data sent'
        });
    }
};

exports.deleteTour = async (req, res) => {

    try {
        const tour = await Tour.findOneAndDelete(req.params.id);
        res.status(200).json({
            status: 'deleted',

        })

    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: 'Invalid data sent'
        });

    }
};
exports.getTourStats = async (req, res) => {
    try {
        const stats = await Tour.aggregate([{
                $match: {
                    ratingsAverage: {
                        $gte: 4.5
                    }
                }
            },
            {
                $group: {
                    _id: {
                        $toUpper: '$difficulty'
                    },
                    numTours: {
                        $sum: 1
                    },
                    numRatings: {
                        $sum: '$ratingsQuantity'
                    },
                    avgRating: {
                        $avg: '$ratingsAverage'
                    },
                    avgPrice: {
                        $avg: '$price'
                    },
                    minPrice: {
                        $min: '$price'
                    },
                    maxPrice: {
                        $max: '$price'
                    }
                }
            },
            {
                $sort: {
                    avgPrice: 1
                }
            }
            // {
            //   $match: { _id: { $ne: 'EASY' } }
            // }
        ]);


        res.status(200).json({
            status: 'sucess',
            data: {
                stats
            }
        });


    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: 'Invalid data sent'
        });
    }

}