const express = require("express");
const fs = require("fs");

const app = express();

const sumOfAllNumbers = (...arrayOfIntegers) => {
  let sum = 0;
  arrayOfIntegers.forEach((integer) => (sum += integer));
  return sum;
};

(async () => {
  const data = await fs.readFileSync(`${__dirname}/data.txt`, "utf-8");
  console.log(`We have ${data.split(/\s+/).length} words in data.txt file`);
})();

console.log(sumOfAllNumbers(5, 6, 8, 9, 5));

app.get("/", (req, res, next) => {
  res.status(200).json({
    data: "Hello World!",
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}.....`);
});
