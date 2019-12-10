const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));
// app.use('/', express.static('http://localhost:3001/Public'));

app.get('/graph/getStocks', (req, res) => {
  let id = req.query.id;
  let key = Object.keys(req.query);
  res.redirect(`http://localhost:3001/graph/getStocks?${key[0]}=${id}`);
})
app.get('/tradeStock/getStocks', (req, res) => {
  let id = req.query.id;
  let key = Object.keys(req.query);
  res.redirect(`http://localhost:3002/tradeStock/getStocks?${key[0]}=${id}`);
})
app.get('/about/getCompanies', (req, res) => {
  let id = req.query.id;
  let key = Object.keys(req.query);
  res.redirect(`http://localhost:3001/about/getCompanies?${key[0]}=${id}`);
})
app.get('/analyst/getStocks', (req, res) => {
  let id = req.query.id;
  let key = Object.keys(req.query);
  res.redirect(`http://localhost:3001/analyst/getStocks?${key[0]}=${id}`);
})
app.get('/earnings/getEarnings', (req, res) => {
  let id = req.query.id;
  let key = Object.keys(req.query);
  res.redirect(`http://localhost:3001/earnings/getEarnings?${key[0]}=${id}`);
})

app.listen(port, () => { console.log(`server up and running. Now listing on port ${port}`)});