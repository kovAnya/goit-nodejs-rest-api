const {
  getContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateFavorite,
} = require("./contacts");

const {
  register,
  login,
  logout,
  currentUser,
  subscription,
  avatars,
  verificationRequest,
} = require("./users");

module.exports = {
  getContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateFavorite,
  register,
  login,
  logout,
  currentUser,
  subscription,
  avatars,
  verificationRequest,
};
