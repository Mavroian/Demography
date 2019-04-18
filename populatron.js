const fs = require("fs");

module.exports = {
  totalPopulation(callback) {
    const csv = new Promise((resolve, reject) =>
      fs.readFile("cities.csv", "utf8", (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      })
    );
    csv.then((data) => {
      let array = data.split("\n");
      let arr = [];
      array.forEach((list) => {
        arr.push(list.split(","));
      });

      arr.shift();
      let max = 0;
      arr.forEach((value) => {
        max += Number(value[2]);
      });
      callback(max);
    });
  },
};
