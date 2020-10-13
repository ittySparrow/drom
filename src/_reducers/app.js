import { requestCities } from "./registerPage";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => {
  return (dispatch) => {
    const promise = dispatch(requestCities());
    Promise.all([promise]).then(() => dispatch(initializedSuccess()));
  };
};

const initialState = {
  initialized: false,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export default app;
