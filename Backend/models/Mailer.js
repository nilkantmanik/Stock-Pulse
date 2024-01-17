// mailSender.js

const nodemailer = require("nodemailer");

function SendMail(givenemail) {
  const transporter = nodemailer.createTransport({
    // host : process.env.SMTP_HOST,
    // port : process.env.SMTP_PORT,
    host: "smtp.gmail.com",
    port: 587,
    secure:false,
    // service : process.env.SMTP_SERVICE,
    auth:{
        user:"nilkantmanik@gmail.com",
        pass:"czqi jtkx zami qvpn",
    },
});

  const mailOptions = {
    from: "vspatil8123@gmail.com",
    to: givenemail,
    subject: "WELCOME TO STOCK WORLD",
    text: `YOU ARE SUCCESSFULLY SUBSCRIBED TO STOCK MARKET.
    "When it comes to investing and stock trading, news and reaction time can make or break an investor. This is the best site for up-to-date financial news."
    THANK YOU FOR SUBSCRIBING.
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = { SendMail };
