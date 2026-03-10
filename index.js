const express = require('express');
const app = express();

app.use(express.json());

app.get('/add/:a/:b', (req, res) => {
  const result = parseFloat(req.params.a) + parseFloat(req.params.b);
  res.json({ result });
});

app.get('/subtract/:a/:b', (req, res) => {
  const result = parseFloat(req.params.a) - parseFloat(req.params.b);
  res.json({ result });
});

app.get('/multiply/:a/:b', (req, res) => {
  const result = parseFloat(req.params.a) * parseFloat(req.params.b);
  res.json({ result });
});

app.get('/divide/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  if (b === 0) return res.status(400).json({ error: 'Division by zero' });
  res.json({ result: a / b });
});

module.exports = app;"// test webhook" 
"// demo prof" 
