const express = require('express');
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../public')));

app.post('/updateLineColors', (req, res) => {
  console.log(req.body);
  // all the routes to update linecolors
  res.end();
})

app.get('/graph/getStocks', (req, res) => {
  res.redirect(`http://54.153.91.76/graph/getStocks?${Object.keys(req.query)[0]}=${req.query.id}`);
})
app.get('/graph/img/:photo', (req, res) => {
  res.redirect(`http://54.153.91.76/graph/img/${path.basename(req.url)}`)
})

app.get('/tradeStock/api/:id', (req, res) => {
  res.redirect(`http://34.214.68.82/tradeStock/api/${path.basename(req.url)}`);
})
app.get('/tradeStock/img/:photo', (req, res) => {
  res.redirect(`http://34.214.68.82/img/${path.basename(req.url)}`)
})

app.get('/about/getData/:id', (req, res) => {
  res.redirect(`http://13.52.245.200/about/getData/${req.params.id}`);
})

app.get('/news/getData', (req, res) => {
  res.redirect(`http://54.193.67.89/news/getData?${Object.keys(req.query)[0]}=${req.query.id}`);
})

app.get('/ratings/getData/:id', (req, res) => {
  res.redirect(`http://localhost:3005/ratings/getData/${req.params.id}`);
})
app.get('/ratings/img/:photo', (req, res) => {
  res.redirect(`http://localhost:3001/ratings/img/${path.basename(req.url)}`)
})

app.get('/earnings/getData', (req, res) => {
  res.redirect(`http://54.67.103.66/earnings/getData?${Object.keys(req.query)[0]}=${req.query.id}`);
})

app.get('/navbar/img/:photo', (req, res) => {
  res.redirect(`http://localhost:3007/navbar/img/${path.basename(req.url)}`)
})



app.listen(port, () => { console.log(`server up and running. Now listing on port ${port}`) });