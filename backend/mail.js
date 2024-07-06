const nodemailer = require('nodemailer');

const sendEmail = async (recipientEmail, subject, text) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port:587,
    auth: {
      user: 'johnnie.kertzmann@ethereal.email',
      pass: 'QXTaMXgKcYvHEsrXfQ',
    },
  });

  let mailOptions = {
    from: 'easy form for you <johnnie.kertzmann@ethereal.email>',
    to: recipientEmail,
    subject:subject,
    text:text,
  };

  let info = await transporter.sendMail(mailOptions);
  console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;
