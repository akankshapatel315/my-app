const express = require("express"); const app = express();
const PORT = 5000;
app.get("/", (req, res) => {
  res.send("Backend is running!");
});
app.get("/health", (req, res) => {
  res.status(200).send("hello i am akanksha");
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
console.log('hello from CI/CD');
console.log('hello from CI/CD');
console.log('trigger pipeline');
console.log('trigger pipeline v2');
