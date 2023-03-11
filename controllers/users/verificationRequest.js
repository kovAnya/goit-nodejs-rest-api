const { UserModel } = require("../../models");

const verificationRequest = async (req, res) => {
  const token = req.params.verificationToken;
  const user = await UserModel.find({ token });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  user.verify = true;
  user.verificationToken = null;
  await user.save();

  res.json({
    status: "OK",
    code: 200,
    message: "Verification successful",
  });
};

module.exports = verificationRequest;
