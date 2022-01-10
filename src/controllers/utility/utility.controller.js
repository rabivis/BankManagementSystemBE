import { countries, states } from '../../models';
import { successResponse, errorResponse } from '../../helpers';

export const allCountries = async (req, res) => {
    try {
      const countriesList = await countries.findAll();
      return successResponse(req, res, countriesList );
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
  };

  export const findStateByCountry = async (req, res) => {
    try {
      const country_code = req.params.country_code;
      const stateList = await states.findAll({where:{country_code}});
      return successResponse(req, res, stateList );
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
  };
