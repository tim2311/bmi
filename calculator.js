const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("Answer: " + result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.get('/bmiCalculator', (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmiCalculator', (req, res) => {

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * weight);

  res.send('Your BMI is: ' + bmi);
})
