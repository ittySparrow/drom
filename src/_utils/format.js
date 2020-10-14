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

export const formatPrice = (price) => {
  new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(price);
};
//12000 =>> 12.000,00 P

export const formatTime = (fullTime) => {
  const firstHour = new Date(fullTime).toLocaleTimeString(["ru-RU"], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${firstHour} - ${Number(firstHour.slice(0, 2)) + 1}:00`;
};
// =>> "10:00 - 11:00"
