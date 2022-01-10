import express from 'express';
import validate from 'express-validation';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';
import * as utilityController from '../controllers/utility/utility.controller';
const router = express.Router();

//= ===============================
// Public routes
//= ===============================

router.post(
  '/login',
  validate(userValidator.login),
  userController.login,
);
router.post(
  '/register',
  validate(userValidator.register),
  userController.register,
);
router.get(
  '/get_countries',
  utilityController.allCountries
);
router.get(
  '/get_states/:country_code',
  utilityController.findStateByCountry
);


module.exports = router;
