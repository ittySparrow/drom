export const formatDate = (date) => {
  const newDate = new Date(date).toLocaleDateString("Ru-RU", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return `${newDate[0].toUpperCase()}${newDate.slice(1)}`;
};
// =>> "Суббота, 14 июля"

export const formatPhoneNumber = (n) =>
  `+7 ${n.slice(1, 4)} ${n.slice(4, 7)}-${n.slice(7, 9)}-${n.slice(9, 11)}`;

// 79991234567 =>> "+7 999 123-45-67"

export const formatPrice = (price) =>
  new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(price);
//12000 =>> 12.000,00 P

export const formatTime = (fullTime) => {
  const setCorrectTimeFormat = (time) => (time > 9 ? time : `0${time}`);

  const date = new Date(fullTime);
  const startHour = setCorrectTimeFormat(date.getHours());
  const endHour = Number(startHour) + 1;
  const minutes = setCorrectTimeFormat(date.getMinutes());

  return `${startHour}:${minutes} - ${endHour}:${minutes}`;
};
// =>> "10:00 - 11:00"
