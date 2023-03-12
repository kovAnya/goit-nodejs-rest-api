const { UserModel } = require("../../models");
const { sendMail } = require("../../services");

const resendEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400);
    throw new Error("Email is required");
  }

  const user = await UserModel.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (user.verify === true) {
    return res.json({
      status: "Bad Request",
      code: 400,
      message: "Verification has already been passed",
    });
  }

  await sendMail(user.email, user.verificationToken);
  res.json({
    status: "OK",
    code: 200,
    message: "Verification email sent",
  });
};

module.exports = resendEmail;
