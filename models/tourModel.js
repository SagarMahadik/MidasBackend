const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Tour must have a name'],
        unique: true
    },
    ratingsAverage: {
        type: Number,
        default: 4.5
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    duration: {
        type: Number,
        required: [true, 'Tour must have a duration']
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'Tour must have a group size']
    },
    difficulty: {
        type: String,
        required: [true, 'Tour should have a diificulty']
    },
    price: {
        type: Number,
        required: [true, 'Tour must have a price']
    },
    priceDiscount: {
        type: Number
    },
    summary: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Tour must have a description']
    },
    imageCover: {
        type: String,
        required: [true, 'Tour must have a cover image']
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    startDates: [Date]
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;