import React from "react";
import { useFormContext } from "react-hook-form";
import { formatPhoneNumber, formatPrice } from "../../../_utils/format";

const Phones = ({ phones }) => {
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

export default ({ cities }) => {
  const { getValues } = useFormContext();

  if (!getValues("city")) {
    return null;
  }

  const cityInfo = cities.filter((c) => c.name === getValues("city"))[0];

  return (
    <div className="address">
      <div>{cityInfo.address}</div>
      <Phones phones={cityInfo.phones} />
      <div>Стоимость услуги {formatPrice(cityInfo.price)}</div>
    </div>
  );
};
