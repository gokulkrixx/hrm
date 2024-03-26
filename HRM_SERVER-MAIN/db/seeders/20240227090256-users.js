'use strict';

module.exports = {
  up: (models, mongoose) => {
    return models.users
    .insertMany([
      {
        _id: "65dda5e1a7946887e0361a56",
        firstname: "rock",
        lastname: "wick",
        email: "rw@gmail.com",
        password: "$2a$12$drHEv4YvO7DeBparY0.FZ.H0W3ey7yvKhgtOeoYgXQ1NsN9MaxTCK",
        phone: "9876543213"
      },
      {
        _id: "65dda705a7946887e0361a57",
        firstname: "mac",
        lastname : "rambo",
        email: "mr@gmail.com",
        password: "$2a$12$oFnRqhugBQDpBBS1Koo3meRkBY1R5r0XdfbuSqMqJuMhdkxgohIOa",
        phone: "9349157204"
      }
    ])
  },

  down: (models, mongoose) => {
    return models.users
    .deleteMany({
      _id : {
        $in: [
          "65dda5e1a7946887e0361a56",
          "65dda705a7946887e0361a57"
        ],
      },
    })
    .then((res)=>{
      console.log(res.deletedCount);
    })
  }
};
