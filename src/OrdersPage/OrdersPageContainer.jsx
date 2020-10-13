import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { requestOrders } from "../_reducers/ordersPage";
import OrdersPage from "./OrdersPage";

const OrdersPageContainer = ({ orders, requestOrders }) => {
  useEffect(() => {
    requestOrders();
  }, []);
  return <OrdersPage orders={orders} />;
};

const mapStateToProps = ({ ordersPage }) => {
  return {
    orders: ordersPage.orders,
  };
};

const mapDispatchToProps = {
  requestOrders,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersPageContainer);
