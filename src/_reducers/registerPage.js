import api from "../_api/api";
import getAvailableDates from "../_helpers/getAvailableDates";

const REQUEST_CITIES_SUCCESS = "api/REQUEST_CITIES_SUCCESS";
const REQUEST_DATES_SUCCESS = "api/REQUEST_DATES_SUCCESS";

const requestCitiesSuccess = (cities) => ({
  type: REQUEST_CITIES_SUCCESS,
  payload: cities,
});

const requestDatesSuccess = (dates) => ({
  type: REQUEST_DATES_SUCCESS,
  payload: { dates },
});

export const requestCities = () => async (dispatch) => {
  const cities = await api.getCities();
  dispatch(requestCitiesSuccess(cities));
};

export const requestDates = (cityName, cities) => async (dispatch) => {
  const cityId = cities
    .filter(({ name }) => cityName === name)
    .map(({ id }) => id)
    .toString();
  const dates = await api.getDatesById(cityId);
  const availableDates = getAvailableDates(dates);
  dispatch(requestDatesSuccess(availableDates));
};

const initialState = {
  cities: null,
  dates: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CITIES_SUCCESS:
    case REQUEST_DATES_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
