const sgMail = require("@sendgrid/mail");
  

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "avudaiappan.cse@gmail.com",
    subject: "Thanks for Joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendCancelEmail = (email, name) => {
    sgMail.send({
      to: email,
      from: "avudaiappan.cse@gmail.com",
      subject: "Sorry for the inconvenience",
      text: `We will miss you, ${name}. Hope we will get you on board!. Sorry for the inconvenience happened to you!`
    });
  };

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
};
