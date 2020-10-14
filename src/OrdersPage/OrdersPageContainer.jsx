import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { requestOrders, deleteOrder } from "../_reducers/ordersPage";
import OrdersPage from "./OrdersPage";

const OrdersPageContainer = ({ orders, requestOrders, deleteOrder }) => {
  useEffect(() => {
    requestOrders();
  }, []);

  const handleClick = (id) => {
    deleteOrder(id);
  };

  return <OrdersPage orders={orders} handleClick={handleClick} />;
};

const mapStateToProps = ({ ordersPage }) => {
  return {
    orders: ordersPage.orders,
  };
};

const mapDispatchToProps = {
  requestOrders,
  deleteOrder,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersPageContainer);
