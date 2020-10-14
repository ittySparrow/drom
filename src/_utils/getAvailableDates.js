import _ from "lodash";

export default (dates) => {
  const freeDateAndTime = [];
  for (let key of _.keys(dates)) {
    const date = dates[key];
    for (let time of _.keys(date)) {
      if (!date[time].is_not_free) {
        freeDateAndTime[key] = {
          ...freeDateAndTime[key],
          [time]: { ...date[time] },
        };
      }
    }
  }
  return freeDateAndTime;
};
