const Joi = require('joi');

export const getOtherUserProfile = {
  body: {
    userId: Joi.number().required(),
  },
};

export const changePassword = {
  body: {
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().required(),
  },
};

export const register = {
  body: {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required(),
    userName: Joi.string().required(),
    address: Joi.string().required(),
    country: Joi.string().required(),
    state: Joi.string().required(),
    contactNo: Joi.string().required(),
    dateOfBirth: Joi.string().required(),
    accountType: Joi.string().required(), 
    branchName: Joi.string().required(), 
    initialDepositAmount: Joi.string().required(),
    identificationProofType: Joi.string().required(),
    identificationDocumentNo: Joi.string().required()
  },
};

export const login = {
  body: {
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required(),
  },
};
