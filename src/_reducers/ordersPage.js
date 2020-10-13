const REQUEST_ORDERS_SUCCESS = "ordersPage/REQUEST_ORDERS_SUCCESS";

const requestOrdersSuccess = (orders) => ({
  type: REQUEST_ORDERS_SUCCESS,
  payload: { orders },
});

export const requestOrders = () => async (dispatch) => {
  const orders = JSON.parse(localStorage.getItem("orders"));
  dispatch(requestOrdersSuccess(orders));
};

export const addOrder = (order) => async (dispatch) => {
  await setTimeout(() => {}, 3000);
  const data = JSON.parse(localStorage.getItem("orders")) || [];
  localStorage.setItem("orders", JSON.stringify([...data, order]));
  dispatch(requestOrders());
};

const initialState = {
  orders: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ORDERS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
