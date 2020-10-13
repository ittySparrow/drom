export default (date) => {
  const newDate = new Date(date).toLocaleDateString("Ru-RU", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return `${newDate[0].toUpperCase()}${newDate.slice(1)}`;
};

// =>> "Суббота, 14 июля"
