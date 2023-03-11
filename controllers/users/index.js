const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const currentUser = require("./currentUser");
const subscription = require("./subscription");
const avatars = require("./avatars");
const verificationRequest = require("./verificationRequest");

module.exports = {
  register,
  login,
  logout,
  currentUser,
  subscription,
  avatars,
  verificationRequest,
};
