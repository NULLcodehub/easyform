const nodemailer = require('nodemailer');
require('dotenv').config()

const formatDataToString=(formData)=>{
  // console.log(formData)
  return Object.entries(formData).map(([key,value])=>`${key}: ${value}`).join('\n')
}

const sendEmail = async (recipientEmail,formData) => {
  console.log("mail.js",formData)
  let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port:587,
    secure:false,
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: "009988776655iissaa??@@;",
    },
  });

  // console.log(formatDataToString(formData))
  let mailOptions = {
    from: 'easy form for you <souravish47@outlook.com>',
    to: recipientEmail,
    subject:'easy form',
    text:`${formatDataToString(formData)}`
  };

  let info = await transporter.sendMail(mailOptions);
  console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;
