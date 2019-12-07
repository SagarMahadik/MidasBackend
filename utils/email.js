const nodemailer = require('nodemailer');

const sendEmail = options => {
    // Create transporter
    const transporter = nodemailer.createTransport({
        service : 'Gmail',
        auth :{
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
        
    })

    // DEfine email options


    // Send the emil with node mailer


}