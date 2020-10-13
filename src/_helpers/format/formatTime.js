export default (fullTime) => {
  const firstHour = new Date(fullTime).toLocaleTimeString(["ru-RU"], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${firstHour} - ${Number(firstHour.slice(0, 2)) + 1}:00`;
};

// =>> "10:00 - 11:00"
