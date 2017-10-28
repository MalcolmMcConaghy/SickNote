const express = require('express');
const cors = require('cors');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/sendmail', cors(corsOptions), function (req, res, next) {
    //Using nodemailer node package to send email
    'use strict';
    const nodemailer = require('nodemailer');


    //initialise transporter with settings for mail server
    let transporter = nodemailer.createTransport({
        service: 'hotmail',
        port: 587,
        auth: {
            user: 'mcconaghym@live.co.uk',
            pass: 'Malkyway969'
        }
    });


    //Fill contents of email from form
    let message = {
        to: req.body.emailSend,
        from: req.body.senderName + " <" + req.body.senderEmail + ">",
        subject: req.body.senderSubject,
        text: req.body.message
    };

    //Send the mail
    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log('Error occurred');
            console.log(error.message);
            return process.exit(1);
        }

        console.log('Message sent successfully!');
        console.log(nodemailer.getTestMessageUrl(info));

        // only needed when using pooled connections
        transporter.close();
    });
})

app.listen(3001, function () {
    console.log('Example app listening on port 3000!')
})