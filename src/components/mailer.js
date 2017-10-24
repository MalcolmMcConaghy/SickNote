'use strict';
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'hotmail',
    port: 587,
    auth: {
        user: '',
        pass: ''
    }
})