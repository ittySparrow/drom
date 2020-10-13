import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.mocky.io/v2/",
});

export default {
  getCities() {
    return instance
      .get("5b34c0d82f00007400376066?mocky-delay=700ms")
      .then((responce) => responce.data);
  },

  // {
  //     "cities": [
  //         {
  //             "id": "5b3480ee3200009f28d1e421",
  //             "name": "Владивосток",
  //             "address": "ул. Первая 1, ст. 3",
  //             "phones": ["79991233232", "79996667676"],
  //             "price": 12000
  //         },
  //         ...
  //     ]
  // }

  getDatesById(id) {
    return instance
      .get(`${id}?mocky-delay=700ms`)
      .then((responce) => responce.data.data);
  },
  // {
  //   "success": true,
  //   "data": {
  //     "2018-06-28": {
  //       "2018-06-28 10:00:00": {
  //         "day": "2018-06-28",
  //         "begin": "10:00",
  //         "end": "11:00",
  //         "date": "2018-06-28 10:00:00",
  //         "is_not_free": true
  //       },
  //       "2018-06-28 10:00:00": {
  //         "day": "2018-06-28",
  //         "begin": "10:00",
  //         "end": "11:00",
  //         "date": "2018-06-28 10:00:00",
  //         "is_not_free": false
  //       },
  //       ...,
  //     },
  //     "2018-06-29": {
  //       "2018-06-29 10:00:00": {
  //         "day": "2018-06-29",
  //         "begin": "10:00",
  //         "end": "11:00",
  //         "date": "2018-06-29 10:00:00",
  //         "is_not_free": false
  //       },
  //       ...,
  //     }
  //   },
  //   "message": ""
  // }
};
