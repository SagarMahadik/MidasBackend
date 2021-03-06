const express = require('express');
const catchAsync = require('./../utils/catchAsync');
const User = require('./../models/userModel');


exports.getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();
  
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users
      }
    });
  });

exports.createUser = (req, res) => {
    res.status(500).json({
        status: 'Error',
        message: "Route yet not defined"
    })
}

exports.updateUser = (req, res) => {
    res.status(500).json({
        status: 'Error',
        message: "Route yet not defined"
    })
}
exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: 'Error',
        message: "Route yet not defined"
    })
}

exports.getUser = (req, res) => {
    res.status(500).json({
        status: 'Error',
        message: "Route yet not defined"
    })
}