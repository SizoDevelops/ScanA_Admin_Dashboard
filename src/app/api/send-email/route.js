import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");
import { Deta } from "deta";
const deta = Deta(process.env.DETA_PROJECT_KEY);
var path = require("path");
var Mailgen = require("mailgen");
import * as bcrypt from "bcrypt";
const base = deta.Base("schools_db");
const crypto = require("crypto");

let userName = "";
const token = crypto.randomBytes(20).toString("hex");
export async function POST(request) {
  const body = await request.json();

  var mailGenerator = new Mailgen({
    theme: {
      path: path.resolve("public/assets/theme.html"),
      plaintextPath: path.resolve("public/assets/theme.txt"),
    },
    product: {
      // Appears in header & footer of e-mails
      name: "Scan A",
      link: "https://scanadash.netlify.app",
      // Optional logo
      // logo: 'https://mailgen.js/img/logo.png'
    },
  });
  var email = {
    body: {
      name: userName,
      intro:
        "We received a request to reset your password. If you did not make this request, please disregard this email. \n",
      action: {
        instructions: "To reset your password, click on the following link:",
        button: {
          color: "#03a4ff", // Optional action button color
          text: "Reset Your Password",
          link: `${process.env.NEXTAUTH_URL}/forgot-password?reset-password=${token}`,
        },
      },
      outro: `This link is valid for 1 hour. After that, you will need to request another password reset.`,
    },
  };

  var emailBody = mailGenerator.generate(email);

  const message = {
    from: `ScanA Team <${process.env.EMAIL_FROM}>`,
    to: body.user,
    subject: "ScanA Password Reset",
    html: emailBody,
    headers: {
      "X-Entity-Ref-ID": "newmail", // Set the X-Entity-Ref-ID header
    },
  };
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  // transporter.verify(function (error, success) {
  //   if (error) {
  //    console.log(error)
  //   } else {
  //     console.log("Success")
  //   }
  // });;
  async function sendEmail() {
    try {
      const data = await base.fetch({
        school_email: body.user,
        school_code: body.code,
      });

      if (data.count > 0 && data.items[0].reset_tokens) {
        await base.update(
          {
            reset_tokens: {
              token: token,
              expires: Date.now() + 60 * 60 * 1000,
              used: false,
            },
          },
          data.items[0].school_code
        );

        await transporter.sendMail(message);
        return NextResponse.json("Email Sent Successfully");
      } else {
        return NextResponse.json("Invalid Request");
      }
    } catch (error) {
      return NextResponse.json(error.message);
    }
  }
  let value = await sendEmail();

  return value;
}
