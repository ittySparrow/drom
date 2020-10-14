import React from "react";
import _ from "lodash";
import "./OrdersPage.css";

const values = {
  city: "Город",
  date: "Дата",
  time: "Время",
  tel: "Телефон",
  name: "Имя",
  id: "",
};

export default ({ orders, handleClick }) => {
  return (
    <div className="orders-page-wrapper">
      {!orders || _.isEmpty(orders) ? (
        <div className="no-orders">No orders</div>
      ) : (
        <table>
          <thead>
            <tr>
              {_.keys(orders[0]).map((name) => (
                <th key={_.uniqueId()}>{values[name]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map(({ city, date, time, tel, name, id }) => (
              <tr key={_.uniqueId()}>
                <td key={_.uniqueId()}>{city}</td>
                <td key={_.uniqueId()}>{date}</td>
                <td key={_.uniqueId()}>{time}</td>
                <td key={_.uniqueId()}>{tel}</td>
                <td key={_.uniqueId()}>{name}</td>
                <td
                  className="delete-order"
                  onClick={() => handleClick(id)}
                  key={_.uniqueId()}
                >
                  X
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
