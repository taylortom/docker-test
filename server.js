'use strict';
const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

express()
  .get('/', (req, res) => res.send('Hello World'))
  .listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`));