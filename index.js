const express = require("express");
const app = express();

app.get('/fact/:nb', (req,res) => {
  const nb = parseInt(req.params.nb);
  let factorial = 1;
  for (element = 1;element <= nb;element++){
    factorial = factorial * element;
  }
  res.status(200).json(factorial);
})

app.listen(8080, () => {
  console.log("server is running on 8080");
})