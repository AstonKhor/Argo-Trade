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

app.get('/tradeStock/api/', (req, res) => {
  res.redirect(`http://34.214.68.82/tradeStock/api?${Object.keys(req.query)[0]}=${req.query.id}`);
})
app.get('/tradeStock/img/:photo', (req, res) => {
  res.redirect(`http://34.214.68.82/img/${path.basename(req.url)}`)
})
app.get('/exclamation.png', (req, res) => {
  res.redirect('http://34.214.68.82/exclamation.png')
})
app.get('/questionMark.png', (req, res) => {
  res.redirect('http://34.214.68.82/exclamation.png')
})
app.get('/arrows_black.png', (req, res) => {
  res.redirect('http://34.214.68.82/exclamation.png')
})
app.get('/arrows.png', (req, res) => {
  res.redirect('http://34.214.68.82/exclamation.png')
})
app.get('/exclamation-button.png', (req, res) => {
  res.redirect('http://34.214.68.82/exclamation.png')
})


app.get('/about/getData/', (req, res) => {
  res.redirect(`http://13.52.245.200/about/getData?${Object.keys(req.query)[0]}=${req.query.id}`);
})

app.get('/news/getData', (req, res) => {
  res.redirect(`http://54.193.67.89/news/getData?${Object.keys(req.query)[0]}=${req.query.id}`);
})

app.get('/ratings/getData/', (req, res) => {
  res.redirect(`http://54.153.72.27/ratings/getData?${Object.keys(req.query)[0]}=${req.query.id}`);
})
app.get('/ratings/img/:photo', (req, res) => {
  res.redirect(`http://54.153.72.27/ratings/img/${path.basename(req.url)}`)
})
app.get('/ratings/:photo', (req, res) => {
  res.redirect(`http://54.153.72.27/ratings/${path.basename(req.url)}`)
})

app.get('/earnings/getData', (req, res) => {
  res.redirect(`http://54.67.103.66/earnings/getData?${Object.keys(req.query)[0]}=${req.query.id}`);
})

app.get('/navbar/img/:photo', (req, res) => {
  res.redirect(`http://54.219.176.99/navbar/img/${path.basename(req.url)}`)
})



app.listen(port, () => { console.log(`server up and running. Now listing on port ${port}`) });