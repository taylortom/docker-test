'use strict';
const express = require('express');
const path = require('path');

console.log(process.env);
const config = {};

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

express()
  .get('/', (req, res) => res.send(`Hello World\n\n${JSON.stringify(config, null, 2)}`))
  .listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`));
