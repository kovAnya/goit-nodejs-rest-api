const { UserModel } = require("../../models");

const verificationRequest = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await UserModel.findOne({ verificationToken });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // user.verify = true;
  // user.verificationToken = null;
  // await user.save();

  await UserModel.updateOne(
    { verificationToken },
    { verificationToken: null, verify: true }
  );

  res.json({
    status: "OK",
    code: 200,
    message: "Verification successful",
  });
};

module.exports = verificationRequest;
