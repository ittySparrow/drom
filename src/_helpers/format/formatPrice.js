export default (price) =>
  new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(price);

//12000 =>> 12.000,00 P
