const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (email, verificationToken) => {
  const msg = {
    to: email,
    from: "anna_fson55@outlook.com", // Change to your verified sender
    subject: "Email verification",
    text: `Please, follow the link below to verify your email. http://localhost:3000/api/users/verify/${verificationToken}">Підтвердіть реєстрацію`,
    html: `<p>Please, follow the link below to verify your email</p><p><a href="http://localhost:3000/api/users/verify/${verificationToken}">Email verification link</a></p>`,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = sendMail;
