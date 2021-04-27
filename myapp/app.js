const { response } = require('express');
const express = require('express')
const app = express()
const port = 4000
const axios = require('axios');
app.use(express.json())

app.get('/employees', (req, res) => {

  axios.get('http://localhost:3000/employees/')
  .then(response => {
      console.log(response.data);
      res.json(response.data)
  })
  .catch(error => {
      console.log(error);
      res.status(500).send(error);
  });

})

app.get('/employees/:id', (req, res) => {

  var employeeId = req.params.id;

  axios.get('http://localhost:3000/employees/'+employeeId)
  .then(response => {
      console.log(response.data);
      res.json(response.data)
  })
  .catch(error => {
      console.log(error);
      res.status(500).send(error);
  });

})

app.post('/employees', (req, res) => {
  let body = req.body;

  console.log(body);

  axios.post('http://localhost:3000/employees/', body)
  .then(response => {
      console.log(response.data);
      res.json(response.data)
  })
  .catch(error => {
      console.log(error);
      res.status(500).send(error);
  });

})

app.patch('/employees/:id', (req, res) => {

  var employeeId = req.params.id;
  let body = req.body;
  
  console.log(body);

  axios.patch('http://localhost:3000/employees/'+employeeId, body)
  .then(response => {
      console.log(response.data);
      res.json(response.data)
  })
  .catch(error => {
      console.log(error);
      res.status(500).send(error);
  });

})

app.delete('/employees/:id', (req, res) => {

  var employeeId = req.params.id;

  axios.delete('http://localhost:3000/employees/'+employeeId)
  .then(response => {
      console.log(response.data);
      res.json(response.data)
  })
  .catch(error => {
      console.log(error);
      res.status(500).send(error);
  });

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})