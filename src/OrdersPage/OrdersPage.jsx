import React from "react";
import _ from "lodash";
import "./OrdersPage.css";

export default ({ orders }) => {
  if (!orders) {
    return <>There were no orders yet</>;
  }
  return (
    <table>
      <thead>
        <tr>
          {_.keys(orders[0]).map((name) => (
            <th key={Math.floor(Math.random() * 1000)}>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={Math.floor(Math.random() * 1000)}>
            {_.values(order).map((value) => (
              <td key={Math.floor(Math.random() * 1000)}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
