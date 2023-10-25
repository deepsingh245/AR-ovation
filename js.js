const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000; // You can choose a different port if needed

// Middleware to enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', async (req, res) => {
  const url = 'https://github.com/deepsingh245/Inovo-ED-AR-foreveryone/blob/master/car/scene.gltf'; // Replace with the actual URL you want to proxy
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error: Unable to proxy the request');
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
