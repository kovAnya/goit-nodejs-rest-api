const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().min(2).max(40).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
  phone: Joi.string().min(2).max(40).required(),
  favorite: Joi.boolean(),
});

const contactsFavSchema = Joi.object({
  favorite: Joi.bool().required(),
});

const addValidation = (req, res, next) => {
  const { error } = contactSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      code: 400,
      message: error.message,
    });
  }

  next();
};

const addFavValidation = (req, res, next) => {
  const { error } = contactsFavSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      code: 400,
      message: error.message,
    });
  }

  next();
};

module.exports = { addValidation, addFavValidation };
