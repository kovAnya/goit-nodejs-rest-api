const { UserModel } = require("../../models");
const { sendMail } = require("../../services");
const { v4: uuidv4 } = require("uuid");

const register = async (req, res) => {
  //get and verify data
  const { password, email } = req.body;

  if (!password || !email) {
    res.status(400);
    throw new Error("Please, provide all required fields");
  }

  //look for dublicate email
  const user = await UserModel.findOne({ email });
  if (user) {
    res.status(409);
    throw new Error("Email in use");
  }

  // if not - hash password and create user

  verificationToken = uuidv4();

  const newUser = await UserModel.create({ ...req.body, verificationToken });
  newUser.setPassword(password);
  newUser.setAvatar(email);
  await newUser.save();

  await sendMail(newUser.email, newUser.verificationToken);

  res.json({
    status: "created",
    code: 201,
    data: {
      email: newUser.email,
      subscription: newUser.subscription,
      avatarUrl: newUser.avatarURL,
    },
  });
};

module.exports = register;
