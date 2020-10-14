import _ from "lodash";
import api from "../_api/api";

const REQUEST_ORDERS_SUCCESS = "ordersPage/REQUEST_ORDERS_SUCCESS";

const requestOrdersSuccess = (orders) => ({
  type: REQUEST_ORDERS_SUCCESS,
  payload: { orders },
});

export const requestOrders = () => async (dispatch) => {
  const orders = api.requestOrders();
  dispatch(requestOrdersSuccess(orders));
};

export const addOrder = (order) => async (dispatch) => {
  const orders = api.requestOrders();
  localStorage.setItem(
    "orders",
    JSON.stringify([...orders, { ...order, id: _.uniqueId("order_") }])
  );
  dispatch(requestOrders());
};

export const deleteOrder = (orderId) => async (dispatch) => {
  const orders = api.requestOrders();
  const filtered = orders.filter(({ id }) => id !== orderId);
  localStorage.clear();
  localStorage.setItem("orders", JSON.stringify([...filtered]));
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
