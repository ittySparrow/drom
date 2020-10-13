import React from "react";
import formatPhoneNumber from "../../../_helpers/format/formatPhoneNumber";
import formatPrice from "../../../_helpers/format/formatPrice";

export default ({ cities, city }) => {
  const { address, phones, price } = cities.filter((c) => c.name === city)[0];

  const Phones = () => {
    const result = [];
    for (let i = 0; i < phones.length; i += 1) {
      if (i > 0) {
        result.push(", ", phones[i]);
      } else result.push(phones[i]);
    }

    return (
      <div>
        {result.map((phone) =>
          phone.length > 2 ? (
            <a className="phone" href={`tel:${phone}`} key={phone}>
              {formatPhoneNumber(phone)}
            </a>
          ) : (
            <span key={Math.random()}>{phone}</span>
          )
        )}
      </div>
    );
  };

  return (
    <div className="address">
      <div>{address}</div>
      <Phones />
      <div>Стоимость услуги {formatPrice(price)}</div>
    </div>
  );
};
