import { NextResponse } from 'next/server';

const nodemailer = require('nodemailer');

var Mailgen = require('mailgen');
var path = require('path')







export async function POST(request) {
  const body = await request.json();


  var mailGenerator = new Mailgen({
    theme: {
      path: path.resolve('public/assets/theme.html'),
      plaintextPath: path.resolve('public/assets/theme.txt'),
    },
    product: {
        // Appears in header & footer of e-mails
        name: 'Scan A',
        link: body.page
        // Optional logo
        // logo: 'https://mailgen.js/img/logo.png'
    }
  });
  var email = {
    body: {
      
        name: body.name,
        intro: 'Welcome to Scan A! We\'re very excited to have you on board.',
        dictionary: {
          Company_Code: body.code,
          User_Code: body.user_code
      },
        action: {
            instructions: 'To get started with Scan A, please click here:',
            button: {
                color: '#22BC66', // Optional action button color
                text: 'Login To Your Account',
                link: body.page
            }
        },
        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
};

var emailBody = mailGenerator.generate(email)

  const message = {
    from: "sizomhlongo52@gmail.com",
    to: body.user,
    subject: "SCAN A",
    html: emailBody,
    headers: {
      'X-Entity-Ref-ID': "newmail", // Set the X-Entity-Ref-ID header
    },

  };
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'portfoliowebs@gmail.com',
      pass: 'tiwutwxzhamuaapg'
    }
  });

 transporter.sendMail(message, function (err, info) {
    return NextResponse.json(info)
 });

 return NextResponse.json(null)
}